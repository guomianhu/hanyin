

import $ from 'jquery'; //引入jquery
import Vue from 'vue';

import xmaps from "../../components/common/xmaps"
import userinfo from "../../components/common/userinfo"

import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
let amapManager = new AMapManager()
let self = this
var ms_user = JSON.parse(localStorage.getItem('ms_user'));
var companyCode = ''; //登录状态的公司编号

var AMapUI, AMap, mapConfig, map, mapHome, coordinate; //全局的地图属性
var mouseTool;
var rangingruler;
var overlays = []; //监听draw事件可获取画好的覆盖物

// 监测点, 实时数据轮播
var periodDiv = Vue.extend({
	template:
		'<div style="postion:absolute" class="yanBox">' +
		'	<el-carousel>' +
		'		<el-carousel-item v-for="(nape,index) in paramterData" :key="index">' +
		'			<div class="boxImg" v-if="nape.state == 1">' +
		'				<img style="width:90px;height:84PX;" src="../../../static/img/jingbao0.png">' +
		'			</div>' +
		'			<div class="boxImg" v-else>' +
		'				<img style="width:90px;height:84PX;" src="../../../static/img/jingbao.png">' +
		'			</div>' +
		'			<div class="markersTextBj"></div>' +
		'			<div class="markersText">' +
		'				<div class="markerstextName">{{ nape.name }}</div>' +
		'				<div' +
		'					style="font-size:1.3px;line-height:1.8px;color:#00f;"' +
		'				>{{ nape.value }}</div>' +
		'				<div>{{ nape.unit }}</div>' +
		'			</div>' +
		'		</el-carousel-item>' +
		'	</el-carousel>' +
		'	<div class="lljtb11"><img src="../../../static/img/biao11.png" alt class="wzImg"  style="width:20px;height:20px;"></div>' +
		'</div>',
	data() {
		return {
			paramterData: []
		};
	},
	methods: {}
});

  export default {
      data () {
        return {
			wotitle:'涧池',
			woter1:2.3,
			woter2:1.1,
			woter3:8633,
			woter4:208.6,
			woter5:9.95,
			woter6:1.14,
			woter7:15.6,
			ph:7.68,
			
			showvideo:false,
			videosrc:'https://www.w3school.com.cn/i/movie.ogg',
			
			// 地图相关
			address: null,
			searchKey: '',
			amapManager,
			markers: [],
			searchOption: {
				city: '全国',
				citylimit: true
			},
			center: [108.515503, 32.899122],
			zoom: 13,
			lng: 0,
			lat: 0,
			loaded: false,
			mapStyle: "amap://styles/whitesmoke",
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
				
				// 搜索,工具箱
				searchVal: '',
				searchSite: [],
				searchResults: false,
				DMAPartitionState: true,
				pipelineDisState: true,
				// 查询快捷指示
				queryResultsState: false,
				// 管网图
				pipeNetworkState: false,
				// 水质
				waterQualityRealBox: false,
				waterQualityReal: true,
				dmaCardShow: false,
				form: {
					code: '',
					dmaname: '',
					layercolor: '#1E9CEA',
					areacode: '',
					layertype: '',
					gis: '',
					companycode: this.companycode,
					creator: '',
					validstatus: 1
				},
				pipelineShow: false, //选择管线颜色框
				areaOptions:'',
				//管线口径数组
				pipeDiameter: ['50口径', '63口径', '75口径', '100口径', '110口径', '160口径', '200口径', '250口径', '315口径', '400口径'],
				// 管线颜色,各自单独绑定
				pipeColor50: '#009631',
				pipeColor63: '#009631',
				pipeColor75: '#009631',
				pipeColor100: '#009631',
				pipeColor110: '#009631',
				pipeColor160: '#009631',
				pipeColor200: '#009631',
				pipeColor250: '#009631',
				pipeColor315: '#009631',
				pipeColor400: '#009631',
				
				//地图标识
				jcdImg: require('../../../static/img/biao11.png'),
				mapLogo: [
					{
						img: require('../../../static/img/jingbao.png'),
						text: '正常',
						mapType: 1,
						amount: ''
					},
					{
						img: require('../../../static/img/jingbao0.png'),
						text: '警报',
						mapType: 0,
						amount: ''
					},
					{
						img: require('../../../static/img/starting.png'),
						text: '水源地',
						mapType: 2,
						amount: ''
					},
					{
						img: require('../../../static/img/water.png'),
						text: '水厂',
						mapType: 3,
						amount: ''
					},
					{
						img: require('../../../static/img/lid00.png'),
						text: '井盖',
						mapType: 4,
						amount: ''
					},
					{
						img: require('../../../static/img/hydrant.png'),
						text: '消防栓',
						mapType: 5,
						amount: ''
					},
					{
						img: require('../../../static/img/sewage.png'),
						text: '污水厂',
						mapType: 6,
						amount: ''
					},
					{
						img: require('../../../static/img/yingyeting1.png'),
						text: '营业厅',
						mapType: 7,
						amount: ''
					},
					{
						img: require('../../../static/img/plot.png'),
						text: '小区',
						mapType: 8,
						amount: ''
					},
					{
						img: require('../../../static/img/pipeline.png'),
						text: '管线'
					}
				],
							
				// 工具箱, 右边
				toolVideoState: true,
				toolQualityState: true,
				toolSupplyState: true,
				toolRangingState: true,
				toolPipelineState: true,
				fullScreenState: true,
				toolBoxColor: 'toolBoxColor1',
				
				louBili: 89.75,
				chanBili:10.25,
				
				//地图数据
				tabConfig:{
					fixed:false,
					  type:false,
					  data:[
						  {
							  position:[108.515503,32.899122],
							  licensePlate:"汉阴县大西沟",
							  name:"瞿丹",
							  Syno:"123456",
							  status:1,
							  address:"陕西省安康市汉阴县永乐街道西沟36号",
							  end:"2020-08-08 13:20:46",
						  },
						  {
							  position:[108.601138,32.848098],
							  licensePlate:"汉阴县涧池镇水厂",
							  name:"王洋",
							  Syno:"113456",
							  status:0,
							  address:"陕西省安康市汉阴县涧池镇34号",
							  end:"18:30",
						  },
						  {
							  position:[108.571473,32.844154],
							  licensePlate:"曾家湾水厂",
							  name:"刘艳",
							  status:2,
							  Syno:"112233",
							  address:"陕西省安康市汉阴县涧池镇43号金池大酒店",
							  end:"22:30",
						  },
						  {
							  position:[108.649924,32.814194],
							  licensePlate:"蒲溪镇水厂",
							  name:"张良鹏",
							  status:1,
							  Syno:"115599",
							  address:"陕西省安康市汉阴县蒲溪镇三同村",
							  end:"09:45",
						  },
						  {
							  position:[108.512841,32.883215],
							  licensePlate:"火车站水厂",
							  name:"宋扬",
							  status:0,
							  Syno:"115599",
							  address:"陕西省安康市汉阴县142号",
							  end:"09:45",
						  },
						  {
							  position:[108.528893,32.87281],
							  licensePlate:"月河大桥水厂",
							  name:"苏珊",
							  status:2,
							  Syno:"115599",
							  address:"陕西省安康市汉阴县十天高速13号",
							  end:"09:45",
						  },
					  ],
				},
        }
	  },
	  
	  components: {xmaps,userinfo},

      mounted(){
		  this.drawLine();
		  this.myEcharts1();
		  this.myEcharts2();
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
		  initSearch() {
			  let vm = this
			  let map = this.amapManager.getMap()
			  AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
				  var poiPicker = new PoiPicker({
					  input: 'search',
					  placeSearchOptions: {
						  map: map,
						  pageSize: 10
					  },
					  suggestContainer: 'searchTip',
					  searchResultsContainer: 'searchTip'
				  })
				  vm.poiPicker = poiPicker
				  // 监听poi选中信息
				  poiPicker.on('poiPicked', function (poiResult) {
					  // console.log(poiResult)
					  let source = poiResult.source
					  let poi = poiResult.item
					  if (source !== 'search') {
						  poiPicker.searchByKeyword(poi.name)
					  } else {
						  poiPicker.clearSearchResults()
						  vm.markers = []
						  let lng = poi.location.lng
						  let lat = poi.location.lat
						  let address = poi.cityname + poi.adname + poi.name
						  vm.center = [lng, lat]
						  vm.markers.push([lng, lat])
						  vm.lng = lng
						  vm.lat = lat
						  vm.address = address
						  vm.searchKey = address
					  }
				  })
			  })
		  },
		  searchByHand() {
			  if (this.searchKey !== '') {
				  this.poiPicker.searchByKeyword(this.searchKey)
			  }
		  },
		  
		// 清除图层
		dmaClear() {
			//mapHome.remove(overlays);
			overlays = [];
		},
		
		//DMA取消按钮事件
		dmaCancel() {
			this.dmaCardShow = false;
			//mapHome.remove(overlays);
			overlays = [];
			mouseTool.close(true); //关闭，并清除覆盖物
		},
		
		//开启DMA分区定义功能
		switchChange() {
			//mapHome.remove(overlays);
			overlays = [];
			mouseTool.close(true); //关闭，并清除覆盖物
			this.selectDMAInfo();
		},
		
		//监听DMA颜色改变
		colorChange() {
			this.draw(this.form.layertype);
		},
		
		//画图层方法
		draw(type) {
			let color = this.form.layercolor;
			switch (type) {
				case 'marker': {
					mouseTool.marker(
						{
							//同Marker的Option设置
						}
					);
					break;
				}
				case 'polyline': {
					mouseTool.polyline({
						strokeColor: color
					});
					break;
				}
				case 'polygon': {
					mouseTool.polygon({
						fillColor: color,
						strokeColor: color
					});
					break;
				}
				case 'rectangle': {
					mouseTool.rectangle({
						fillColor: color,
						strokeColor: color
					});
					break;
				}
				case 'circle': {
					mouseTool.circle({
						fillColor: color,
						strokeColor: color
					});
					break;
				}
			}
		},
		
		//选择图层类型事件
		radioDMAType() {
			//mapHome.remove(overlays);
			overlays = [];
			mouseTool.on('draw', function (e) {
				overlays.push(e.obj);
			});
			this.draw(this.form.layertype);
		},
		
		//创建DMA分区
		dmaCreate() {
			let self = this;
			var promise = new Promise(function (resolve, reject) {
				var gisBody = '';
				switch (self.form.layertype) {
					case 'polygon': {
						let g = '';
						for (i = 0; i < overlays[0].Je.path.length; i++) {
							g = g + overlays[0].Je.path[i].lng + ',' + overlays[0].Je.path[i].lat + ';';
						}
						gisBody = g;
						self.form.gis = g;
						break;
					}
					case 'rectangle': {
						let g1 = overlays[0].Je.path[0].lng + ',' + overlays[0].Je.path[0].lat;
						let g2 = overlays[0].Je.path[2].lng + ',' + overlays[0].Je.path[2].lat;
						gisBody = g1 + ';' + g2;
						self.form.gis = gisBody;
						break;
					}
					case 'circle': {
						let g = '';
						overlays[0]._originOpts.center;
						g = overlays[0].Je.center.lng + ',' + overlays[0].Je.center.lat + ',' + overlays[0].Je.radius;
						gisBody = g;
						self.form.gis = g;
						break;
					}
				}
				if (gisBody != '') {
					resolve(gisBody);
				} else {
					reject('未检测到绘图');
				}
			});
			promise.then(
				function (value) {
					self.http
						.post(self.service.saveDMAInfo, self.form)
						.then(
							function (response) {
								if (response.data.code == 0) {
									self.$message.warning(' 创建成功!');
									self.initDma();
									self.selectDMAInfo();
									self.selectRootNode(); //左侧区域树
								} else {
									self.$message.warning('未检测到绘图!');
								}
							}.bind(self)
						)
						.catch(function (error) {
							self.$message.error(' 网络异常!');
						});
				},
				function (error) {
					self.$message.warning(' 未检测到绘图!');
				}
			);
		},
  
		  // 搜索,DMA,管线区分
		  queryhunt() {
				this.DMAPartitionState = true;
				this.pipelineDisState = true;
				this.queryResultsState = !this.queryResultsState;
				this.pipelineShow = false;
				this.dmaCancel();
			},
			
			// 点击地图标识,只显示对应的
			dtbsFrom(bsList) {
				mouseTool.close(true); //关闭，并清除覆盖物
				for (var i = 0; i < markersAllArray.length; i++) {
					if ('undefined' != typeof mapMarker[i]) {
						mapMarker[i].hide(); //隐藏所有的
					}
					let postionGis = '';
					mapMarker.forEach((element) => {
						var data = mapMarkerArea.filter((f) => f.getExtData().sitecode == element.getExtData().sitecode);
						console.log(7811,data);
						if (data.length > 0) {
							if (element.getExtData().siteType == bsList.mapType) {
								postionGis = element.getExtData().gis;
								console.log(3211,element.getExtData())
								element.setAnchor('top-center');
								element.setAnimation('AMAP_ANIMATION_DROP');
								if ('undefined' != typeof element) {
									element.show();
								}
							} else {
								if ('undefined' != typeof element) {
									element.hide();
								}
							}
							if (markersAllArray[i].siteType == bsList.mapType) {
								let num = i - 1;
								if ('undefined' != typeof mapMarker[num]) {
									mapMarker[num].show(); //显示存在的
								}
							}
						} else {
							if ('undefined' != typeof element) {
								element.hide();
							}
						}
					});
					let gisArr = postionGis.split(',');
					map.setZoomAndCenter(13,gisArr);  //自动适配到合适视野范围
				}
			},
					
			// 地图设备查询
			querySearch(queryString, cb) {
				var restaurants = [];
				mapMarkerArea.forEach((element) => {
					restaurants.push({
						value: element.getExtData().name,
						code: element.getExtData().sitecode,
						gis: element.getExtData().gis
					});
				});
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return restaurant.value.indexOf(queryString.toLowerCase()) != -1;
				};
			},
			handleSelect(item) {
				let arr = mapMarkerArea.filter((f) => f.getExtData().sitecode == item.code);
				if (arr.length > 0) {
					if ('undefined' != typeof arr[0]) {
						arr[0].show();
					}
					map.setFitView([arr[0]]);  //自动适配到合适视野范围
				}
			},
			
			// 查询, 左边事件 DMA,管线颜色, 查询
			DMAPartition() {
				this.DMAPartitionState = !this.DMAPartitionState;
				this.pipelineDisState = true;
				this.queryResultsState = false;
				this.pipelineShow = false;
				if (this.dmaCardShow) {
					this.dmaCancel();
				} else {
					this.dmaCardShow = true;
				}
			},
			
			pipelineDistinguis() {
				this.DMAPartitionState = true;
				this.pipelineDisState = !this.pipelineDisState;
				this.pipelineShow = !this.pipelineShow;
				this.queryResultsState = false;
				this.dmaCancel();
			},
			queryhunt() {
				this.DMAPartitionState = true;
				this.pipelineDisState = true;
				this.queryResultsState = !this.queryResultsState;
				this.pipelineShow = false;
				this.dmaCancel();
			},
			
			//DMA取消按钮事件
			dmaCancel() {
				this.dmaCardShow = false;
				//mapHome.remove(overlays);
				overlays = [];
				mouseTool.close(true); //关闭，并清除覆盖物
			},
			
			// 点击管线确定,只有选中的颜色改变,其他管线依旧存在,保持为默认绿色
			pipeDetermine() {
				let self = this;
				this.pipelineShow = false;
				AMapUI.loadUI(['misc/PositionPicker', 'misc/PathSimplifier'], (PositionPicker, PathSimplifier) => {
					if (!PathSimplifier.supportCanvas) {
						alert('当前环境不支持 Canvas！');
						return;
					}
					pathSimplifierIns = new PathSimplifier({
						zIndex: 100,
						//autoSetFitView:false,
						map: map, //所属的地图实例
						getPath: function (pathData, pathIndex) {
							var points = pathData.points,
								lnglatList = [];
							for (var i = 0, len = points.length; i < len; i++) {
								lnglatList.push(points[i].lnglat);
							}
							return lnglatList;
						},
						getHoverTitle: function (pathData, pathIndex, pointIndex) {
							if (pointIndex >= 0) {
								return pathData.name + '，' + pathData.points[pointIndex].lnglat;
							}
							return pathData.name + '，点数量' + pathData.points.length;
						},
						renderOptions: {
							pathLineStyle: {
								dirArrowStyle: true
							},
							getPathStyle: function (pathItem, zoom) {
								var lineWidth = 4;
								var color = '#009631';
								if (pathItem.pathData.name.includes('50口径')) {
									color = self.pipeColor50;
								}
								if (pathItem.pathData.name.includes('63口径')) {
									color = self.pipeColor63;
								}
								if (pathItem.pathData.name.includes('75口径')) {
									color = self.pipeColor75;
								}
								if (pathItem.pathData.name.includes('100口径')) {
									color = self.pipeColor100;
								}
								if (pathItem.pathData.name.includes('110口径')) {
									color = self.pipeColor110;
								}
								if (pathItem.pathData.name.includes('160口径')) {
									color = self.pipeColor160;
								}
								if (pathItem.pathData.name.includes('200口径')) {
									color = self.pipeColor200;
								}
								if (pathItem.pathData.name.includes('250口径')) {
									color = self.pipeColor250;
								}
								if (pathItem.pathData.name.includes('315口径')) {
									color = self.pipeColor315;
								}
								if (pathItem.pathData.name.includes('400口径')) {
									color = self.pipeColor400;
								}
	
								return {
									startPointStyle: {
										radius: 0
									},
									endPointStyle: {
										radius: 0
									},
									pathLineStyle: {
										strokeStyle: color,
										lineWidth: lineWidth
									},
									pathLineHoverStyle: {
										strokeStyle: '#02339e',
										disableIfSelected: false
									},
									pathLineSelectedStyle: {
										strokeStyle: '#02339e',
										lineWidth: lineWidth + 2
									},
									pathNavigatorStyle: {
										fillStyle: color
									}
								};
							},
							renderAllPointsIfNumberBelow: 1000 //绘制路线节点，如不需要可设置为-1
						}
					});
					var gisData = [];
					//这里必须要赋值一次,否则会报错底层错误 管线数据
					pathSimplifierIns.setData(gisData);
	
					// 管线数据
					let pipeInfo = require('../../assets/json/pipe.json');
					pipeInfo.content.forEach((item) => {
						let data = {
							name: item.name,
							points: []
						};
						item.gis.forEach((element) => {
							data.points.push({ lnglat: element });
						});
						gisData.push(data);
					});
					// 管线数据 画到地图上
					pathSimplifierIns.setData(gisData);
	
					pathSimplifierIns.on('pointClick', function (e, info) {
						self.$emit('pointClick', info);
					});
					map.setFitView();  //自动适配到合适视野范围
				});
			},
			
			// 工具, 右边事件 视频,水质,供水,测距,管网
			toolVideo() {
				this.toolVideoState = !this.toolVideoState;
				this.toolQualityState = true;
				this.toolSupplyState = true;
				this.toolRangingState = true;
				this.toolPipelineState = true;
				//this.LeftResultHidden();//关闭左侧展示
				//this.waterQualityRealBox= false;//关闭水质
				//this.rangingClose();  //关闭测距
				this.showvideo = !this.showvideo;
			},
			toolQuality() {
				this.toolVideoState = true;
				this.toolQualityState = !this.toolQualityState;
				this.toolSupplyState = true;
				this.toolRangingState = true;
				this.toolPipelineState = true;
				this.LeftResultHidden();
				this.waterQualityRealBox = !this.waterQualityRealBox;
				this.waterQualityReal = true;
				var waterQualityMessage = { mapType: 2 }
				this.dtbsFrom(waterQualityMessage);
				this.rangingClose();  //关闭测距
			},
			toolSupply() {
				this.toolVideoState = true;
				this.toolQualityState = true;
				this.toolSupplyState = !this.toolSupplyState;
				this.toolRangingState = true;
				this.toolPipelineState = true;
				this.LeftResultHidden();//关闭左侧展示
				this.waterQualityRealBox= false;//关闭水质
				this.rangingClose();  //关闭测距
			},
			// 测距
			toolRanging() {
				this.toolVideoState = true;
				this.toolQualityState = true;
				this.toolSupplyState = true;
				this.toolRangingState = !this.toolRangingState;
				this.toolPipelineState = true;
				this.LeftResultHidden();//关闭左侧展示
				this.waterQualityRealBox= false;//关闭水质
				if (!this.toolRangingState) {
					this.ranging();
				} else {
					this.rangingClose();
				}
	
			},
			toolPipeline() {
				this.toolVideoState = true;
				this.toolQualityState = true;
				this.toolSupplyState = true;
				this.toolRangingState = true;
				this.toolPipelineState = !this.toolPipelineState;
				this.pipeNetworkState = true;
				this.LeftResultHidden();//关闭左侧展示
				this.waterQualityRealBox= false;//关闭水质
				this.rangingClose();  //关闭测距
			},
			// 全屏
			fullScreen() {
				if (this.mapSpan2 != 24) {
					this.mapSpan1 = 0;
					this.mapSpan2 = 24;
					this.mapSpan3 = 0;
					this.mapUnfoldLeft = false;
					this.mapUnfoldRight = false;
					this.fullScreenState = false;
				} else {
					this.mapSpan1 = 3;
					this.mapSpan2 = 17;
					this.mapSpan3 = 4;
					this.mapUnfoldLeft = true;
					this.mapUnfoldRight = true;
					this.fullScreenState = true;
				}
			},
			
			// 点击右边的控制左边的结果全部隐藏
			LeftResultHidden() {
				this.queryResultsState = false;
				this.dmaCardShow = false;
				this.pipelineShow = false;
				this.dmaCancel();
			},
			
			//self.markers  点坐标
			mapSiteArray() {
				//map.remove(mapPoint);
				var self = this;
				mapPoint = [];
				let sitedata = self.markers;
				for (var i = 0; i < sitedata.length; i++) {
					switch (sitedata[i].siteType) {
						case 2:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/starting.png" alt class="wzImg">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								self.sbDataBox = false;
								// 水源地,页面打开
								self.sydbox = true;
								self.activeName = 'first';
								self.allEquipmentContent = e.target.getExtData();
								self.sydText = e.target.getExtData();
								self.tianqi = true;
							});
							mapPoint.push(marker);
							break;
						case 3:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/water.png" alt class="wzImg">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								self.sbDataBox = false;
								console.log(1004566,e)
								// 水厂,页面打开,判断当前是那个水厂
								if (e.target.getExtData().name == "老水厂") {
									self.waterPlantsBox = true;
									setInterval(function () {
										self.clockTime();
									}, 1000); //更新水厂的最新时间
									self.waterPlantData = 'first';
								}
								if (e.target.getExtData().name == "新水厂") {
									self.waterPlantsBoxNew = true;
									self.waterPlantDataNew = 'first';
								}
	
							});
							mapPoint.push(marker);
							break;
						case 4:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/lid00.png" alt class="wzImg"  style="width:20px;height:20px;">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								//弹出框显示所有的信息
								self.sbDataBox = true;
								self.allEquipmentContent = e.target.getExtData();
								self.sbstatistical = false;
								self.dataAnalyze = false;
								self.noNataAnalyze = false;
							});
							mapPoint.push(marker);
							break;
						case 5:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/hydrant.png" alt class="wzImg"  style="width:22px;height:24px;">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								//弹出框显示所有的信息
								self.sbDataBox = true;
								self.allEquipmentContent = e.target.getExtData();
								self.sbstatistical = false;
								self.dataAnalyze = false;
								self.noNataAnalyze = false;
							});
							mapPoint.push(marker);
							break;
						case 6:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/sewage.png" alt class="wzImg"  style="width:40px;height:40px;">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								//弹出框显示所有的信息
								self.sbDataBox = true;
								self.allEquipmentContent = e.target.getExtData();
								self.sbstatistical = false;
								self.dataAnalyze = false;
								self.noNataAnalyze = false;
							});
							mapPoint.push(marker);
							break;
						case 7:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/yingyeting1.png" alt class="wzImg" style="width:46px;height:40px;">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								//弹出框显示所有的信息
								self.sbDataBox = true;
								self.allEquipmentContent = e.target.getExtData();
								self.sbstatistical = false;
								self.dataAnalyze = false;
								self.noNataAnalyze = false;
							});
							mapPoint.push(marker);
							break;
						case 8:
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content:
									'<div style="postion:absolute" class="yanBox">' +
									'<div>' +
									'<img src="../../../static/img/plot.png" alt class="wzImg" style="width:50px;height:50px;">' +
									'</div>' +
									'</div>', // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i]
							});
							marker.on('click', function (e) {
								self.clockTime();
								self.resetForm();  //刷新,清除用户编码和已选择的楼单元;
								self.sbDataBox = false;
								// 小区,页面打开,查询时间,小区树,小区的数据
								self.xiaoqulou = true;
								self.xiaoquitemArray = e.target.getExtData();
								self.waternetwork();  //小区树
								self.villageQuery.startTime = self.value1;
								self.villageQuery.endTime = self.value2;
								self.villageQuery.siteCode = e.target.getExtData().sitecode;
								self.waterArratList();  //小区数据列表
							});
							mapPoint.push(marker);
							break;
						case 1:
							var component = new periodDiv().$mount(); // 每次添加需要重新new一个
							component.paramterData = sitedata[i].realtimeDataArray;
							var $dom = $(component.$el); // 获取动态元素的jquery对象
							var marker = new AMap.Marker({
								title: sitedata[i].name, //鼠标滑上去显示的文字
								content: component.$el, // 自定义点标记覆盖物内容
								position: sitedata[i].position, // 基点位置
								extData: sitedata[i],
								offset: new AMap.Pixel(-45, -80) // 相对于基点的偏移位置
							});
							marker.on('click', function (e) {
								self.sbDataBox = true;
								self.markersClick(e.target.getExtData());
							});
							mapPoint.push(marker);
							break;
					}
				}
				mapMarker = mapPoint;
				map.add(mapPoint);
			},
					
			// 漏损率,产销差率
			drawLine(){
				// 漏损率,产销差率,数据处理
				var lsyuzhi = (100-this.louBili).toFixed(2); //小数点后两位:.toFixed(2)
				var cxcyuzhi = (100-this.chanBili).toFixed(2);
				if(this.louBili < 0){
					lsyuzhi = 100;
				}
				if(this.chanBili < 0){
					cxcyuzhi = 100;
				}
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('lousun'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						left: 'center',
						data: ['当前漏损率', '其他漏损率'],
						textStyle: {
							fontSize: 12,
							color: '#fff'
						}
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							// restore: {
							// 	show: true  //刷新
							// },
							saveAsImage: {
								show: true  //下载
							}
						}
					},
					color: [ '#718F48','#6A9EC9' ],
					series: [
						{
							name: '漏损率',
							type: 'pie',
							radius: '65%',
							center: ['50%', '60%'],
							selectedMode: 'single',
							data: [
								{
									value: lsyuzhi,
									name: '当前漏损率'
								},
								{
									value: cxcyuzhi,
									name: '其他漏损率'
								}
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				});
			},
			
		  //图表
		  myEcharts1(){
			  // 基于准备好的dom，初始化echarts实例
			  var myChart = this.$echarts.init(document.getElementById('main1'));
	  
			  // 指定图表的配置项和数据
			  var colors = ['#5793f3', '#d14a61', '#675bba'];
			  var option = {
					color: colors,
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
					grid: {
						right: '20%',
					},
					toolbox: {
						feature: {
							dataView: {show: true, readOnly: false},
							restore: {show: true},
							saveAsImage: {show: true}
						}
					},
					legend: {
						data: ['夜间流量', '降水量', '平均温度']
					},
					xAxis: [
						{
							type: 'category',
							axisTick: {
								alignWithLabel: true
							},
							data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
						}
					],
					yAxis: [
						{
							type: 'value',
							name: '夜间流量',
							min: 0,
							max: 250,
							position: 'right',
							axisLine: {
								lineStyle: {
									color: colors[0]
								}
							},
							axisLabel: {
								formatter: '{value} ml'
							}
						},
						{
							type: 'value',
							name: '降水量',
							min: 0,
							max: 250,
							position: 'right',
							offset: 80,
							axisLine: {
								lineStyle: {
									color: colors[1]
								}
							},
							axisLabel: {
								formatter: '{value} ml'
							}
						},
						{
							type: 'value',
							name: '温度',
							min: 0,
							max: 25,
							position: 'left',
							axisLine: {
								lineStyle: {
									color: colors[2]
								}
							},
							axisLabel: {
								formatter: '{value} °C'
							}
						}
					],
					series: [
						{
							name: '夜间流量',
							type: 'bar',
							data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
						},
						{
							name: '降水量',
							type: 'bar',
							yAxisIndex: 1,
							data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
						},
						{
							name: '平均温度',
							type: 'line',
							yAxisIndex: 2,
							data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
						}
					]
				};
			  // 使用刚指定的配置项和数据显示图表。
			  myChart.setOption(option);
		  },
		
		//图表
		myEcharts2(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main2'));

		  // 指定图表的配置项和数据
		  var colors = ['#043c89'];
		  var option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {            // 坐标轴指示器，坐标轴触发有效
						type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				legend: {
					data: ['本周压力统计']
				},
				grid: {
					
					bottom: '30px',
					containLabel: true
				},
				xAxis: [
					{
						type: 'value'
					}
				],
				yAxis: [
					{
						type: 'category',
						axisTick: {
							show: false
						},
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}
				],
				series: [
					{
						name: '本周压力统计',
						type: 'bar',
						label: {
							show: true,
							position: 'inside'
						},
						data: [200, 170, 240, 244, 200, 220, 210]
					},
				]
			};
		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		},
		
		//关闭视频
		closeVideo(){
			this.showvideo = false;
		},
				
		}
    }