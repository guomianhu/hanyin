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
			<div class="youset">您当前位置：远传抄表</div>
		</div>
		
		<div class="fix mtop20">
			<div class="slidebox">
				<div class="menulsbr">
					<h4><i></i>县水利局</h4>
					<ul>
						<li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in subnavData">
							<p><i></i>{{item.name}}</p>
							<ul v-show="item.show"> 
								<li v-for="(a,index) in item.list" v-on:click.stop="doThis(index)">{{a}}</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			
			<!-- 中间部分 -->
			<div class="gycenbox">
				<div class="maps">
					<el-amap class="amap-box"
							 :amap-manager="amapManager"
							 :vid="'amap-vue'"
							 :zoom="zoom"
							 :plugin="plugin"
							 :center="center"
							 :events="events"
					>
						<!-- 标记 -->
						<el-amap-marker v-for="(marker, index) in markers" :position="marker" :key="index"></el-amap-marker>
					</el-amap>
				</div>
			</div>
			
			<!-- 右边 -->
			<div class="gyrightbox">
				<ul class="worter gyworter">
					<li>
						<h4>109.6万</h4>
						<p>水源蓄水量(方)</p>
					</li>
					<li>
						<h4>9.05万</h4>
						<p>净水蓄水量(方)</p>
					</li>
					<li>
						<h4>6.8万</h4>
						<p>净水供水量(方)</p>
					</li>
				</ul>
				<div class="gyr_data">
					<div class="grcbox">
						<div id="main" style="width: 100%;height: 460px;"></div>
					</div>
				</div>
			</div>

		</div>
		
		<div class="scdtable">
			<a-table :columns="columns" :data-source="data" bordered>
				<template slot="name" slot-scope="text">
				  {{ text }}
				</template>
			</a-table>
		</div>
		
	</div>
</template>

