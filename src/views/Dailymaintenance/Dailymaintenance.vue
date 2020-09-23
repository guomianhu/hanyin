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
			<div class="youset">您当前位置：日常维护</div>
		</div>
		<div class="fix">
			<div class="mc_left">
			        <div class="pb_tit fix">
						<span class="left">查询条件</span>
						<div class="selects left">
							<a-select
								show-search
								placeholder="选择查询类型"
								option-filter-prop="children"
								style="width: 240px"
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
							<a-select
								show-search
								placeholder="选择查询类型"
								option-filter-prop="children"
								style="width: 240px"
								:filter-option="filterOption"
								@focus="handleFocus"
								@blur="handleBlur"
								@change="handleChange"
							  >
								<a-select-option value="类型一">类型一</a-select-option>
								<a-select-option value="类型二">类型二</a-select-option>
								<a-select-option value="类型三">类型三</a-select-option>
						  </a-select>
						</div>
						<div class="selects left">
							<a-select
								show-search
								placeholder="选择查询类型"
								option-filter-prop="children"
								style="width: 240px"
								:filter-option="filterOption"
								@focus="handleFocus"
								@blur="handleBlur"
								@change="handleChange"
							  >
								<a-select-option value="类型一">类型一</a-select-option>
								<a-select-option value="类型二">类型二</a-select-option>
								<a-select-option value="类型三">类型三</a-select-option>
								<a-select-option value="类型四">类型四</a-select-option>
								<a-select-option value="类型五">类型五</a-select-option>
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
			        <div class="fix tabdata">
						<div data-v-5391d79e="" class="ant-table-wrapper"><div data-v-5391d79e="" class="ant-table-wrapper"><div class="ant-spin-nested-loading"><div class="ant-spin-container"><div class="ant-table ant-table-scroll-position-left ant-table-small"><div class="ant-table-content"><!----><div class="ant-table-body"><table class=""><colgroup><col style="width: 120px; min-width: 120px;"><col><col><col><col><col></colgroup><thead class="ant-table-thead"><tr><th key="a1" class=""><div>收费方式</div></th><th key="a2" class=""><div>收费笔数</div></th><th key="a3" class=""><div>实收金额(元)</div></th><th key="a4" class=""><div>之前余额(元)</div></th><th key="a5" class=""><div>应收金额(元)</div></th><th key="a6" class=""><div>之后余额(元)</div></th></tr></thead><tbody class="ant-table-tbody"><tr class="ant-table-row ant-table-row-level-0" data-row-key="0"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->现金</td><td>4674</td><td>385.40</td><td>27717.66</td><td>8335.05</td><td>2544.31</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="1"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->微信公众号</td><td>1873</td><td>1687.00</td><td>34982.69</td><td>24942.12</td><td>32332.13</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="2"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->自助机</td><td>1842</td><td>13654.72</td><td>24444.93</td><td>23452.41</td><td>17349.39</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="3"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->扫码盒子</td><td>1299</td><td>46995.04</td><td>19886.69</td><td>38238.31</td><td>2727.93</td></tr><tr class="ant-table-row ant-table-row-level-0" data-row-key="4"><td><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span><!---->APP</td><td>4236</td><td>8968.53</td><td>35011.40</td><td>25503.11</td><td>25185.34</td></tr></tbody></table></div></div></div><ul unselectable="unselectable" class="ant-pagination mini ant-table-pagination"><li title="上一页" aria-disabled="true" class="ant-pagination-disabled ant-pagination-prev"><a class="ant-pagination-item-link"><i aria-label="图标: left" class="anticon anticon-left"><svg viewBox="64 64 896 896" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></i></a></li><li title="1" tabindex="0" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"><a>1</a></li><li title="下一页" aria-disabled="true" class="ant-pagination-disabled ant-pagination-next"><a class="ant-pagination-item-link"><i aria-label="图标: right" class="anticon anticon-right"><svg viewBox="64 64 896 896" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></a></li><!----></ul></div></div></div></div>
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
  const data = [
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
  ]
  export default {
      data () {
        return {
		  pageSize: 20,
		  current: 4,
		  searchTableColumns,
		  searchData: [],
		  bgtitle:'',
		 }
	  },
      components: {userinfo},
      mounted(){
		  this.intpitdata();
		  this.initData();
		  console.log(this.$route.query.item)
		  this.bgtitle = this.$route.query.item.sname
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
			  chart.data(data);
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
	
	
	.mc_left{width:100%;background: rgba(255,255,255,0.82);border-radius: 7px;padding-bottom:30px;margin-top: 30px;}
	.pb_tit{height: 56px;line-height: 56px; background:#fff;border-top-left-radius: 7px;border-top-right-radius: 7px;font-size: 18px;color: #333;padding-left: 30px; font-weight:bold;position: relative;}
	.cxbtn{height: 40px;line-height: 40px;width: 120px;text-align: center;cursor: pointer;color: #fff;background: #1890ff;border-radius: 4px;position: absolute;right: 30px;top: 8px;font-size: 16px;font-weight: normal;}
	.tabdata{margin:25px 30px;background: #fff;border-radius: 4px;}
	.pages{text-align: center;margin-top: 20px;}
</style>