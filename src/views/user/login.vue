<template>
    <div class="login-page">
		
		<liuxing></liuxing>
		<!-- <snow></snow> -->
        <div class="login-wrapper">
            <header class="nav-header" >
                <div class="headerlogo masked">汉阴县农村水务智慧管理平台</div>
            </header>
            <row class="login-main">
                <i-col class="login-img" :xs="24" :sm="24" :md="12" :lg="12">
					<star></star>
				</i-col>
                <i-col class="login-form center-horizon" :xs="24" :sm="24" :md="12" :lg="12">
                    <Tabs active-key="key1">
                        <Tab-pane label="智慧水务平台管理系统" key="key1" name="name1">
                            <Form ref="formLogin" :model="formLogin" :rules="ruleInline" inline>
                                <FormItem prop="username">
                                    <Input type="text" v-model="formLogin.username" placeholder="请输入用户名">
                                        <Icon type="ios-contact-outline" slot="prepend"></Icon>
                                    </Input>
                                </FormItem>
                                <FormItem prop="password">
                                    <Input type="password" v-model="formLogin.password" placeholder="请输入密码">
                                        <Icon type="ios-lock" slot="prepend"></Icon>
                                    </Input>
                                </FormItem>
								<div class="drag" ref="dragDiv">
								        <div class="drag_bg"></div>
								        <div class="drag_text">{{confirmWords}}</div>
								        <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
								    </div>
                                <div class="fix forget">
									<span class="left">
										<Checkbox v-model="single">记住密码</Checkbox>
									</span>
									<em class="right">忘记密码?</em>
								</div>
                                <FormItem>
                                    <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
                                </FormItem>
                            </Form>
                        </Tab-pane>
                        </Tabs>
                </i-col>
            </row>
            <!--底部-->
            <loginfooter></loginfooter>
        </div>
    </div>
</template>
<script>
  import '../../assets/css/login.less'
  import liuxing from "../../components/common/liuxing"
  import snow from "../../components/common/snow"
  import star from "../../components/common/star"
  import loginfooter from "../../components/common/loginfooter"
  export default {
    name:"login",
	components: {star,snow,liuxing,loginfooter},
    data () {
      return {
          formLogin: {
              username: '',
              password: '',
          },
          ruleInline: {
              username: [
                  { required: true, message: '请输入用户名', trigger: 'blur' },
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
              ],
          },
		  usernamed:'admin',//用户名
		  passwordd:'admin888',//密码
		  single: true,//记住密码
		  beginClientX:0,           /*距离屏幕左端距离*/
		  mouseMoveStata:false,     /*触发拖动状态  判断*/
		  maxwidth:'',               /*拖动最大宽度，依据滑块宽度算出来的*/
		  confirmWords:'拖动滑块验证',   /*滑块文字*/
		  confirmSuccess:false           /*验证成功判断*/
      }
    },
      created(){
      },
	  mounted(){
		  this.getCookie();
		  this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
		  document.getElementsByTagName('html')[0].addEventListener('mousemove',this.mouseMoveFn);
		  document.getElementsByTagName('html')[0].addEventListener('mouseup',this.moseUpFn)
	  },
	  
      methods:{
			handleSubmit(name) {
			    const self = this;
				//验证表单
				this.$refs[name].validate((valid) => {
					  if (!valid) {
						  return;
					  }
				})
				//判断复选框是否被勾选 勾选则调用配置cookie方法
				if (self.single == true) {
					console.log("single == true");
					//传入账号名，密码，和保存天数3个参数
					self.setCookie(self.formLogin.username, self.formLogin.password, 7);
				}else {
				  console.log("清空Cookie");
				  //清空Cookie
				  self.clearCookie();
				}
				let loginParam ={
				  username:this.formLogin.username,
				  password:this.formLogin.password,
				}
				//在登录页面进行登录，跟后台进行对接，登录成功的时候提交一个mutations保存后台返回过来的登录信息
				let user = {
				    token : 'token',
				    name : 'cher'
				}
				if(loginParam.username && loginParam.password){
					if(this.confirmSuccess == false){
						this.$Message.error('请拖动滑块验证');
						return false;
					}
					if(loginParam.username != this.usernamed){
						this.$Message.error('用户名输入不正确');
						return false;
					}
					if(loginParam.password != this.passwordd){
						this.$Message.error('密码输入不正确');
						return false;
					}
					else{
						this.$Message.success('登录成功');
						this.$router.push({path:"/index",query: {username: this.formLogin.username}})
					}
				}
				this.$store.commit('addUser',user);
			},
			//设置cookie
			setCookie(c_name, c_pwd, exdays) {
				var exdate = new Date(); //获取时间
				exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
				//字符串拼接cookie
				window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
				window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
			},
			//读取cookie
			getCookie: function() {
				if (document.cookie.length > 0) {
					var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
					for (var i = 0; i < arr.length; i++) {
						var arr2 = arr[i].split('='); //再次切割
						//判断查找相对应的值
						if (arr2[0] == 'userName') {
							this.formLogin.username = arr2[1]; //保存到保存数据的地方
						} else if (arr2[0] == 'userPwd') {
							this.formLogin.password = arr2[1];
						}
					}
				}
			},
			//清除cookie
			clearCookie: function() {
				this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
			},
		  mousedownFn:function (e) {
			  if(!this.confirmSuccess){
				  e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
				  this.mouseMoveStata = true;
				  this.beginClientX = e.clientX;
			  }
		  },//mousedoen 事件
		  successFunction(){
			  this.confirmSuccess = true
			  this.confirmWords = '验证通过';
			  if(window.addEventListener){
				  document.getElementsByTagName('html')[0].removeEventListener('mousemove',this.mouseMoveFn);
				  document.getElementsByTagName('html')[0].removeEventListener('mouseup',this.moseUpFn);
			  }else {
				  document.getElementsByTagName('html')[0].removeEventListener('mouseup',()=>{});
			  }
			  document.getElementsByClassName('drag_text')[0].style.color = '#fff'
			  document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
			  document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px';
		  },//验证成功函数
		  mouseMoveFn(e){
			if(this.mouseMoveStata){
				let width = e.clientX - this.beginClientX;
				if(width>0 && width<=this.maxwidth){
					document.getElementsByClassName('handler')[0].style.left = width + 'px';
					document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
				}else if(width>this.maxwidth){
					this.successFunction();
				}
			}
          },//mousemove事件
		  moseUpFn(e){
			this.mouseMoveStata = false;
			var width = e.clientX - this.beginClientX;
			if(width<this.maxwidth){
				document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
				document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
			}
		 },                 
       }
  }
</script>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
	.forget{margin-top: 30px;}
	.forget em{margin-right: 10px;}
</style>