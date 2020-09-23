
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
			<div class="youset">您当前位置：视频监控</div>
		</div>
		<div class="fix">
			<div class="slidebox">
				<div class="menulsbr">
					<h4><i></i>县水利局</h4>
					<ul>
						<li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in subnavData">
							<p><i></i>{{item.name}}</p>
							<ul v-show="item.show"> 
								<li :class="[{actives: suSelect==index&&activecs == indexs}]" v-for="(items,indexs) in item.list" v-on:click.stop="doThis(items,indexs,index)">{{items.subname}}</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="gycenboxse">
				<div class="mc_left">
				      <div class="pb_tit">视频详情</div>
					  <div class="videoboxs">
						   <div class="videobox">
								<div class="videoimg">
									<img :src="imgurl"/>
									<div class="vilists">
										<ul>
											<li :class="{active:videoactive === index}" @click="chvideo(index,item)" v-for="(item,index) in videoList">{{item}}</li>
											<div class="videomin" v-show="showvideo">
												<div class="videos"></div>
												<div class="closevideo" @click="closeVideo(index)">X</div>
											</div>
										</ul>
									</div>
								</div>
						   </div>
						   <div class="videor">
							   <h3>{{bigtitle}}</h3>
							   <div class="vdcont">
								   <p>今天是走进童话世界的一天，白雪中的木屋里住着一位圣诞老人，推开门你就能看到他。 2019年11月23日，罗瓦涅米圣诞老人村开启魔幻圣诞节时刻。 罗瓦涅米是官方认可的圣诞老人故乡，也是世界上经联合国认证的圣诞老人故乡，圣诞老人当然也是这座城里出名的居民。坐落在北极圈上的圣诞老人村全年开放，每年吸引着50多万来自世界各地的游客。 传说在二战中,罗凡涅米被完全摧毁，美国时任总统罗斯福的妻子埃莉诺，前往洛瓦涅米见证了重建圣诞老人村的过程，但是圣诞老人的家却在那座神奇的耳朵山（Korvatunturi）。至于具体的位置嘛，那是个大大的秘密，地球上没几个人知道。所以，圣诞老人决定在拉普兰首府罗瓦涅米设立一个“办事处”接待总统夫人拜访，于是、这座小屋标志着圣诞老人村的诞生。</p>
								   <p>早餐后前往挪威瓦朗厄尔峡湾所在地希尔克内斯，这里是著名的野生帝王蟹捕捞圣地，在当地渔民的带领下出发前往北冰洋捕猎帝王蟹，体验当地鱼民生活后，品尝一顿现场捕捞的海中帝王大餐，结束后乘车返回伊纳里。夜宿萨米极光营地或同等级酒店。 （如不参加当天希尔克内斯帝王蟹捕捞活动，请自由游览伊瓦洛度假村和伊瓦洛小镇，无导游陪伴，度假村内及伊瓦洛小镇上有多种雪地冰地体验活动及萨米博物馆等游览项目。</p>
								   <p>伊纳里极光营地是芬兰高维度的极光营地、比邻莱门河国家森林公园和芬兰极光之城——伊纳里的帕塔里萨米人文化中心，整座营地被雪林和冰湖所覆盖，位置非常隐蔽、与世隔绝的世外桃源，营地所有房间都是传统萨米家庭风格，营地仅有23个房间，分布在两栋建筑内，配套设施有聊天的沙发区、户外的篝火防寒区、充满萨米风情的木质帐篷餐厅。营地就在冰湖畔，整晚都可以等极光。</p>
								   <p>人类追求美食的脚步从未停歇，对未知探险的热情也从不消退，北冰洋的帝王蟹恰到好处的满足了美食+探险的双重需求。 北冰洋捕猎 在当地渔民的带领下出发出发前北冰洋捕猎帝王蟹，当天根据海面结冰情况选择捕鱼船或者冰面摩托、捕捞海洋生物，其中著名的就是北极帝王蟹，这里的帝王蟹重量为4-8公斤，展开后超过2米的北冰洋海底的霸主，现场观看渔民捕捞帝王蟹，随后，当地向导和您一起享用捕获的猎物。</p>
							   </div>
						   </div>
					   </div>
					  <div class="fix tabdata">
					  	<div data-v-5391d79e="" class="ant-table-wrapper"><div data-v-5391d79e="" class="ant-table-wrapper"><div class="ant-spin-nested-loading"><div class="ant-spin-container"><div class="ant-table ant-table-scroll-position-left ant-table-small"><div class="ant-table-content"><!----><div class="ant-table-body"><table class=""><colgroup><col style="width: 120px; min-width: 120px;"><col><col><col><col><col></colgroup><thead class="ant-table-thead"><tr><th key="a1" class=""><div>收费方式</div></th><th key="a2" class=""><div>收费笔数</div></th><th key="a3" class=""><div>实收金额(元)</div></th><th key="a4" class=""><div>之前余额(元)</div></th><th key="a5" class=""><div>应收金额(元)</div></th><th key="a6" class=""><div>之后余额(元)</div></th></tr></thead><tbody class="ant-table-tbody"><tr class="ant-table-row ant-table-row-level-0" data-row-key="0"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->现金</td><td>4674</td><td>385.40</td><td>27717.66</td><td>8335.05</td><td>2544.31</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="1"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->微信公众号</td><td>1873</td><td>1687.00</td><td>34982.69</td><td>24942.12</td><td>32332.13</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="2"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->自助机</td><td>1842</td><td>13654.72</td><td>24444.93</td><td>23452.41</td><td>17349.39</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="3"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->扫码盒子</td><td>1299</td><td>46995.04</td><td>19886.69</td><td>38238.31</td><td>2727.93</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="4"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->APP</td><td>4236</td><td>8968.53</td><td>35011.40</td><td>25503.11</td><td>25185.34</td></tr></tbody></table></div></div></div><ul unselectable="unselectable" class="ant-pagination mini ant-table-pagination"><li title="上一页" aria-disabled="true" class="ant-pagination-disabled ant-pagination-prev"><a class="ant-pagination-item-link"><i aria-label="图标: left" class="anticon anticon-left"><svg viewBox="64 64 896 896" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></i></a></li><li title="1" tabindex="0" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"><a>1</a></li><li title="下一页" aria-disabled="true" class="ant-pagination-disabled ant-pagination-next"><a class="ant-pagination-item-link"><i aria-label="图标: right" class="anticon anticon-right"><svg viewBox="64 64 896 896" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></a></li><!----></ul></div></div></div></div>
					  </div>
					  
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
  import Chimee from "chimee";
  import flv from 'chimee-kernel-flv';
  import hls from 'chimee-kernel-hls';
  import userinfo from "../../components/common/userinfo"
  export default {
      data () {
        return {
		  theme1: 'light',
		  current: 1,
		  suSelect:0,
		  activecs:0,
		  bigtitle:'',
		  imgurl: null,
		  //videourl: 'http://hls01open.ys7.com/openlive/023ebe67a4104d23a6f8586b9dd341ce.m3u8',
		  subnavData: [
			  {
				  name: '龙垭镇',
				  list:[
					  {
						  subname:'龙源水务公司',
						 },
					  {
						  subname:'鑫源水务公司',
						  },
				  ],
				  show: true
			  }, 
			  {
				  name: '观音河乡',
				  list:[
					  {
						  subname:'山水铭居',
						  },
					  {
						  subname:'康庄大道',
						  },
					  {
						  subname:'药王谷',
						  },
				  ],
				  show: false
			  }, 
			  {
				  name: '石条街乡',
				  list:[
					  {
						  subname:'世外桃源',
						  },
					  {
						  subname:'蝴蝶谷',
						  },
					  {
						  subname:'光明顶',
						 },
				  ],
				  show: false
			  },
			],
			videoactive:0,
			showvideo:false,
			videoList:['水厂视频','县级水厂视频','镇级水厂视频']
		}
	  },
      components: {userinfo},
      mounted(){
		  this.initData();
		  this.playvideo();
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
			  this.bigtitle = items.subname
		  },
		  //右边默认显示左边第一个的数据
		  initData(){
			  let item = this.$route.query.item;
			  console.log(item)
               this.bigtitle = item.sname;
			   this.imgurl = item.imgurl;
               this.listData = this.subnavData[0].list[0].sublist;
           },
		  Todetail(index,item){
			  this.$router.push({ path: "/videoShow", query:{item:item}});
		  },
		  chvideo(index,item){
				this.videoactive = index;
				this.showvideo = true;
		  },
		  playvideo(){
		  		const chimee = new Chimee({
		  		  wrapper: ".videos",
		  		  src:"http://hls01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd.m3u8",
		  		  controls: true,
		  		  autoplay: true,
		  		  kernels: {flv,hls}
		  		});
		  		chimee.play();
		  },
		  closeVideo(index){
			  this.showvideo = false;
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
	.gy_shaixuan li{color: #333;float: left;height: 28px;line-height: 28px;border-radius: 4px;background: #fff; margin-right: 8px;margin-top: 6px;padding: 0 10px;overflow: hidden;cursor: pointer;}
	.gy_shaixuan li.noclick{background:rgba(255,255,255,0.5);}
	.gy_shaixuan li p{display: inline-block;float: left;margin-right: 10px;}
	.gy_shaixuan li i{width: 12px;height: 100%;display: inline-block;background: url(../../assets/images/cha.png) no-repeat 0 center;float: left;}
	.gy_contbox{width: 100%;}
	.gy_contbox .ant-layout{display: block;}
	.morebq{width: 104px;height: 28px;position: absolute;top: 6px;right: 32px; background: #2085ff;border-radius:5px;}
	.morebq .ivu-menu-horizontal{height: 100%;line-height: 28px;}
	.morebq .ivu-menu-light{background: none;border: 0;}
	.youset{color: #fff;line-height: 40px;position:absolute;right: 32px;font-size: 15px;}
	
	.morebq .ivu-menu-horizontal.ivu-menu-light:after{display: none;}
	.morebq .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{border-bottom: 0;}
	
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
	
	
	// 右边
	.gycenboxse{width: 81.5%;float: right;margin-right: 30px;}
	.mc_left{width:100%;background:#fff; border-radius: 7px;padding-bottom:30px;margin-top: 30px;overflow: hidden;}
	.pb_tit{height: 56px;line-height: 56px;background:#eee; border-top-left-radius: 7px;border-top-right-radius: 7px;font-size: 18px;color: #333;padding-left: 30px; font-weight:bold;}
	
	.videoboxs{margin:30px 30px 0;display: flex;}
	.videobox{width: 50%;height: 500px; margin-right: 30px;position: relative;}
	.videobox video{width: 100%;height: 100%;display: block;object-fit: fill;cursor: pointer;}
	.videor{flex: 1;}
	.videor h3{font-weight: bold;}
	.vdcont{margin-top: 15px;}
	.vdcont p{line-height: 24px;color: #666;text-indent: 2em;}
	.tabdata{margin: 30px 30px 0;}
	
	.videoimg{width: 100%;height: 100%;position: relative;}
	.videoimg img{width: 100%;height: 100%;}
	.videomin{width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: 4;}
	.videos{width: 100%;height: 100%;}
	
	.vilists{width: 100%;height: 100%;position: absolute;left: 0;top: 0;}
	.vilists ul{width: 100%;height: 100%;}
	.vilists li{height: 80px;width: 150px;position: absolute;background: url(../../assets/images/bg7.png) no-repeat;background-size: 100% 100%;text-align: center;line-height: 80px;color: #fff;font-size: 16px;margin-top: 0; cursor: pointer;transition:all 0.5s;}
	.vilists li:hover{margin-top: -10px;}
	.vilists li.active{color: #f59a40;}
	.vilists li:nth-child(1){left: 50px;top: 300px;}
	.vilists li:nth-child(2){left: 300px;top: 90px;}
	.vilists li:nth-child(3){left: 450px;top: 320px;}
	.closevideo{width: 30px;height: 30px;text-align: center;line-height: 30px; background: rgba(0,0,0,1);position: absolute;right: -5px;top: -10px;z-index: 5;cursor: pointer;color: #fff;font-size: 16px;border-radius: 50%;}
	
	
</style>