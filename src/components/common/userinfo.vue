<template>
  <div class="gyt_right">
		<div class="xiaoxi left">
			<div class="newsbox">
				<a-tabs>
					<a-tab-pane key="1" tab="我的消息">
						<ul class="newslist">
							<li><a>点击那只笔更改数据,更改后从新覆盖之前的数据</a></li>
							<li><a>22222222222222</a></li>
							<li><a>333333333</a></li>
							<li><a>4444444444</a></li>
							<li><a>555555555555</a></li>
							<li><a>666666666</a></li>
						</ul>
					</a-tab-pane>
					<a-tab-pane key="2" tab="水厂信息">
						<ul class="newslist">
							<li><a>点击那只笔更改数据,更改后从新覆盖之前的数据</a></li>
							<li><a>22222222222222</a></li>
						</ul>
					</a-tab-pane>
					<a-tab-pane key="3" tab="水厂动态">
						<ul class="newslist">
							<li><a>4444444444</a></li>
							<li><a>555555555555</a></li>
							<li><a>666666666</a></li>
						</ul>
					</a-tab-pane>
				</a-tabs>
			</div>
		</div>
		<div class="users right"><i></i>
			<div class="userl">
				<ul class="userin">
					<li>个人信息</li>
					<li>清除缓存</li>
					<li @click="loginOut">退出登录</li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: "userinfo",
    data () {
      return {
		  
      }
    },
  
    mounted () {
    },
    methods:{
		//退出登录
		loginOut(){
			this.$confirm('此操作将注销登录, 是否继续?', '提示', {
			            confirmButtonText: '确定',
			            cancelButtonText: '取消',
			            type: 'warning'
			          }).then(() => {
			            // this.getRequest("/logout");
			            window.sessionStorage.removeItem("user")
						window.localStorage.removeItem('user');
			            this.$router.replace("/");
			            //触发后禁止浏览器的后退键
			            history.pushState(null, null, document.URL);
			            window.addEventListener("popstate", function (e) {
			              history.pushState(null, null, document.URL);
			            }, false);
			          }).catch(() => {
			            this.$message({
			              type: 'info',
			              message: '已取消操作'
			            });
			          });
		},
    },
    
  }
</script>

<style lang="less" scoped>
  .gyt_right{position: absolute;right: 35px;top: 19px;}
  .xiaoxi{width: 36px;height: 36px;background: url(../../assets/images/xiaoxi.png) no-repeat;cursor: pointer;position: relative;}
  .xiaoxi:hover .newsbox{display: block;}
  .newsbox{width: 360px;position: absolute;right: 0;top: 35px;z-index: 999; background: #fff;padding:0 10px;box-shadow: 0 0 2px #ccc;display: none;}
  .newslist li{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;height: 40px;line-height: 40px;position: relative;padding-left: 15px;transition: all 0.5s;border-bottom: 1px dashed #ccc;}
  .newslist li:last-child,.userin li:last-child{border-bottom: 0;}
  .newslist li::before{width: 6px;height: 6px;background: #333;border-radius: 50%;content: '';position: absolute;left: 0;top: 50%;transform: translateY(-50%);}
  .newslist li a{color: #333;}
  .newslist li:hover{border-bottom-color: #007AFF;}
  .newslist li:hover a{color: #007AFF;width: 100%;height: 100%;display: block;}
  .newslist li:hover::before{background: #007AFF;}
  
  .users{height: 36px;width: 48px;background: url(../../assets/images/user.png) no-repeat;margin-top: 5px;margin-left: 30px;cursor: pointer;}
  .users i{width: 13px;height: 9px;background: url(../../assets/images/sjx.png) no-repeat;display: block;float: right;margin-top: 10px;}
  .userl{width: 100%;height: 100%;position: relative;display: none;}
  .userin{width: 100px;position: absolute;right: -5px;top: 35px;background: #fff;z-index: 999;padding:0 10px;box-shadow: 0 0 2px #ccc;}
  .userin li{height: 40px;line-height: 40px;text-align: center;border-bottom: 1px dashed #ccc;color: #333;transition: all 0.5s;}
  .users:hover .userl{display: block;}
  .userin li:hover{color: #007AFF;border-bottom-color: #007AFF;}
</style>
