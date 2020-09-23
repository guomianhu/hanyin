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
			<div class="youset">您当前位置：SDASAC采集分析</div>
		</div>
		<div class="fix">
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
				<div class="scadat"></div>
				<div class="scdtable mtop20">
					<a-table :columns="columns" :data-source="data" bordered>
						<template slot="name" slot-scope="text">
						  {{ text }}
						</template>
					</a-table>
				</div>
			</div>
			
			<!-- 右边 -->
			<div class="gyrightbox">
				<div class="bitti">数据统计</div>
				<ul class="bitul fix">
					<li>名称：长丰园小区</li>
					<li>地址：陕西省安康市汉阴县涧池镇105号</li>
					<li>电话：15802514747</li>
					<li>负责人：严森</li>
				</ul>
				<ul class="worter gyworter">
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal1' :duration='duration' :decimals="decimals"></countTo></h4>
						<p>总户数(户)</p>
					</li>
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal2' :duration='duration' :decimals="decimals"></countTo></h4>
						<p>远传表数(个)</p>
					</li>
					<li>
						<h4><countTo :startVal='startVal' :endVal='endVal3' :duration='duration' :decimals="decimals"></countTo></h4>
						<p>卡表数(个)</p>
					</li>
					<li class="last">
						<h4><countTo :startVal='startVal' :endVal='endVal4' :duration='duration' :decimals="decimals"></countTo></h4>
						<p>机械表数(个)</p>
					</li>
				</ul>
				<div class="bitti" style="margin-top: 0;">数据分析</div>
				<div class="lousun" id="lousun"></div>
			</div>
		</div>
	</div>
</template>
<script>
  import countTo from 'vue-count-to';
  import userinfo from "../../components/common/userinfo"
  const columns = [
		 {
		   title: '小区名称',
		   dataIndex: 'name',
		   scopedSlots: { customRender: 'name' },
		 },
		{
		  title: '总户数(户)',
		  dataIndex: 'num',
		  scopedSlots: { customRender: 'num' },
		},
		{
		  title: '远传表数(个)',
		  className: 'column-money',
		  dataIndex: 'money',
		},
		{
		  title: '卡表数(个)',
		  dataIndex: 'num2',
		},
		{
		  title: '机械表数(个)',
		  dataIndex: 'num3',
		},
		{
		  title: '出水压力',
		  dataIndex: 'num4',
		},
		{
		  title: '通讯状态',
		  dataIndex: 'address',
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
			louBili1: 18,
			louBili2: 30,
			louBili3: 14,
			louBili4:38,
			duration: 3000,//持续时间，以毫秒为单位
			startVal: 0,// 初始值
			decimals:0,//要显示的小数位数
			endVal1: 103,// 最终值
			endVal2:92,
			endVal3:65,
			endVal4:23,
        }
	  },
      components: {countTo,userinfo},
      mounted(){
		  this.drawLine()
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
		drawLine(){
		  	var louBili1 = (100-this.louBili1).toFixed(2); //小数点后两位:.toFixed(2)
		  	var louBili2 = (100-this.louBili2).toFixed(2);
			var louBili3 = (100-this.louBili3).toFixed(2);
			var louBili4 = (100-this.louBili4).toFixed(2);
		  	if(this.louBili1 < 0){
		  		louBili1 = 100;
		  	}
		  	if(this.louBili2 < 0){
		  		louBili2 = 100;
		  	}
			if(this.louBili3 < 0){
				louBili3 = 100;
			}
			if(this.louBili4 < 0){
				louBili4 = 100;
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
		  			left: 'left',
		  			data: ['总户数', '远传表数','卡表数','机械表数'],
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
		  		color: [ '#718F48','#6A9EC9','#bc730c','#148a95' ],
		  		series: [
		  			{
		  				name: '总数',
		  				type: 'pie',
		  				radius: '65%',
		  				center: ['50%', '60%'],
		  				selectedMode: 'single',
		  				data: [
		  					{
		  						value: louBili1,
		  						name: '总户数'
		  					},
		  					{
		  						value: louBili2,
		  						name: '远传表数'
		  					},
							{
								value: louBili3,
								name: '卡表数'
							},
							{
								value: louBili4,
								name: '机械表数'
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
	
	// 中间部分
	.gycenbox{width: 62%;margin-left: 1.2%; float: left;padding-top: 20px;}
	.scadat{height: 480px;background: url(../../../static/img/scada.jpg) no-repeat center top;background-size: 100% 100%;}
	
	
	// 右边
	.gyrightbox{width:18%;float: right;margin-right: 30px;
		.gyworter{margin-top:20px;margin-right: 0;overflow: hidden;}
		>.gyworter li{width:160px; margin-bottom:20px;margin-right: 20px;float: left;background-size: 100% 100%;}
		>.gyworter li:nth-child(2n){margin-right: 0;}
		>.gyworter li p{margin-top: 10px;}
		.bitul{padding: 12px; color: #fff;border: 1px solid #fff;margin-top: 20px;}
		.bitul li{height: 27px;line-height: 27px;}
		.bitti{text-align: center;background: url(../../assets/images/gy3.png) no-repeat center top;background-size: 100% 100%;color: #fff;height: 50px;line-height: 50px;margin-top: 20px;font-size: 18px;}
		.gyworter li.last h4{background: url(../../assets/images/lin3.png) no-repeat center bottom;}
		.lousun{width: 100%;height: 235px;margin-top:15px;border: 1px solid #fff;padding: 10px;}
	}
</style>