<template>
    <div class="index_bg">
		<snow></snow>
		<liuxing></liuxing>
		<div class="pagetit">
			<p class="masked">汉阴智慧水务管理平台</p>
			<ul class="userlink fix">
				<li @click="loginOut">退出</li>
				<li v-if="hasLogin" @click="Tologin">登录</li>
				<li v-else>欢迎您，{{usertit}}</li>
			</ul>
		</div>
		<div class="totrbg"></div>

        <div class="fix maincent">
			<div class="page_left">
				<div class="menulist">
					<ul class="menuli fix" ref="rollul" :class="{anim:animate==true}" id="menuli">
						<li v-for="(item, index) in Menulist" :key="index" @click="changemu(index)" :class="[{active: activeindex == index}]" ref="rollli">
							<router-link :to="item.url">
								<h3><img :src="item.imgurl"></h3>
								<p>{{item.name}}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<ul class="btnico fix">
                    <li class="downico" @click="downClick" :class="[{disabled: isDown}]"></li>
                    <li class="upico" @click="upClick" :class="[{disabled: isUp}]"></li>
                </ul>
			</div>
			
			<div class="page_center fix">
				<ul class="wortetype">
					<li>村级水厂</li>
					<li>镇级水厂</li>
				</ul>
				
				<div class="mapbox">
					<ul class="mapdata fxi">
						<li v-for="(item, index) in woterlist" :key="index" @click="changewoter(index,item.id,item)" :class="[{active: activeclass == index}]">
							<div class="mapname">
								<p>{{item.name}}</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
					</ul>
					<!-- <ul class="mapdata fxi">
						<li>
							<div class="mapname">
								<p>汉阳镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>双平镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>上七镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>漩涡镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>平梁镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>城关镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>永宁乡</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>蒲溪镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>双乳镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>涧池镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>田禾乡</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>酒店镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>观音河乡</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>龙垭镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>铁佛寺镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>双河口镇</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>石条街乡</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
						<li>
							<div class="mapname">
								<p>铜钱乡</p>
								<span class="zhen"></span>
								<span class="cun"></span>
							</div>
						</li>
					</ul> -->
				</div>
				
				<ul class="worter">
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
			</div>
			
			<div class="page_right">
				<div class="right_top">
					<h1><countTo :startVal='startVal' :endVal='endVal4' :duration='duration' :decimals="decimals"></countTo></h1>
					<h3><span>同比上升10%</span><em>环比上升10%</em></h3>
					<h4>全县用水量统计</h4>
				</div>
				<div class="tline"></div>
				<ul class="jclist fix">
					<li>水源监测</li>
					<li>水厂监测</li>
					<li>管网监测</li>
					<li>应急预案</li>
					<li>供水收费</li>
					<li>综合管理</li>
				</ul>
				<div class="jcdatabox">
					<div class="jcdata">
						<h2>{{wotitle}}联村水厂</h2>
						<p>水源蓄水量：<span class="color1">{{woter1}}万方</span></p>
						<p>净水蓄水量：<span class="color2">{{woter2}}万方</span></p>
						<p>当日供水量：<span class="color3">{{woter3}}方</span></p>
						<p class="blue">供水水质：</p>
						<p>pH：{{ph}}pH</p>
						<p>电导率：{{woter4}} uS/cm</p>
						<p>溶解氧：{{woter5}}mg/L</p>
						<p>浊度：{{woter6}} NTU</p>
						<p>温度：{{woter7}} ℃</p>
					</div>
				</div>
			</div>
		</div>

		<div class="footline">
			<div class="footlib">
				<div id="container"></div>
			</div>
		</div>
    </div>
