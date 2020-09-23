<template>
    <div class="page">
		<div class="publictit fix">
			<div class="text_ty"></div>
			<div class="runbox">
				<div class="orbit orbit1"></div>
			</div>
			<div class="gytit"><p class="masked">汉阴智慧水务管理平台</p></div>
			<userinfo></userinfo>
		</div>
		<div class="gy_biaoq fix">
			<div class="return left"><a href="javascript:history.go(-1)">返回</a></div>
			<div class="youset">您当前位置：水厂工艺</div>
			<ul class="gy_shaixuan left fix">
				<li v-for="(item,index) in seletcData">
					<p>{{item}}</p><i  @click="delectsel(index)"></i>
				</li>
			</ul>
			<div class="morebq">
				<Menu mode="horizontal" :theme="theme1" active-name="1">
					<Submenu name="3">
						<template slot="title">更多标签</template>
						<MenuItem v-for="(item,index) in moreLabel" :name="index" @click.native="selectMore(item,index)">{{item}}</MenuItem>
						<!-- <p v-for="(item,index) in moreLabel" class="title_l" :name="index" @click="selectMore(item,index)">{{item}}</p> -->
					</Submenu>
				</Menu>
			</div>
		</div>
		<div class="fix">
			<div class="slidebox">
				<div class="menulsbr">
					<h4><i></i>汉阴县水务公司</h4>
					<ul>
						<li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in subnavData">
							<p><i></i>{{item.name}}</p>
							<ul v-show="item.show">
								<li :class="[{actives: suSelect==index && activecs == indexs}]" v-for="(items,indexs) in item.list" v-on:click.stop="doThis(items,indexs,index)">{{items}}</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			
			<!-- 中间部分 -->
			<div class="gycenbox">
				<a-tabs>
					<a-tab-pane key="1" tab="配水池">
						<div class="tab_beng">
							<img src="../../assets/images/shuibengs.png">
							<div class="title1 title">水厂进水处</div>
							<div class="title2 title">潜水泵1</div>
							<div class="title3 title">潜水泵2</div>
							<div class="title4 title">至反应沉淀处</div>
							<div class="bengtl fix">
								<ul class="btul fix">
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
									<li>
										<h4>
											<span></span>
											<span></span>
											<span></span>
										</h4>
									</li>
								</ul>
							</div>
						</div>
					</a-tab-pane>
					<a-tab-pane key="2" tab="消毒设备">
					  <div class="tab_beng">
					  	<img src="../../assets/images/shuibeng.png">
					  	<div class="title1 title">水厂进水处</div>
					  	<div class="title2 title">潜水泵3</div>
					  	<div class="title3 title">潜水泵4</div>
					  	<div class="title4 title">至反应沉淀处</div>
					  </div>
					</a-tab-pane>
					<a-tab-pane key="3" tab="进水配水池">
					  <div class="tab_beng">
					  	<img src="../../assets/images/shuibeng.png">
					  	<div class="title1 title">水厂进水处</div>
					  	<div class="title2 title">潜水泵5</div>
					  	<div class="title3 title">潜水泵6</div>
					  	<div class="title4 title">至反应沉淀处</div>
					  </div>
					</a-tab-pane>
				  </a-tabs>
			</div>
			
			<!-- 右边 -->
			<div class="gyrightbox">
				<ul class="worter gyworter">
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal1' :duration='duration' :decimals="decimals"></countTo>万</h4>
						<p>水源蓄水量(方)</p>
					</li>
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal2' :duration='duration' :decimals="decimals"></countTo>万</h4>
						<p>净水蓄水量(方)</p>
					</li>
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal3' :duration='duration' :decimals="decimals"></countTo>万</h4>
						<p>净水供水量(方)</p>
					</li>
				</ul>
				<div class="gyr_data">
					<div>
						<ul class="gytst fix">
							<li>电脑手动使能</li>
							<li>程序手动使能</li>
						</ul>
						<ul class="gytsb fix">
							<li>水池液位：<em>{{code1}}.{{code}}m</em></li>
							<li>无水停泵液位：<em>{{code2}}.{{code}}m</em></li>
							<!-- <li>无水停泵液位：<em><span v-for="i in numArr">{{i}}</span>m</em></li> -->
						</ul>
						<ul class="fix gydbot">
							<li class="fix">
								<div class="ltitle"><p>清水池1：</p></div>
								<div class="rtitle">
									<h3>无水停泵液位：<span>{{code3}}.{{code}}m</span></h3>
									<h3>无水停泵液位：<span>{{code4}}.{{code}}m</span></h3>
									<h3>无水停泵液位：<span>{{code5}}.{{code}}m</span></h3>
								</div>
							</li>
							<li class="fix">
								<div class="ltitle"><p>清水池2：</p></div>
								<div class="rtitle">
									<h3>无水停泵液位：<span>{{code6}}.{{code}}m</span></h3>
									<h3>无水停泵液位：<span>{{code7}}.{{code}}m</span></h3>
									<h3>无水停泵液位：<span>{{code8}}.{{code}}m</span></h3>
								</div>
							</li>
						</ul>
						<ul class="fix gydbottom">
							<li>
								<div class="tit">潜水泵1启停：</div>
								<dl>
									<dt>启动</dt>
									<dt>停止</dt>
								</dl>
							</li>
							<li>
								<div class="tit">潜水泵2启停：</div>
								<dl>
									<dt>启动</dt>
									<dt>停止</dt>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import countTo from 'vue-count-to';
  import userinfo from "../../components/common/userinfo"
  export default {
      data () {
        return {
			  theme1: 'light',
			  suSelect:0,
			  activecs:0,
			  duration: 3000,//持续时间，以毫秒为单位
			  startVal: 0,// 初始值
			  decimals:2,//要显示的小数位数
			  endVal1: 109.6,// 最终值
			  endVal2:9.05,
			  endVal3:6.8,
			  seletcData:['GIS地理信息','水厂工艺'],
			  moreLabel:['新增和启动','活跃分析','时段分析','用户留存','流失用户'],
			  subnavData: [
				  {
					  name: '龙垭镇',
					  list: ['龙源水务公司', '水务公司'],
					  show: true
				  }, 
				  {
					  name: '观音河乡',
					  list: ['子集', '子集', '子集', '子集'],
					  show: false
				  }, 
				  {
					  name: '石条街乡',
					  list: ['子集', '子集', '子集'],
					  show: false
				  },
				  {
					  name: '酒店镇',
					  list: ['子集', '子集'],
					  show: false
				  }, 
				  {
					  name: '涧池镇',
					  list: ['金池大酒店水务公司', '花果村水务公司', '龙源水务公司'],
					  show: false
				  },
				],
			  code1:19,
			  code2:24,
			  code3:3,
			  code4:4,
			  code5:5,
			  code6:6,
			  code7:1,
			  code8:2,
			  code:'',
			  //numArr: [],
        }
	  },
      components: {countTo,userinfo},
      mounted(){
		  //this.perNum()
		  this.createCode()
      },
      methods:{
		  changeli: function(ind, item) {
			  // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
			  this.subnavData.forEach(i => {
				  // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
				  if (i.show !== this.subnavData[ind].show) {
					  i.show = false;
				  };
			  });
			  // 取反(true或false)
			  item.show = !item.show;
			  console.log(item.name)
		  },
		  doThis: function(items,index,faIndex) {
			  console.log(index,faIndex);
			  console.log(items);
			  this.suSelect = faIndex;
			  this.activecs = index;
		  },
		  selectMore(item,index){
			  this.seletcData.push(item);
			  this.moreLabel.splice(index,1);
			  console.log(item)
		  },
		  delectsel(index,item){
			  this.seletcData.splice(index,1);
			  this.moreLabel.push(item);
		  },
		
		//动态随机数变化
		perNum() {
		      var $random2 = parseInt(Math.random() * 5) + 1;
		      this.$randomPer += $random2;
		      this.$obj = String(this.$randomPer);
		      this.numArr = this.$obj.split('');
		      setTimeout(this.perNum, 5000);
			  this.$randomPer = parseInt(((new Date().getTime() - new Date(new Date().setHours(0, 0, 0, 0)).getTime()) / 10000)) + 10;this.perNum();
		},
		
		//动态随机数变化
		createCode() {
		      var code = '';
		      //设置长度，这里看需求，我这里设置了4
		      var codeLength = 2;
		      //设置随机字符
		      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
		      //循环codeLength 我设置的4就是循环4次
		      for (var i = 0; i < codeLength; i++) {
		          //设置随机数范围,这设置为0 ~ 36
		          var index = Math.floor(Math.random() * 9);
		          //字符串拼接 将每次随机的字符 进行拼接
		          code += random[index];
		      }
		      //将拼接好的字符串赋值给展示的code
		      this.code = code;
			  setTimeout(this.createCode, 2000);
		  },
      }
    }
