<template>
    <div class="page">
		<div class="publictit fix">
			<div class="text_ty"></div>
			<div class="runbox">
				<div class="orbit orbit1"></div>
			</div>
			<div class="gytit"><p class="masked">汉阴智慧水务管理平台</p></div>
			<div class="gyt_right">
				<div class="xiaoxi left"></div>
				<div class="users right"><i></i></div>
			</div>
		</div>
		<div class="gy_biaoq fix">
			<div class="return left"><a href="javascript:history.go(-1)">返回</a></div>
			<div class="youset">您当前位置：应急预案</div>
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
			
			<div class="rightbox">
				<!-- <el-container class="container">
					<el-header style="line-height:60px;position: relative;">
						<el-select filterable placeholder="请选择" size="mini" v-model="value">
							<el-option value="0" label="救援任务"></el-option>
							<el-option value="1" label="111"></el-option>
							<el-option value="2" label="222"></el-option>
						</el-select>
					</el-header>
				</el-container> -->
				<xmaps :data="tabConfig.data"></xmaps>
			</div>
			
		</div>
	</div>
</template>
<script>
  import snow from "../../components/common/snow"
  import xmaps from "../../components/common/xmaps"
  export default {
      data () {
        return {
			  value:'',
			  suSelect:0,
			  activecs:0,
			  
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
			  
			  
			  tabConfig:{
				fixed:true,
				  type:true,
				  data:[
					  {
						  position:[121.1,31],
						  licensePlate:"镇安县大西沟",
						  name:"项羽",
						  Syno:"123456",
						  status:1,
						  address:"陕西省商洛市镇安县永乐街道西沟路36号",
						  end:"2020-08-08 13:20:46",
					  },
					  {
						  position:[121.2,31.2],
						  licensePlate:"汉阴县城关镇水厂",
						  name:"刘秀",
						  Syno:"113456",
						  status:0,
						  address:"陕西省安康市汉阴县城关镇34号",
						  end:"18:30",
					  },
					  {
						  position:[121.3,31.12],
						  licensePlate:"金池大酒店",
						  name:"刘秀",
						  status:2,
						  Syno:"112233",
						  address:"陕西省安康市汉阴县城关镇43号",
						  end:"22:30",
					  },
					  {
						  position:[121.4,31.1],
						  licensePlate:"双乳镇",
						  name:"屈原",
						  status:1,
						  Syno:"115599",
						  address:"陕西省安康市汉阴县双乳镇三同村",
						  end:"09:45",
					  }
				  ],
				  column:[
					  {
						  label:"编号",
						  prop:"Syno",
						  width:120
					  },
					  {
						  label:"名称",
						  prop:"name",
						  width:80
					  },
					  {
						  label:"车牌号",
						  prop:"licensePlate"
					  },
					  {
						  label:"任务状态",
						  prop:"status",
						  width:90,
						  slot:true
					  }
				  ]
			},
        }
	  },
      components: {snow,xmaps},
      mounted(){
		  
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
	
	.gyt_right{position: absolute;right: 35px;top: 19px;}
	.xiaoxi{width: 36px;height: 36px;background: url(../../assets/images/xiaoxi.png) no-repeat;cursor: pointer;}
	.users{height: 36px;width: 48px;background: url(../../assets/images/user.png) no-repeat;margin-top: 5px;margin-left: 30px;}
	.users i{width: 13px;height: 9px;background: url(../../assets/images/sjx.png) no-repeat;display: block;float: right;margin-top: 10px;}
	.gy_biaoq{height: 40px;background: url(../../assets/images/gy1.png) no-repeat;padding: 0 30px;display: flex;position: relative;}
	.return{background: url(../../assets/images/fh.png) no-repeat 0 center;color: #e4fdff;line-height: 40px;font-size: 16px;padding-left:15px;cursor: pointer;margin-right: 30px;}
	.return a{width: 100%;height: 100%;display: block;color: #e4fdff;}
	
	.gy_shaixuan {display: none;}
	.gy_shaixuan li{color: #333;float: left;height: 28px;line-height: 28px;border-radius: 4px;background: #fff; margin-right: 8px;margin-top: 6px;padding: 0 10px;overflow: hidden;cursor: pointer;transition: 0.5s;}
	.gy_shaixuan li:hover{background:rgba(255,255,255,0.5);}
	.gy_shaixuan li p{display: inline-block;float: left;margin-right: 10px;}
	.gy_shaixuan li i{width: 12px;height: 100%;display: inline-block;background: url(../../assets/images/cha.png) no-repeat 0 center;float: left;}
	.gy_contbox{width: 100%;}
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
	.rightbox{width: 80%;float: left;}
	
</style>