<template>
  <div class="fix mapboxmain">
		<el-amap class="amap" :amap-manager="amapManager" :vid="'amap-vue'" :plugin="plugin" :center="center" :zoom="zoom" :events="events">
			<template v-if="windows.length>0">
				<el-amap-info-window
					v-for="(item,index) in windows" 
					:key="index"
					:position="item.position"
					:content="item.content"
					:visible="item.visible"
					:events="item.events">
				</el-amap-info-window>
			</template>
			<span v-if="markers.length>0">
				<span v-for="(item,index) in markers" :key="index">
					<el-amap-marker  :content="item.content" :position="item.position" :events="item.events"></el-amap-marker>
				</span>
			</span>
		</el-amap>
		
  </div>
</template>

<script>
	import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
	let amapManager = new AMapManager()
	var self = this;
    export default {
        props:["data"],
        name: 'Xmaps',
        data(){
            return {
                //数据列表
                windows: [],
                markers:[],
                select:"",//当前显示数据
				events: {
					init() {
					lazyAMapApiLoaderInstance.load().then(() => {
						//self.initSearch()
					})
				}
				},
                plugin:[
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
				searchOption: {
					city: '全国',
					citylimit: true
				},
                center: [108.515503,32.899122],
                zoom: 13,
                lng: 0,
                lat: 0,
				resizeEnable: true,
				amapManager,
            }
        },
        methods:{
            // GDinit (o, self) {
            //     o.getCurrentPosition((status, result) => {
            //         console.log(status, result);
            //         if (status === 'complete' && result.info === 'SUCCESS') {
            //             let lat = result.position.lat;
            //             let lng = result.position.lng;
            //             self.center = [lng, lat];
            //             self.GDmapGetInfoOfNearby(lng, lat, self); // 获取周边信息
            //         }
            //     })
            // },
            // GDmapGetInfoOfNearby (lng, lat, self) {
            //     // 这里通过高德 SDK 完成。
            //     let geocoder = new AMap.Geocoder({ 
            //         radius: 1000,
            //         extensions: 'all',
            //         poitype: ''
            //     });
            //     geocoder.getAddress([lng, lat], (status, result) => {
            //         if (status === 'complete' && result.info === 'OK') {
            //             if (result && result.regeocode) {
            //                 console.log(result);
            //                 self.$nextTick();
            //             }
            //         }
            //     })
            // },
			
			//地图数据
			showmapdata(){
				var st1 = require('../../../static/img/jingbao0.png')
				var st2 = require('../../../static/img/jingbao.png')
				var st3 = require('../../../static/img/jingbao003.png')
				this.windows = [];
				this.markers = [];
				var data = this.data;
				var that = this;
				console.log(data)
				data.forEach((e,i) => {
				    const temp = `<div class="tempdiv">
				        <div class="templine">
				            <label class="templabel">名称：</label> 
				            <span class="tempspan">${e.licensePlate}</spam>  
				        </div>
				        <div class="templine">
				            <label class="templabel">联系人：</label> 
				            <span class="tempspan">${e.name}</spam>  
				        </div>
				        <div class="templine">
				            <label class="templabel">状态：</label> 
				            <span class="tempspan">${e.status==0?'警报':(e.status==1?'正常':"维修中")}</spam>  
				        </div>
				        <div class="templine">
				            <label class="tempspan">地址：</label> 
				            <span class="tempspan">${e.address}</spam>  
				        </div>
				        <div class="templine">
				            <label class="tempspan">经纬度：</label> 
				            <span class="tempspan">${e.position}</spam>  
				        </div>
				        <div class="templine">
				            <label class="templabel">最近采集数据时间：</label> 
				            <span class="tempspan">${e.end}</spam>  
				        </div>
				    </div>`;
				    this.windows.push({
						title:e.licensePlate,
				        position:e.position,
				        content:temp,
				        visible: false,
				    })
				    this.markers.push({
						title:e.licensePlate,
				        position:e.position,
				        content:"<img src='"+(e.status==0?st1:(e.status==1?st2:st3))+"' class='tempimg'/ alt='"+(e.licensePlate)+"'>",
						// content:`<div class='tempimg "+e.status==0?"tempimg2":(e.status==1?"tempimg1":"tempimg3")'></div>`,
				        events:{
				            click(){
				                console.log(9999);
				                that.windows.forEach(window => {
				                    window.visible = false;
				                });
				                that.select = that.windows[i];
				                that.$nextTick(() => {
				                    that.select.visible = true;
				                });
				            }
				        }
				    })
				});
				this.windows[0].visible = true;
			}
        },
		
        mounted(){
			this.showmapdata();
        },
    }
</script>

<style>
	.mapboxmain{height: 100%;width: 100%;}
	.mapboxmain .el-vue-amap-container, .el-vue-amap-container .el-vue-amap{height: 100%!important;}
	.mapboxmain .amap-info-content{background:rgba(0,0,0,0.6);}
	.mapboxmain .bottom-center .amap-info-sharp{border-top: 8px solid rgba(0,0,0,0.6);}
	.tempdiv{font-size:14px;color:#fff;}
	.templine{line-height: 24px;}
	.templabel{margin-right:10px;}
	.tepmspan{color:#909399;}
	.mapboxmain .amap-info-close{width: 20px;height: 20px;font-size: 18px;color: #fff;}
	.mapboxmain .amap-marker-content{top: 25px;left: -20px;}
	.tempimg{width: 60px;height: 60px;animation:scale 2s infinite cubic-bezier(0,0,.49,1.02);animation-delay:200ms;}
	.tempimg1{background: url(../../../static/img/jingbao.png) no-repeat;background-size: cover;}
	.tempimg2{background: url(../../../static/img/jingbao0.png) no-repeat;background-size: cover;}
	.tempimg3{background: url(../../../static/img/jingbao003.png) no-repeat;background-size: cover;}
	
	@keyframes scale {
		0% {transform: scale(0.9);opacity: 1;}
		50% {transform: scale(1.2);opacity: 1;}
		100% {transform: scale(0.9);opacity: 1;}
	}
</style>