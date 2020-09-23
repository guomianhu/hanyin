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
			<div class="youset">您当前位置：数据统计分析</div>
		</div>
		<div class="fix">
			
			<div class="mc_left">
					<div class="fix tabdata" style="background: none;">
						<div class="antd-pro-pages-dashboard-analysis-twoColLayout">
						      <a-row :gutter="24" type="flex" :style="{ marginTop: '24px' }">
						        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
									<div class="pb_tit fix">
										<span class="left">查询条件</span>
										<div class="selects left" style="width: 20%;">
											<a-select
												show-search
												placeholder="选择查询类型"
												option-filter-prop="children"
												style="width: 100%"
												:filter-option="filterOption"
												@focus="handleFocus"
												@blur="handleBlur"
												@change="handleChange"
											  >
												<a-select-option value="类型一">类型一</a-select-option>
												<a-select-option value="类型二">类型二</a-select-option>
												<a-select-option value="类型三">类型三</a-select-option>
												<a-select-option value="类型四">类型四</a-select-option>
										  </a-select>
										</div>
										<div class="selects left">
											    <a-range-picker>
											      <template slot="dateRender" slot-scope="current">
											        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
											          {{ current.date() }}
											        </div>
											      </template>
											    </a-range-picker>
										</div>
										<div class="cxbtn">立即查询</div>
									</div>
									<div class="cardtable">
										<a-table :columns="columns" :data-source="data" bordered style="margin-top: 20px;">
											<template slot="name" slot-scope="text">
											  {{ text }}
											</template>
										</a-table>
									</div>
						        </a-col>
						        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
						        	<div class="pb_tit fix">
						        		<span class="left">数据统计</span>
						        	</div>
						        	<div class="cardtable">
										<a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
											<div class="echarm">
												<div class="echar" id="main1"></div>
											</div>
										</a-col>
										<a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
											<div class="echarm">
												<div class="echar" id="main2"></div>
											</div>
										</a-col>
						        	</div>
						        </a-col>
						      </a-row>
						    </div>
					</div>
			        
					<div class="fix tabdata" style="background: none;">
						<div class="antd-pro-pages-dashboard-analysis-twoColLayout">
						      <a-row :gutter="24" type="flex" :style="{ marginTop: '24px' }">
						        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
						          <a-card :bordered="false" title="用户分布" :style="{ height: '100%' }">
						            <div class="ant-table-wrapper">
						              <a-table
						                row-key="index"
						                size="small"
						                :columns="searchTableColumns"
						                :dataSource="searchData"
						                :pagination="{ pageSize: 3 }"
						              >
						                <span slot="range" slot-scope="text, record">
						                  <trend :flag="record.status === 0 ? 'up' : 'down'"> {{ text }}% </trend>
						                </span>
						              </a-table>
						            </div>
						          </a-card>
						        </a-col>
						        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
						          <a-card
						            class="antd-pro-pages-dashboard-analysis-salesCard"
						            :bordered="false"
						            title="用水性质占比"
						            :style="{ height: '100%' }"
						          >
						            <div>
						              <div>
						                <div id="container"></div>
						              </div>
						            </div>
						          </a-card>
						        </a-col>
						      </a-row>
						    </div>
					</div>
					
					<div class="pages">
						<a-pagination
						      show-size-changer
						      :default-current="3"
						      :total="500"
						      @showSizeChange="onShowSizeChange"
						   />
					</div>
			</div>
		</div>
	</div>
</template>

