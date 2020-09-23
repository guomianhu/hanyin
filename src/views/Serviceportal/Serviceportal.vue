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
			<div class="youset">您当前位置：服务门户</div>
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
				        <div class="pb_tit">{{bigtitle}}</div>
				        <ul class="prod_list fix expert">
				        	<li v-for="(item,index) in listData">
				            	<h1><a><img :src="item.imgurl"></a></h1>
				                <h2>{{item.sname}}</h2>
				                <h4>{{item.scont}}</h4>
				                <h5><a>查看详情</a></h5>
				            </li>
				        </ul>
						<div class="pages">
							<a-pagination v-model="current" :total="50" show-less-items />
						</div>
				    </div>
			</div>
			
		</div>
	</div>
</template>
<script>
  import userinfo from "../../components/common/userinfo"
  export default {
      data () {
        return {
		  theme1: 'light',
		  current: 1,
		  suSelect:0,
		  activecs:0,
		  bigtitle:'',
		  subnavData: [
			  {
				  name: '龙垭镇',
				  list:[
					  {
						  subname:'龙源水务公司',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'水源地',
								  scont:'<经典升级>极地快线往返|双极光营地|极地温泉|捕捞帝王蟹|破冰轮|驯鹿农场|狗拉雪橇|多种雪地活动',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'安防',
								  scont:'<峡湾探险> 罗瓦涅米往返丨4天极光追猎丨木屋营地丨帝王蟹捕捞 | 圣诞老人村 | 萨利色尔卡',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200904/15992047705258.png',
								  sname:'生物观察',
								  scont:'<一价全含>【极地精华+航班往返】 |破冰轮|捕捞帝王蟹|圣诞老人村| 萨利色尔卡极光探险',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/biu97pi55h0zqlx.jpg',
								  sname:'排污',
								  scont:'<冰岛仲夏夜之梦・景观酒店>【8-15人享乐小团】ION冒险酒店|蓝湖温泉酒店|优密圣地荒野酒店|出海捕捞品尝海胆|黄金圈|斯奈山半岛|飞机残',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/y277mx3vft8z7u4.jpg',
								  sname:'县水利局',
								  scont:'<轻冒险・畅玩冰岛冬日>【体验项目一价全含】出海观鲸|极光荒野酒店|蓝湖温泉|瓦特纳冰川徒步|蓝冰洞探险|飞机残骸|黄金圈',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200409/15864235482251.png',
								  sname:'排班',
								  scont:'<雪山温泉>【4-7人享乐团】五星级城堡酒店 | 瑞士湖景温泉酒店 | “中餐厅”科尔马 | 雪山专列登顶',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/2pky5xdt8tiodx9.jpg',
								  sname:'组织结构',
								  scont:'<五星古堡>【4-7人享乐团】诺曼底米其林星级餐厅与卢瓦尔河谷城堡的法式优雅',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/a3qt6uv73i0obzi.jpg',
								  sname:'用水性质占比',
								  scont:'<百团经典>【8-15人精品小团】【五星古堡|海景酒店】意式美食 瑞士雪山与法兰西贵族体验 | 托斯卡纳【罗马古城一日】【巴黎/罗马出发】',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200416/15870190795961.png',
								  sname:'用户分布',
								  scont:'<经典路线>【高铁往返】普罗旺斯薰衣草+蔚蓝海岸出海巡游 | 南法小镇 | 尼斯戛纳 | 市中心酒店',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200511/suega6680uqgjqn.jpg',
								  sname:'年度收费统计',
								  scont:'<深度南法>普罗旺斯薰衣草+蔚蓝海岸出海巡游|两晚海滨城市酒店 | 体验项目一价全含',
							  },
						  ]
					  },
					  {
						  subname:'鑫源水务公司',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'年度收费方式统计',
								  scont:'<轻奢之旅>【4-7人享乐团】【五星古堡酒店】勃垦第名酒之路|蔚蓝海岸出海巡游|普罗旺斯薰衣草|湖光山色安纳西 |南法小镇|尼斯摩纳哥',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'收费笔数',
								  scont:'【海滨假日】尼斯往返3日|普罗旺斯薰衣草+蔚蓝海岸出海巡游 | 南法小镇 | 梵高艺术之路 | 市中心酒店',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200904/15992047705258.png',
								  sname:'售水量',
								  scont:'<海滨度假>摩纳哥公国|蔚蓝海岸出海巡游|南法小镇深度游览 |向日葵薰衣草| 戛纳影节宫 | 入住市中心酒店',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/biu97pi55h0zqlx.jpg',
								  sname:'本年抄表回收率',
								  scont:'<诺曼底全景精华>甄选巴黎周边2日之旅|四星级海滨景观酒店|圣米歇尔山|象鼻山|圣马洛海盗城|奥马哈美军墓地|布列塔尼美食之旅',
							  },
						  ]
					  },
				  ],
				  show: true
			  }, 
			  {
				  name: '观音河乡',
				  list:[
					  {
						  subname:'山水铭居',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'收费方式',
								  scont:'<海滨度假>摩纳哥公国|蔚蓝海岸出海巡游|南法小镇深度游览 |向日葵薰衣草| 戛纳影节宫 | 入住市中心酒店',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'收费笔数',
								  scont:'<轻奢之旅>【4-7人享乐团】【五星古堡酒店】勃垦第名酒之路|蔚蓝海岸出海巡游|普罗旺斯薰衣草|湖光山色安纳西 |南法小镇|尼斯摩纳哥',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200904/15992047705258.png',
								  sname:'实收金额',
								  scont:'<五星古堡>【4-7人享乐团】诺曼底米其林星级餐厅与卢瓦尔河谷城堡的法式优雅',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200318/biu97pi55h0zqlx.jpg',
								  sname:'之前余额',
								  scont:'<轻冒险・畅玩冰岛冬日>【体验项目一价全含】出海观鲸|极光荒野酒店|蓝湖温泉|瓦特纳冰川徒步|蓝冰洞探险|飞机残骸|黄金圈',
							  },
						  ]
					  },
					  {
						  subname:'康庄大道',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'五星景观酒店',
								  scont:'<五星古堡>【4-7人享乐团】诺曼底米其林星级餐厅与卢瓦尔河谷城堡的法式优雅',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'极光荒野酒店',
								  scont:'<轻冒险・畅玩冰岛冬日>【体验项目一价全含】出海观鲸|极光荒野酒店|蓝湖温泉|瓦特纳冰川徒步|蓝冰洞探险|飞机残骸|黄金圈',
							  },
						  ]
					  },
					  {
						  subname:'药王谷',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'新远酒店',
								  scont:'<海滨度假>摩纳哥公国|蔚蓝海岸出海巡游|南法小镇深度游览 |向日葵薰衣草| 戛纳影节宫 | 入住市中心酒店',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'天朗国际大酒店',
								  scont:'<五星古堡>【4-7人享乐团】诺曼底米其林星级餐厅与卢瓦尔河谷城堡的法式优雅',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'瓦特纳冰川徒步',
								  scont:'<深度南法>普罗旺斯薰衣草+蔚蓝海岸出海巡游|两晚海滨城市酒店 | 体验项目一价全含',
							  },
						  ]
					  },
				  ],
				  show: false
			  }, 
			  {
				  name: '石条街乡',
				  list:[
					  {
						  subname:'世外桃源',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'五星城堡',
								  scont:'<红酒名庄>探秘中世纪城堡|红酒品鉴|朝圣之路|海岛之城【五星城堡】',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'五星景观酒店',
								  scont:'<法瑞连线>少女峰登顶|金色山口列车|浪漫小镇-科尔马+安纳西|美食美酒品鉴【四-五星景观酒店】',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200904/15992047705258.png',
								  sname:'红酒古堡',
								  scont:'<红酒古堡>探秘欧式美食基地 尽览艺术姿态万千',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'维修记录',
								  scont:'<经典升级>极地快线往返|双极光营地|极地温泉|捕捞帝王蟹|破冰轮|驯鹿农场|狗拉雪橇|多种雪地活动',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'设备运行记录',
								  scont:'<峡湾探险> 罗瓦涅米往返丨4天极光追猎丨木屋营地丨帝王蟹捕捞 | 圣诞老人村 | 萨利色尔卡',
							  },
						  ]
					  },
					  {
						  subname:'蝴蝶谷',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/51bgerv879tsrtw.jpg',
								  sname:'干啥干啥',
								  scont:'<经典升级>极地快线往返|双极光营地|极地温泉|捕捞帝王蟹|破冰轮|驯鹿农场|狗拉雪橇|多种雪地活动',
							  },
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200407/rs8l1x7au64yevr.jpg',
								  sname:'送尴尬三个',
								  scont:'<深度南法>普罗旺斯薰衣草+蔚蓝海岸出海巡游|两晚海滨城市酒店 | 体验项目一价全含',
							  },
						  ]
					  },
					  {
						  subname:'光明顶',
						  sublist:[
							  {
								  imgurl:'https://cn.paris-girafe.com/uploads/20200511/59trmuat9ui209x.jpg',
								  sname:'施工施工',
								  scont:'<轻松法意瑞> 瑞士雪山|悬崖小镇五渔村|金色山口列车|法国酒庄红酒品鉴|托斯卡纳【五星古堡|海滨酒店】',
							  },
						  ]
					  },
				  ],
				  show: false
			  },
			],
		  listData:[],
		}
	  },
      components: {userinfo},
      mounted(){
		  this.initData();
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
			  this.listData = items.sublist
		  },
		  //右边默认显示左边第一个的数据
		  initData(){
               this.bigtitle = this.subnavData[0].list[0].subname
               this.listData = this.subnavData[0].list[0].sublist;
           },
		  Todetail(index,item){
			  this.$router.push({ path: "/videoShow", query:{item:item}});
		  }
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
	.mc_left{width:100%;background: rgba(255,255,255,0.82);border-radius: 7px;padding-bottom:30px;margin-top: 30px;}
	.pb_tit{height: 56px;line-height: 56px; background:#fff;border-top-left-radius: 7px;border-top-right-radius: 7px;font-size: 18px;color: #333;padding-left: 30px; font-weight:bold;}
	.prod_list{ margin-left:1%;}
	.prod_list li{ width:17.8%; float:left; margin:0 1%; margin-top:2%; background:#fff; border-radius:5px; padding-bottom:15px; overflow:hidden;}
	.prod_list li h1{ height:150px;overflow:hidden;}
	.prod_list li h1 img{ width:100%; height:100%; transition:0.5s;}
	.prod_list li h2{ padding-top:8px; font-size:14px; color:#333;text-align: center; margin-top:5px;font-size:18px; font-weight:bold;}
	.prod_list li h3{ padding:0 10px; margin-top:10px;}
	.prod_list li h3 span{ display:block; float:left; height:26px; line-height:26px; text-align:center; border:1px solid #37b176; border-radius:5px; width:47%; font-size:14px; color:#333;}
	.prod_list li h3 span+span{ float:right; border-color:#0f91ff;}
	.prod_list li:hover h1 img{ transform:scale(1.2);}
	.prod_list li h4{ padding:0 10px; font-size:14px; color:#555; margin-top:6px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2; overflow:hidden;display: none;}
	.prod_list li h5{ width:120px; height:26px; line-height:26px; background:#4e66ce; text-align:center;margin: auto; margin-top:10px; border-radius:5px;display: none;}
	.prod_list li h5 a{ width:100%; height:100%; display:block; color:#fff;}
	.pages{text-align: center;margin-top: 30px;}
</style>