</template>
<script>
  import '../../assets/css/index.css'
  import { Chart } from '@antv/g2';
  import snow from "../../components/common/snow"
  import liuxing from "../../components/common/liuxing"
  import countTo from 'vue-count-to';
  import Header from "../../components/common/Header"
  
  const data = [
		{ month: '1月份', city: '日均蓄水量', temperature: 250 },
		{ month: '1月份', city: '日生产水量', temperature: 470 },
		{ month: '1月份', city: '日供水量', temperature: 574 },
		{ month: '2月份', city: '日均蓄水量', temperature: 240 },
		{ month: '2月份', city: '日生产水量', temperature: 396 },
		{ month: '2月份', city: '日供水量', temperature: 457},
		{ month: '3月份', city: '日均蓄水量', temperature: 440 },
		{ month: '3月份', city: '日生产水量', temperature: 296 },
		{ month: '3月份', city: '日供水量', temperature: 357},
		{ month: '4月份', city: '日均蓄水量', temperature: 219 },
		{ month: '4月份', city: '日生产水量', temperature: 215 },
		{ month: '4月份', city: '日供水量', temperature: 152 },
		{ month: '5月份', city: '日均蓄水量', temperature: 452 },
		{ month: '5月份', city: '日生产水量', temperature: 670 },
		{ month: '5月份', city: '日供水量', temperature: 565 },	
		{ month: '6月份', city: '日均蓄水量', temperature: 366 },
		{ month: '6月份', city: '日生产水量', temperature: 533 },
		{ month: '6月份', city: '日供水量', temperature: 142 },	
		{ month: '7月份', city: '日均蓄水量', temperature: 383 },
		{ month: '7月份', city: '日生产水量', temperature: 503 },
		{ month: '7月份', city: '日供水量', temperature: 239 },	
		{ month: '8月份', city: '日均蓄水量', temperature: 626 },
		{ month: '8月份', city: '日生产水量', temperature: 156 },
		{ month: '8月份', city: '日供水量', temperature: 480 },
		{ month: '9月份', city: '日均蓄水量', temperature: 126 },
		{ month: '9月份', city: '日生产水量', temperature: 356 },
		{ month: '9月份', city: '日供水量', temperature: 280 },	
		{ month: '10月份', city: '日均蓄水量', temperature: 324 },
		{ month: '10月份', city: '日生产水量', temperature: 436 },
		{ month: '10月份', city: '日供水量', temperature: 563 },	
		{ month: '11月份', city: '日均蓄水量', temperature: 226 },
		{ month: '11月份', city: '日生产水量', temperature: 356 },
		{ month: '11月份', city: '日供水量', temperature: 380 },	
		{ month: '12月份', city: '日均蓄水量', temperature: 670 },
		{ month: '12月份', city: '日生产水量', temperature: 256 },
		{ month: '12月份', city: '日供水量', temperature: 480 },
  ];
  
  export default {
      data () {
        return {
			  hasLogin:true,
			  usertit:'',
			  Menulist: [
				  {
				    name:'生产运行管理',
					imgurl: require('../../assets/images/lk1.png'),
				    url:'/Pomanagement'
				  },
				  {
				    name:'GIS地图',
					imgurl: require('../../assets/images/lk2.png'),
				    url:'/Gis'
				  },
				  {
				    name:'SDASAC采控',
					imgurl: require('../../assets/images/lk3.png'),
				    url:'Scada'
				  },
				  {
				    name:'视频监控',
					imgurl: require('../../assets/images/lk4.png'),
				    url:'VideoSurveillance'
				  },
				  {
				    name:'管网监测',
					imgurl: require('../../assets/images/lk5.png'),
				    url:'PlMonitoring'
				  },
				  {
				    name:'水厂工艺',
					imgurl: require('../../assets/images/lk6.png'),
				    url:'WaterProcess'
				  },
				  {
				    name:'远传抄表',
				  					imgurl: require('../../assets/images/lk9.png'),
				    url:'Remotetable'
				  },
				  {
				    name:'数据统计分析',
				  					imgurl: require('../../assets/images/lk1.png'),
				    url:'Datanalysis'
				  },
				  {
				    name:'公司网站',
					imgurl: require('../../assets/images/lk7.png'),
				    url:'Companywebsite'
				  },
				  {
				    name:'服务门户',
					imgurl: require('../../assets/images/lk8.png'),
				    url:'Serviceportal'
				  },
				  {
				    name:'应急预案',
					imgurl: require('../../assets/images/lk10.png'),
				    url:'map'
				  },
				  
				  {
				    name:'第三方接口',
					imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'日常维护',
					imgurl: require('../../assets/images/lk1.png'),
				    url:'Dailymaintenance'
				  },
				  {
				    name:'14',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'15',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'16',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'17',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'18',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'19',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
				  {
				    name:'20',
				  	imgurl: require('../../assets/images/lk1.png'),
				    url:''
				  },
			  ],
			  activeindex: 0,
			  activeclass:9,
			  wotitle:'涧池',
			  woter1:2.3,
			  woter2:1.1,
			  woter3:8633,
			  woter4:208.6,
			  woter5:9.95,
			  woter6:1.14,
			  woter7:15.6,
			  ph:7.68,
			  msg: "",
			  chart: null,
			  animate:true,
			  count:0,
			  maxCount:0,
			  minCount:0,
			  isDown:false,
			  isUp:true,
			  duration: 3000,//持续时间，以毫秒为单位
			  startVal: 0,// 初始值
			  decimals:2,//要显示的小数位数
			  endVal1: 109.6,// 最终值
			  endVal2:9.05,
			  endVal3:6.8,
			  endVal4:256654.86,
			  woterlist: [		  
				  {
						id:1,
						name:'汉阳镇',
						woter1: 1.5,
						woter2: 1.7,
						woter3: 3652,
						woter4: 203.5,
						woter5: 9.25,
						woter6: 1.25,
						woter7: 16.5,
						ph: 7.5,
				  },
				  {
						id:2,
						name:'双平镇',
						woter1: 1.3,
						woter2: 1.45,
						woter3: 5241,
						woter4: 303.5,
						woter5: 5.25,
						woter6: 2.25,
						woter7: 17.5,
						ph: 7.3,
				  },
				  {
						id:3,
						name:'上七镇',
						woter1: 1.34,
						woter2: 1.25,
						woter3: 4541,
						woter4: 333.5,
						woter5: 6.25,
						woter6: 1.25,
						woter7: 19.5,
						ph: 7.8,
				  },
				  {
						id:4,
						name:'漩涡镇',
						woter1: 2.34,
						woter2: 2.25,
						woter3: 6541,
						woter4: 432.5,
						woter5: 7.25,
						woter6: 4.25,
						woter7: 20.5,
						ph: 7.3,
				  },
				  {
						id:5,
						name:'平梁镇',
						woter1: 3.34,
						woter2: 1.25,
						woter3: 2541,
						woter4: 322.5,
						woter5: 7.25,
						woter6: 6.25,
						woter7: 24.5,
						ph: 7.34,
				  },
				  {
						id:6,
						name:'城关镇',
						woter1: 1.34,
						woter2: 1.6,
						woter3: 2541,
						woter4: 102.5,
						woter5: 4.25,
						woter6: 12.25,
						woter7: 20.5,
						ph: 7.3,
				  },
				  {
						id:7,
						name:'永宁乡',
						woter1: 1.34,
						woter2: 1.6,
						woter3: 2541,
						woter4: 102.5,
						woter5: 4.25,
						woter6: 12.25,
						woter7: 20.5,
						ph: 7.3,
				  },
				  {
						id:8,
						name:'蒲溪镇',
						woter1: 1.44,
						woter2: 1.36,
						woter3: 241,
						woter4: 102.35,
						woter5: 4.325,
						woter6: 12.225,
						woter7: 20.25,
						ph: 7.33,
				  },
				  {
						id:9,
						name:'双乳镇',
						woter1: 4.34,
						woter2: 1.55,
						woter3: 4561,
						woter4: 102.35,
						woter5: 4.225,
						woter6: 18.25,
						woter7: 16.5,
						ph: 7.34,
				  },
				  {
						id:10,
						name:'涧池镇',
						woter1: 2.3,
						woter2: 1.1,
						woter3: 8633,
						woter4: 208.6,
						woter5: 9.95,
						woter6: 1.14,
						woter7: 15.6,
						ph: 7.68,
				  },
				  {
						id:11,
						name:'田禾乡',
						woter1: 1.344,
						woter2: 1.26,
						woter3: 2541,
						woter4: 106.5,
						woter5: 4.235,
						woter6: 16.25,
						woter7: 20.35,
						ph: 7.55,
				  },
				  {
						id:12,
						name:'酒店镇',
						woter1: 1.344,
						woter2: 1.26,
						woter3: 2541,
						woter4: 106.5,
						woter5: 4.235,
						woter6: 16.25,
						woter7: 20.35,
						ph: 7.55,
				  },
				  {
						id:13,
						name:'观音河乡',
						woter1: 1.344,
						woter2: 1.26,
						woter3: 2541,
						woter4: 106.5,
						woter5: 4.235,
						woter6: 16.25,
						woter7: 20.35,
						ph: 7.55,
				  },
				  {
						id:14,
						name:'龙垭镇',
						woter1: 1.44,
						woter2: 1.46,
						woter3: 4541,
						woter4: 406.5,
						woter5: 4.25,
						woter6: 18.25,
						woter7: 21.35,
						ph: 7.75,
				  },
				  {
						id:15,
						name:'铁佛寺镇',
						woter1: 1.44,
						woter2: 1.46,
						woter3: 4541,
						woter4: 406.5,
						woter5: 4.25,
						woter6: 18.25,
						woter7: 21.35,
						ph: 7.75,
				  },
				  {
						id:16,
						name:'双河口镇',
						woter1: 1.44,
						woter2: 1.46,
						woter3: 4541,
						woter4: 406.5,
						woter5: 4.25,
						woter6: 18.25,
						woter7: 21.35,
						ph: 7.75,
				  },
				  {
						id:17,
						name:'石条街乡',
						woter1: 4.34,
						woter2: 1.55,
						woter3: 4561,
						woter4: 102.35,
						woter5: 4.225,
						woter6: 18.25,
						woter7: 16.5,
						ph: 7.34,
				  },
				  {
						id:18,
						name:'铜线乡',
						woter1: 1.34,
						woter2: 1.6,
						woter3: 2541,
						woter4: 102.5,
						woter5: 4.25,
						woter6: 12.25,
						woter7: 20.5,
						ph: 7.3,
				  },
			  ],
        }
      },
	  components: {snow,liuxing,countTo,Header},
      mounted(){
		  this.initComponent();
		  this.initCount();
		  const username = this.$route.query.username;
		  this.usertit = username
		  if(username){
			  this.hasLogin = false
		  }
      },
      methods:{
		  changemu(index) {
		      this.activeindex = index
		  },
		  changewoter(index,id,item) {
				  this.activeclass = index
				  console.log(id)
				  console.log(item)
				  this.wotitle = item.name;
				  this.woter1 = item.woter1;
				  this.woter2 = item.woter2;
				  this.woter3 = item.woter3;
				  this.woter4 = item.woter4;
				  this.woter5 = item.woter5;
				  this.woter6 = item.woter6;
				  this.woter7 = item.woter7;
				  this.ph = item.ph;
		  },
		  
		  //向下
		  downClick(){
	            if(this.count<this.maxCount-5){
	                this.isUp = false;
	            }
	            if(this.count==this.maxCount-6){
	                this.isDown = true;
	            }
	            if(this.count<this.maxCount-5){
	                this.count++;
	            }
	            let ul = this.$refs.rollul;//ul元素
	            let dom = document.getElementById('menuli');
	            let li = dom.getElementsByTagName('li');//li元素
	            ul.style.marginTop= -(114 * this.count)+"px";
	            this.animate=!this.animate; 
           },
			
		  //向上
		  upClick(){
		  		  let ul = this.$refs.rollul;//ul元素
				  if(this.count>=1){
					this.count--;
				  }
				  if(this.count==0){
						this.isUp = true;
				  }
				  if(this.count<this.maxCount){
						this.isDown = false;
				  }
				  let dom = document.getElementById('menuli');
				  let li = dom.getElementsByTagName('li');//li元素
				  ul.style.marginTop= -(114 * this.count)+"px";
				  this.animate=!this.animate;
		  },
		  initCount(){
		  	this.maxCount = Math.ceil(this.Menulist.length/2);//获取左侧数据长度，总共有多是页
			console.log('maxCount',this.maxCount);
		  },
		  
		  //图表
		 initComponent() {
				 const chart = new Chart({
					   container: 'container',
					   autoFit: true,
					   height: 190,
				 });		     
				 chart.data(data);
				 chart.scale({
					   month: {
						 range: [0, 1],
					   },
					   temperature: {
						 nice: true,
					   },
				 });		     
				 chart.tooltip({
					   showCrosshairs: true,
					   shared: true,
				 });
				 //横坐标样式
				 chart.axis('month', {
					   label: {
						 style:{
		                      fill:'#00fffb',
		                      fontSize:14,
		                      textAlign:'center'
		                  },
					   },
				 });
				//纵坐标样式
				 chart.axis('temperature', {
					   label: {
						 formatter: (val) => {
						   return val + ' 万';
						 },
						 style:{
		                     fill:'#00fffb',
		                     fontSize:14,
		                     lineHeight:20
		                 },
					   },
				 });
				//字体
				chart.legend({
		            itemName:{
		                style:{
		                    fill:'#fff',
		                    fontSize:15,
		                    lineHeight:18
		                }
		            },
		            marker:{
		                style:{
		                    r:8
		                }
		            }
		        })	
				chart
				   .line()
				   .position('month*temperature')
				   .color('city')
				   .shape('smooth');		     
				chart
				   .point()
				   .position('month*temperature')
				   .color('city')
				   .shape('circle');		     
				chart.render();   
		},
		
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
		
		//登录
		Tologin(){
			this.$router.push({path:"/login"})
		},
      }
    }
</script>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
	.maincent{margin-top: 10px;}
	.page_left{width: 16.4%;height: 670px; float: left;background: url(../../assets/images/leftm.png) no-repeat;background-size: 100% 100%; margin-left: 1%;position: relative;}
	.menulist{margin-left: 10px;height: 570px;overflow: hidden;margin-top:40px;}
	.menuli,.anim{transition: all 0.5s;}
	.menuli li{width: 50%;text-align:center;color:#fff;cursor: pointer;float: left;height: 114px;}
	.menuli li:nth-child(2n){float: right;}
	.menuli li a{color: #fff;width: 100%;height: 100%;display: block;}
	.menuli li h3{width: 60px;height: 60px;margin: auto;margin-bottom: 10px;-webkit-transition: -webkit-transform 1.5s ease-out;}
	.menuli li h3 img{width: 100%;height: 100%;}
	.menuli li:hover h3 {-webkit-transform: rotateZ(720deg); transform: rotateZ(360deg);}
	.menuli li:hover a{color: #02eeff;}
	.menuli li p{white-space: nowrap;overflow:hidden;text-overflow: ellipsis;}
	.btnico{width: 100%;height: 46px;position: absolute;left: 0;bottom: 0;text-align: center;}
	.btnico li{width: 22px;height: 100%;cursor: pointer;background: url(../../assets/images/downico.png) no-repeat 0 center;display: inline-block;margin: 0 20px;}
	.btnico li.upico{transform: rotate(180deg);}
	.btnico li.downico.disabled{background: url(../../assets/images/downicono.png) no-repeat 0 center;cursor: no-drop;}
	.btnico li.upico.disabled{background: url(../../assets/images/downicono.png) no-repeat 0 center;cursor: no-drop;}
	
	.page_center{width: 63%;float: left;margin-left: 1%;position: relative;height: 670px;}
	.wortetype{float: left;margin-top: 20px;margin-left:10px;color: #e4fdff;}
	.wortetype li{font-size: 18px;margin-top:15px;height: 40px;line-height: 40px;position: relative;text-indent: 50px;}
	.wortetype li::before{width: 40px;height: 40px;content: "";position: absolute;left: 0;top: 0;}
	.worter{float: right;margin-top: 30px;margin-right:5px;}
	
	.page_right{width: 16.5%; float: right;margin-right: 1%;height: 670px;background: url(../../assets/images/bk.png) no-repeat;background-size: 100% 100%;position: relative;z-index: 4;}
	.right_top{text-align: center;padding-top: 35px;margin-left: 2.5%;}
	.right_top h1{color: #02eeff;font-size: 30px;height: 40px;}
	.right_top h3{background: url(../../assets/images/lin2.png) no-repeat center bottom;padding-bottom: 10px;text-align: center;margin-top: 10px;}
	.right_top h3 span{color: #24ffb1;}
	.right_top h3 em{color: #fe9f11;margin: 0 30px;}
	.right_top h4{color: #e4fdff;text-align: center;font-size: 18px;margin-top: 10px;}
	.tline{border-top: 1px solid #1c44a9;border-bottom: 1px solid #1c44a9;height: 10px;background: url(../../assets/images/lin1.png) no-repeat center center;margin: 10px 0;}
	.jclist{margin:0 15px 0 25px;}
	.jclist li{width: 33%;height: 30px;line-height: 30px;text-align: center;background: url(../../assets/images/sk.png) no-repeat center center;background-size: 100% 100%;float: left;margin-top: 15px;color: #fff;margin-left: -2px;}
	.jcdatabox{margin:20px 25px 0;height: 350px;background: url(../../assets/images/line6.png) no-repeat center center;background-size: 100% 100%;}
	.jcdata{padding: 15px 15px 0 20px;}
	.jcdata h2{font-size: 16px;color: #2085ff;}
	.jcdata p{color: #fff;line-height:33px;font-size: 14px; margin: 0;padding: 0;}
	.jcdata p.blue{color: #2085ff;}
	.jcdata span.color1{color: #24c768;}
	.jcdata span.color2{color: #fe9f11;}
	.jcdata span.color3{color: #02eeff;}
	
	.footline{width:98%;height:262px;background: url(../../assets/images/botk.png) no-repeat center top;background-size: 100% 100%;margin: 15px 1% 0;overflow: hidden;box-sizing: border-box;}
	.footlib{margin:37px 30px 0 30px;height: 205px; padding: 10px; overflow: hidden;background: url(../../assets/images/botbg.png) no-repeat center top;background-size: 100% 100%;}
</style>