<script>	
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import { LocaleProvider } from 'antd';
  import { Chart } from '@antv/g2';
  import userinfo from "../../components/common/userinfo"
  const echardata = [
		{ year: '1月', sales: 38 },
		{ year: '2月', sales: 52 },
		{ year: '3月', sales: 61 },
		{ year: '4月', sales: 145 },
		{ year: '5月', sales: 48 },
		{ year: '6月', sales: 38 },
		{ year: '7月', sales: 38 },
		{ year: '8月', sales: 38 },
		{ year: '9月', sales: 21 },
		{ year: '10月', sales: 47 },
		{ year: '11月', sales: 58 },
		{ year: '12月', sales: 78 },
  ];
  
  const searchTableColumns = [
		{
		  dataIndex: 'index',
		  title: '序号',
		  width: 90
		},
		{
		  dataIndex: 'keyword',
		  title: '片区'
		},
		{
		  dataIndex: 'count',
		  title: '用户量(户)'
		},
		{
		  dataIndex: 'range',
		  title: '月涨幅',
		  align: 'right',
		  sorter: (a, b) => a.range - b.range,
		  scopedSlots: { customRender: 'range' }
		}
  ];
  
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
  		  title: '电池电压',
  		  dataIndex: 'lastindex',
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
			  lastindex:'正常'
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
			  lastindex:'正常'
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
			  lastindex:'正常'
		},
		{
			  key: '4',
			  name: '长丰园小区',
			  num:233,
			  money: '2356',
			  num2:223,
			  num3:233,
			  num4:'2.63mpa',
			  address: '异常',
			  lastindex:'正常'
		},
  ];
  export default {
      data () {
        return {
		  data,
		  columns,
		  pageSize: 20,
		  current: 4,
		  searchTableColumns,
		  searchData: [],
		  bgtitle:'',
		 }
	  },
      components: {userinfo},
      mounted(){
		  this.myEcharts1();
		  this.myEcharts2();
		  this.intpitdata();
		  this.initData();
		  console.log(this.$route.query.item)
		  this.bgtitle = this.$route.query.item.sname;
		  //this.myEcharts1();
		  
      },
	  watch: {
	      pageSize(val) {
	        console.log('pageSize', val);
	      },
	      current(val) {
	        console.log('current', val);
	      },
	  },
      methods:{
		  onShowSizeChange(current, pageSize) {
		      console.log(current, pageSize);
		  },
		  handleChange(value) {
			console.log(`selected ${value}`);
		  },
		  handleBlur() {
			console.log('blur');
		  },
		  handleFocus() {
			console.log('focus');
		  },
		  filterOption(input, option) {
			return (
			  option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
			);
		  },
		  getCurrentStyle(current, today) {
			const style = {};
			if (current.date() === 1) {
			  style.border = '1px solid #1890ff';
			  style.borderRadius = '50%';
			}
			return style;
		  },
		  
		  intpitdata(){
			  const chart = new Chart({
			    container: 'container',
			    autoFit: true,
			    height: 200,
			  });
			  chart.data(echardata);
			  chart.scale('sales', {
			    nice: true,
			  });
			  chart.tooltip({
			    showMarkers: false
			  });
			  chart.interaction('active-region');
			  chart.interval().position('year*sales');
			  chart.render();
		  },
		  initData(){
				this.searchData = []
				for (let i = 0; i < 10; i += 1) {
				  this.searchData.push({
					index: i + 1,
					keyword: `${i + 1}片区`,
					count: Math.floor(Math.random() * 10000),
					range: Math.floor(Math.random() * 10),
					status: 0
				  })
				}
		  },
		  
		  //图表
		  myEcharts1(){
		  		  var myChart = this.$echarts.init(document.getElementById('main1'));
		  		  var option = {
						title: {
							text: '漏损率统计分析',
							subtext: '漏损率（%）'
						},
						tooltip: {
							formatter: '{a} <br/>{b} : {c}%'
						},
						toolbox: {
							feature: {
								restore: {},
								saveAsImage: {}
							}
						},
						series: [
							{
								name: '数据指标',
								type: 'gauge',
								detail: {formatter: '{value}%'},
								data: [{value: 30, name: '漏损率'}]
							}
						]
					};
					setInterval(function () {
					    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
					    myChart.setOption(option, true);
					},2000);
		  		  myChart.setOption(option);
		  },
		  
		  //图表
		  myEcharts2(){
		  		  var myChart = this.$echarts.init(document.getElementById('main2'));
		  		  var option = {
					title: {
						text: '未来一周用水量变化',
						subtext: '用水量'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['最高用水量', '最低用水量']
					},
					toolbox: {
						show: true,
						feature: {
							dataZoom: {
								yAxisIndex: 'none'
							},
							dataView: {readOnly: false},
							magicType: {type: ['line', 'bar']},
							restore: {},
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							formatter: '{value} 吨'
						}
					},
					series: [
						{
							name: '最高',
							type: 'line',
							data: [7, 11, 10, 13, 6, 4, 9],
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
							name: '最低',
							type: 'line',
							data: [1, -2, 2, 5, 3, 2, 0],
							markPoint: {
								data: [
									{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
								]
							},
							markLine: {
								data: [
									{type: 'average', name: '平均值'},
									[{
										symbol: 'none',
										x: '90%',
										yAxis: 'max'
									}, {
										symbol: 'circle',
										label: {
											position: 'start',
											formatter: '最大值'
										},
										type: 'max',
										name: '最高点'
									}]
								]
							}
						}
					]
				};
		  		myChart.setOption(option);
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
	.youset{color: #fff;line-height: 40px;position:absolute;right: 32px;font-size: 15px;}
	.selects{margin-left: 30px;}
	
	.cardtable{background: #fff;overflow:hidden;padding: 0 20px;border-top: 1px solid #ddd;}
	.echarm{padding-bottom: 10px;}
	.echar{height: 310px;margin-top: 35px;}
	
	.mc_left{width:100%;background: rgba(255,255,255,0.82);padding:30px;padding-top: 10px;}
	.pb_tit{height: 56px;line-height: 56px; background:#fff;border-top-left-radius: 7px;border-top-right-radius: 7px;font-size: 18px;color: #333;padding-left: 30px; font-weight:bold;position: relative;}
	.cxbtn{height: 30px;line-height: 30px;width: 90px;text-align: center;cursor: pointer;color: #fff;background: #1890ff;border-radius: 4px;font-size: 16px;font-weight: normal;float: left;margin-left: 20px;margin-top: 14px;}
	.pages{text-align: center;margin-top: 20px;}
</style>