<script>
  import userinfo from "../../components/common/userinfo"
  import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
  let amapManager = new AMapManager()
  
  const columns = [
  		 {
  		   title: '小区名称',
  		   dataIndex: 'name',
  		   scopedSlots: { customRender: 'name' },
  		 },
  		{
  		  title: '客户名称',
  		  dataIndex: 'num',
  		  scopedSlots: { customRender: 'num' },
  		},
  		{
  		  title: '客户编号',
  		  className: 'column-money',
  		  dataIndex: 'money',
  		},
  		{
  		  title: '水表编号',
  		  dataIndex: 'num2',
  		},
  		{
  		  title: '口径',
  		  dataIndex: 'num3',
  		},
  		{
  		  title: '水表底数',
  		  dataIndex: 'num4',
  		},
  		{
  		  title: '近三个月用量',
  		  dataIndex: 'address',
  		},
		{
		  title: '最近通讯时间',
		  dataIndex: 'address2',
		},
		{
		  title: '信号强',
		  dataIndex: 'address3',
		},
		{
		  title: '电池电压',
		  dataIndex: 'address',
		},
		{
		  title: '电池状态',
		  dataIndex: 'address4',
		},
		{
		  title: '故障状态',
		  dataIndex: 'address5',
		},
		{
		  title: '阀门状态',
		  dataIndex: 'address6',
		},
		{
		  title: '水表型号',
		  dataIndex: 'address7',
		},
		{
		  title: '厂家名称',
		  dataIndex: 'address8',
		},
		{
		  title: '抄表时间',
		  dataIndex: 'address9',
		},
  ];
  
  const data = [
  		{
  		  key: '1',
  		  name: '龙源水务公司',
  		  num:23,
  		  money: '234',
  		  num2:23,
  		  num3:23,
  		  num4:'2.3mpa',
  		  address: '正常',
  		},
  		{
  		  key: '2',
  		  name: '杏园小区',
  		  num:423,
  		  money: '2324',
  		  num2:223,
  		  num3:233,
  		  num4:'2.63mpa',
  		  address: '正常',
  		},
  		{
  		  key: '3',
  		  name: '长丰园小区',
  		  num:233,
  		  money: '2356',
  		  num2:223,
  		  num3:233,
  		  num4:'2.63mpa',
  		  address: '异常',
    },
  ];
  
  let self = this
  export default {
      data () {
        return {
		  data,
		  columns,
		  theme1: 'light',
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
		  
		  //地图相关
		  address: null,
		  searchKey: '',
		  amapManager,
		  markers: [],
		  searchOption: {
		  	city: '全国',
		  	citylimit: true
		  },
		  center: [108.515503,32.899122],
		  zoom: 13,
		  lng: 0,
		  lat: 0,
		  loaded: false,
				events: {
					init() {
						lazyAMapApiLoaderInstance.load().then(() => {
							self.initSearch()
						})
					},
				// 点击获取地址的数据
				click(e) {
					// console.log(e)
					self.markers = []
					let {lng, lat} = e.lnglat
					self.lng = lng
					self.lat = lat
					self.center = [lng, lat]
					self.markers.push([lng, lat])
					// 这里通过高德 SDK 完成。
					let geocoder = new AMap.Geocoder({
						radius: 1000,
						extensions: 'all'
					})
					geocoder.getAddress([lng, lat], function (status, result) {
						if (status === 'complete' && result.info === 'OK') {
							if (result && result.regeocode) {
								console.log(result.regeocode.formattedAddress)
								self.address = result.regeocode.formattedAddress
								self.searchKey = result.regeocode.formattedAddress
								self.$nextTick()
							}
						}
					})
					}
				},
				// 一些工具插件
				plugin: [
					// {
					//   pName: 'Geocoder',
					//   events: {
					//     init (o) {
					//       console.log(o.getAddress())
					//     }
					//   }
					// },
					{
						// 定位
						pName: 'Geolocation',
						events: {
							init(o) {
								// o是高德地图定位插件实例
								o.getCurrentPosition((status, result) => {
									if (result && result.position) {
										// 设置经度
										self.lng = result.position.lng
										// 设置维度
										self.lat = result.position.lat
										// 设置坐标
										self.center = [self.lng, self.lat]
										self.markers.push([self.lng, self.lat])
										// load
										self.loaded = true
										// 页面渲染好后
										self.$nextTick()
									}
								})
							}
						}
					},
					{
						// 工具栏
						pName: 'ToolBar',
						events: {
							init(instance) {
								console.log(instance);
							}
						}
					},
					{
						// 鹰眼
						pName: 'OverView',
						events: {
							init(instance) {
								console.log(instance);
							}
						}
					},
					{
						// 地图类型
						pName: 'MapType',
						defaultType: 0,
						events: {
							init(instance) {
								console.log(instance);
							}
						}
					},
					{
						// 搜索
						pName: 'PlaceSearch',
						events: {
							init(instance) {
								console.log(instance)
							}
						}
					}
		  	],
		}
	  },
      components: {userinfo},
      mounted(){
		  this.myEcharts();
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
		  doThis: function(index) {
			  console.log(index)
		  },
		  
		  //图表
		  myEcharts(){
		  		  // 基于准备好的dom，初始化echarts实例
		  		  var myChart = this.$echarts.init(document.getElementById('main'));
		  
		  		  // 指定图表的配置项和数据
		  		  var option = {
						title: {
							text: '用水量/夜间最小流量',
							subtext: '数据统计'
						},
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['用水量', '夜间流量']
						},
						toolbox: {
							show: true,
							feature: {
								dataView: {show: true, readOnly: false},
								magicType: {show: true, type: ['line', 'bar']},
								restore: {show: true},
								saveAsImage: {show: true}
							}
						},
						calculable: true,
						xAxis: [
							{
								type: 'category',
								data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
							}
						],
						yAxis: [
							{
								type: 'value'
							}
						],
						series: [
							{
								name: '用水量',
								type: 'bar',
								data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
								markPoint: {
									data: [
										{type: 'max', name: '最大值'},
										{type: 'min', name: '最小值'}
									]
								},
								markLine: {
									data: [
										{type: 'average', name: '平均值'}
									]
								}
							},
							{
								name: '夜间流量',
								type: 'bar',
								data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
								markPoint: {
									data: [
										{name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
										{name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
									]
								},
								markLine: {
									data: [
										{type: 'average', name: '平均值'}
									]
								}
							}
						]
					};
			
		  		  // 使用刚指定的配置项和数据显示图表。
		  		  myChart.setOption(option);
		  },
      }
    }
</script>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
	.page{width: 100%;height: 100%;background: url(../../assets/images/gybj.jpg) no-repeat center top;background-size: 100% 100%;padding-bottom: 20px;}
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
	
	.maps{height: 612px;}
	
	// 左侧折叠菜单
	.slidebox{width: 15.8%;float: left;margin-top: -1px;background: url(../../assets/images/gy2.png) no-repeat;background-size: 100% 100%;color: #e4fdff;font-size: 16px;box-sizing: border-box;height: 612px; }
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
	
	// 中间部分
	.gycenbox{width: 49%;margin-left: 1%; float: left;padding-top: 0;}
	
	// 右边
	.gyrightbox{width:31.5%;float: right;margin-right: 30px;
		.gyworter{display: flex;float: none;margin-right: 0;justify-content: space-between;margin-right: -25px;}
		>.gyworter li{margin-bottom: 0;flex: 0 0 33%;}
		>.gyworter li p{margin-top: 10px;}
		
		.gyr_data{height: 500px;background: url(../../assets/images/gy5.png) no-repeat;margin-top: 15px;background-size: 100% 100%;overflow: hidden;}
		.grcbox{height: 460px;margin-top: 20px; background: #fff;border-radius: 5px;}
		.gyr_data >div{margin:20px;padding: 15px 0;}
		.gytst li{float: left;width: 48.5%;height: 42px;line-height: 42px;background: url(../../assets/images/gy3.png) no-repeat;background-size:100% 100%;text-align: center;font-size: 18px;color: #f19714;cursor: pointer;margin-top: 10px;}
		.gytst li:nth-child(2n){float: right;background: url(../../assets/images/gy4.png) no-repeat;background-size:100% 100%;color: #2085ff;}
		.gytsb{margin-top: 22px;}
		.gytsb li{float: left;width: 48.5%;padding: 0 3%; height: 42px;line-height: 42px;background: #0a3069;border-radius: 5px;color: #e4fdff;font-size: 18px;}
		.gytsb li:nth-child(2n),.gytsb li em{float: right;}
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
	
	.scdtable{margin: 20px 30px 0;}
	
</style>