</script>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
	.page{width: 100%;height: 100%;background: url(../../assets/images/gybj.jpg) no-repeat center top;background-size: 100% 100%;}
	.publictit{height: 74px;position: relative;}
	.gytit{height: 100%; background: url(../../assets/images/gytit.png) no-repeat center center;font-size: 24px;color: #02eeff;text-align: center;line-height: 74px;}
	.gytit p{padding-left: 45px;}
	.text_ty{ width:50px; height:50px;background:url(../../assets/images/yqs.png) no-repeat;background-size: 100% 100%; position:absolute; top:12px;left: 20px;}
	.text_ty:before{content:'';display:block;width:100%;height:100%;opacity:.7;background:url(../../assets/images/yqs.png) no-repeat;background-size: 100% 100%;animation:scale 2s infinite cubic-bezier(0,0,.49,1.02);animation-delay:200ms;}
	.runbox {width:60px;height:60px;position:absolute;top:0;}
	.orbit {width:100%;height:100%;position: absolute;top:8px;left: 14px;border-radius: 50%;border: solid;border-color:#1ad8f5 transparent transparent transparent;border-width: 2px;box-sizing: border-box;transform: rotate(0deg);transform-origin: center;}
	.orbit1{-webkit-animation: orbit1 10s linear infinite;animation: orbit1 10s linear infinite;}
	@keyframes orbit1 {
	  from {transform: rotate(360deg);}
	  to {transform: rotate(0deg);}
	}
	@keyframes scale {
		0% {transform: scale(0.5);opacity: 1;}
		50% {transform: scale(1);opacity: 1;}
		100% {transform: scale(0.5);opacity: 1;}
	}
	
	.gy_biaoq{height: 40px;background: url(../../assets/images/gy1.png) no-repeat;padding: 0 30px;display: flex;position: relative;}
	.return{background: url(../../assets/images/fh.png) no-repeat 0 center;color: #e4fdff;line-height: 40px;font-size: 16px;padding-left:15px;cursor: pointer;margin-right: 30px;}
	.return a{width: 100%;height: 100%;display: block;color: #e4fdff;}
	
	.gy_shaixuan {display: none;}
	.gy_shaixuan li{color: #333;float: left;height: 28px;line-height: 28px;border-radius: 4px;background: #fff; margin-right: 8px;margin-top: 6px;padding: 0 10px;overflow: hidden;cursor: pointer;transition: 0.5s;}
	.gy_shaixuan li:hover{background:rgba(255,255,255,0.5);}
	.gy_shaixuan li p{display: inline-block;float: left;margin-right: 10px;}
	.gy_shaixuan li i{width: 12px;height: 100%;display: inline-block;background: url(../../assets/images/cha.png) no-repeat 0 center;float: left;}
	.gy_contbox{width: 100%;}
	.gy_contbox .ant-layout{display: block;}
	.morebq{width: 104px;height: 28px;position: absolute;top: 6px;right: 32px; background: #2085ff;border-radius:5px;display: none;}
	.morebq .ivu-menu-horizontal{height: 100%;line-height: 28px;}
	.morebq .ivu-menu-light{background: none;border: 0;}
	
	.morebq .ivu-menu-horizontal.ivu-menu-light:after{display: none;}
	.morebq .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{border-bottom: 0;}
	.youset{color: #fff;line-height: 40px;position:absolute;right: 32px;font-size: 15px;}
	
	// 左侧折叠菜单
	.slidebox{width: 15.8%;float: left;margin-top: -1px;background: url(../../assets/images/gy2.png) no-repeat;background-size: 100% 100%;color: #e4fdff;font-size: 16px;box-sizing: border-box;height: calc(100vh - 74px - 40px); }
	.menulsbr {
	        padding:15px 30px;
			>h4{color: #fff;height: 40px;line-height: 40px;}
			h4 i{width: 20px;height: 20px;position:relative;top: -1px;margin-right: 10px; display: inline-block; background: url(../../assets/images/fh.png) no-repeat 0 center;transform: rotate(-90deg);}
	        >ul {
	            width: 100%;
	            @include clearfix;padding-left: 20px;
	            >li {
	                width: 100%;
	                cursor: pointer;line-height: 40px;
	                &:hover {
	                    //background-color: #ff9800;
	                }
					>p i{width: 20px;height: 20px;position:relative;top: 4px;margin-right: 10px; display: inline-block; background: url(../../assets/images/fh.png) no-repeat 0 center;transform: rotate(-180deg);}
	                >ul {
	                    width: 100%;padding-left: 30px;padding-bottom: 10px;
	                    li{
	                        &:hover{
	                            color: #02eeff;
	                        }
	                    }
	                }
	            }
	            .active p i {
	                transform: rotate(-90deg);position:relative;top: -1px;
	            }
	        }
	}
	.menulsbr > ul > li > ul li.actives{color: #02eeff;}
	
	// 中间部分
	.gycenbox{width: 49%;margin-left: 1%; float: left;padding-top: 20px;}
	.tab_beng{margin-top: 40px;margin-left: 10px;position: relative;height: 490px;color: #e4fdff;}
	.tab_beng img{width: 100%;height: 100%;}
	.tab_beng .title{position: absolute;font-size: 16px;}
	.title1{left: 2px; top: 38%;}
	.title2{left: 27%; top: 0;color: #02eeff;}
	.title3{left: 65%; top: 0;color: #02eeff;}
	.title4{right: 42px; top: 38%;}
	
	.bengtl{width: 100%;height:265px;position: absolute;left: 0;bottom: 0; z-index: 2;}
	.btul li{border-radius:20px;overflow: hidden;position: absolute;}
	.btul li:nth-child(1){width:134px;height: 9px;position: absolute;left: 0;top: 0;z-index: 4;}
	.btul li h4{width: 100%;height:100%; background:#0d1b4e;border-radius:20px;overflow: hidden;animation: bgcolor ease-in-out 3s infinite alternate;}
	.btul li h4 span{ background: #2085ff;display: block;border-radius:20px;animation: move ease-in-out 3s infinite alternate;}
	
	.btul li:nth-child(1) h4{transition-delay: 0.5s;}
	.btul li:nth-child(2) h4{transition-delay: 1s;}
	.btul li:nth-child(3) h4{transition-delay: 1.5s;}
	.btul li:nth-child(4) h4{transition-delay: 2s;}
	.btul li:nth-child(5) h4{transition-delay: 2.5s;}
	.btul li:nth-child(6) h4{transition-delay: 3s;}
	.btul li:nth-child(7) h4{transition-delay: 3.5s;}
	.btul li:nth-child(8) h4{transition-delay: 4s;}
	.btul li:nth-child(9) h4{transition-delay: 4.5s;}
	.btul li:nth-child(10) h4{transition-delay: 5s;}
	.btul li:nth-child(11) h4{transition-delay: 5.5s;}
	
	.btul li:nth-child(1) h4 span:nth-child(1){transition-delay: 0.5s;}
	.btul li:nth-child(1) h4 span:nth-child(2){transition-delay: 1s;}
	.btul li:nth-child(1) h4 span:nth-child(3){;transition-delay: 1.5s;}
	
	.btul li:nth-child(2) h4 span:nth-child(1){transition-delay: 2s;}
	.btul li:nth-child(2) h4 span:nth-child(2){transition-delay: 2.5s;}
	.btul li:nth-child(2) h4 span:nth-child(3){;transition-delay: 3s;}
	
	.btul li:nth-child(3) h4 span:nth-child(1){transition-delay: 3.5s;}
	.btul li:nth-child(3) h4 span:nth-child(2){transition-delay: 4s;}
	.btul li:nth-child(3) h4 span:nth-child(3){;transition-delay: 4.5s;}
	.btul li:nth-child(3) h4 span:nth-child(4){;transition-delay: 5s;}
	.btul li:nth-child(3) h4 span:nth-child(5){;transition-delay: 5.5s;}
	.btul li:nth-child(3) h4 span:nth-child(6){;transition-delay: 6s;}
	.btul li:nth-child(3) h4 span:nth-child(7){;transition-delay: 6.5s;}
	
	.btul li:nth-child(4) h4 span:nth-child(1){transition-delay: 7s;}
	.btul li:nth-child(4) h4 span:nth-child(2){transition-delay: 7.5s;}
	
	.btul li:nth-child(5) h4 span:nth-child(1){transition-delay: 8s;}
	.btul li:nth-child(5) h4 span:nth-child(2){transition-delay: 8.5s;}
	
	.btul li:nth-child(6) h4 span:nth-child(1){transition-delay: 9s;}
	.btul li:nth-child(6) h4 span:nth-child(2){transition-delay: 9.5s;}
	
	.btul li:nth-child(7) h4 span:nth-child(1){transition-delay: 10s;}
	.btul li:nth-child(7) h4 span:nth-child(2){transition-delay: 10.5s;}
	
	.btul li:nth-child(8) h4 span:nth-child(1){transition-delay: 11s;}
	.btul li:nth-child(8) h4 span:nth-child(2){transition-delay: 11.5s;}
	.btul li:nth-child(8) h4 span:nth-child(3){;transition-delay: 12s;}
	.btul li:nth-child(8) h4 span:nth-child(4){;transition-delay: 12.5s;}
	.btul li:nth-child(8) h4 span:nth-child(5){;transition-delay: 13s;}
	
	.btul li:nth-child(9) h4 span:nth-child(1){transition-delay: 13.5s;}
	.btul li:nth-child(9) h4 span:nth-child(2){transition-delay: 14s;}
	
	.btul li:nth-child(10) h4 span:nth-child(1){transition-delay: 14.5s;}
	.btul li:nth-child(10) h4 span:nth-child(2){transition-delay: 15s;}
	.btul li:nth-child(10) h4 span:nth-child(3){;transition-delay: 15.5s;}
	.btul li:nth-child(10) h4 span:nth-child(4){;transition-delay: 16s;}
	
	.btul li:nth-child(11) h4 span:nth-child(1){transition-delay: 16.5s;}
	.btul li:nth-child(11) h4 span:nth-child(2){transition-delay: 17s;}
	.btul li:nth-child(11) h4 span:nth-child(3){;transition-delay: 17.5s;}
	
	.btul li:nth-child(1) h4 span{width: 30px;height: 9px;float: left;}
	.btul li:nth-child(1) h4 span+span{margin-left: 22px;}
	
	.btul li:nth-child(2){width:9px;height: 100%;left: 125px;top: 0;}
	.btul li:nth-child(2) h4 span{width: 100%;height: 40px;margin-top:36px;}
	
	.btul li:nth-child(3){width:510px;height:9px;left: 125px;bottom: 0;}
	.btul li:nth-child(3) h4 span{width: 40px;height: 9px;float: left; margin-right: 32px;}
	
	.btul li:nth-child(4){width:9px;height: 125px;left: 630px;bottom: 0;}
	.btul li:nth-child(4) h4 span{width: 100%;height: 30px;margin-top:16px;}
	
	.btul li:nth-child(5){width:9px;height: 125px;left: 265px;bottom: 0;}
	.btul li:nth-child(5) h4 span{width: 100%;height: 30px; margin-top:16px;}
	
	.btul li:nth-child(6){width:100px;height:9px;left: 357px;top: 78px;}
	.btul li:nth-child(6) h4 span{width: 30px;height: 9px;float: left; margin-right:20px;}
	
	.btul li:nth-child(7){width:9px;height: 118px;left: 448px;top: 80px;z-index: 3;}
	.btul li:nth-child(7) h4 span{width: 100%;height: 30px;margin-top:16px;}
	
	.btul li:nth-child(8){width:346px;height:9px;left: 448px;bottom: 67px;}
	.btul li:nth-child(8) h4 span{width: 40px;height: 9px;float: left;margin-right:26px;}
	
	.btul li:nth-child(9){width:80px;height:9px;left: 716px;top: 78px;}
	.btul li:nth-child(9) h4 span{width: 20px;height: 9px;float: left;margin-right:15px;}
	
	.btul li:nth-child(10){width:9px;height: 197px;left: 787px;top: 0;z-index: 2;}
	.btul li:nth-child(10) h4 span{width: 100%;height: 30px; margin-top:16px;}
	
	.btul li:nth-child(11){width:140px;height:9px;right: 0;top: 0;}
	.btul li:nth-child(11) h4 span{width: 27px;height: 9px;float: left;margin-left:15px;}
	
	@keyframes bgcolor {
		0% {background: #636c8f;}
		25% {background: #3d4e8e;}
		50% {background: #0d1b4e;}
		75% {background: #3d55ac;}
		100% {background: #374d9e;}
	}
	@keyframes move {
		0% {background: #92bff6;transform: scale(1);}
		25% {background: #4a89d4;transform: scale(0.9);}
		50% {background: #fff;transform: scale(0.85);}
		75% {background: #2e68ae;transform: scale(0.9);}
		100% {background: #2085ff;transform: scale(1);}
	}
	
	// 右边
	.gyrightbox{width:31.5%;float: right;margin-right: 30px;
		.gyworter{display: flex;float: none;margin-top: 15px;margin-right: 0;justify-content: space-between;margin-right: -25px;}
		>.gyworter li{margin-bottom: 0;flex: 0 0 33%;}
		>.gyworter li p{margin-top: 10px;}
		.gyr_data{height: 631px;background: url(../../assets/images/gy5.png) no-repeat;background-size: 100% 100%; margin-top: 15px;}
		.gyr_data >div{margin: 0 10%;padding: 15px 0;}
		.gytst li{float: left;width: 48.5%;height: 42px;line-height: 42px;background: url(../../assets/images/gy3.png) no-repeat;background-size:100% 100%;text-align: center;font-size: 18px;color: #f19714;cursor: pointer;margin-top: 10px;}
		.gytst li:nth-child(2n){float: right;background: url(../../assets/images/gy4.png) no-repeat;background-size:100% 100%;color: #2085ff;}
		.gytsb{margin-top: 22px;}
		.gytsb li{float: left;width: 48.5%;padding: 0 3%; height: 42px;line-height: 42px;background: #0a3069;border-radius: 5px;color: #e4fdff;font-size: 18px;}
		.gytsb li:nth-child(2n),.gytsb li em{float: right;}
		.gytsb li em{transition: 0.5s;}
		.gydbot li{height: 147px;background: url(../../assets/images/gy6.png) no-repeat;background-size:100% 100%;margin-top: 20px;display: flex;color: #e4fdff;font-size: 18px;}
		.ltitle{display: flex;width: 120px;align-items: center;justify-content: center;}
		.ltitle p{position: relative;left: 7px;}
		.rtitle{flex: 1;padding-left: 15px;}
		.rtitle h3{height: 49px;line-height: 49px;color: #e4fdff;font-size: 18px;margin: 0;}
		.rtitle h3 span{float: right;margin-right: 20px;}
		.gydbottom{margin-top: 30px;}
		.gydbottom li{color: #e4fdff;font-size: 18px;display: flex;margin-top: 20px;}
		.gydbottom li .tit{width: 36%;display: flex;line-height: 42px;}
		.gydbottom li dl{flex: 1;}
		.gydbottom li dl dt{float: left;height: 42px;line-height: 42px;text-align: center; width: 47%;background: #14a14f;border-radius: 5px;cursor:pointer;}
		.gydbottom li dl dt+dt{float: right;background: #c61907;}
	}
</style>