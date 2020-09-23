import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import { Message, Loading } from 'element-ui';
Vue.prototype.$qs = qs;
Vue.prototype.$baseUrl = process.env.baseUrl;
Vue.prototype.$appUrl = process.env.appUrl;

/*http请求加载动画*/
var loading = '';
//不显示加载动画的请求url
const hideLoadingUrl = [
	'login',
	'getRealtimeDataBySiteCode1', //实时数据
	'getWarningByCompanyCode', //警报
	'getWarningByCondition', //警报列表,首页
	'StatisticalAnalysis',
	// 'selectAreasSite',
	'selectDMAInfo',
	'Overview',
	'getRealtimeDataBySiteCode2',
	'getPipelineInfo' //管线
	// 'selectDMADatas',  //单个dma数据
];

//加载loading
function startLoading() {
	loading = Loading.service({
		lock: true,
		text: '拼命加载中……',
		spinner: 'el-icon-loading',
		background: 'rgba(0, 0, 0, 0.7)'
	});
}

//关闭loading
function endLoading() {
	if (loading != '') {
		loading.close();
	}
}

//删除cookie
export function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = this.getCookie(name);
	if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}

//删除站点下Cookie
export function delSiteCookie() {
	delCookie(amap_ver);
	delCookie(guid);
	delCookie(key);
}

//显示加载动画
export function showFullScreenLoading(configs) {
	configs.url.replace(configs.baseURL, '');
	var index = configs.url.lastIndexOf('/');
	var url = configs.url.substring(index + 1, configs.url.length);
	var item = hideLoadingUrl.findIndex((f) => f == url);
	if (item == -1) {
		startLoading();
	} else {
		return;
	}
}
//关闭加载动画
export function tryHideFullScreenLoading() {
	endLoading();
}

//创建axios实例
var service = axios.create({
	baseURL: Vue.prototype.$baseUrl,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	},
	dataType: 'json'
});

// 请求拦截器
service.interceptors.request.use(
	(configs) => {
		showFullScreenLoading(configs);
		return configs;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		tryHideFullScreenLoading();
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

//封装http请求
export default {
	get(url, param) {
		return new Promise((cback, reject) => {
			service({
				method: 'get',
				url,
				params: param,
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8'
			})
				.then((res) => {
					var res_code = res.status.toString();
					cback(res);
				})
				.catch((err) => {
					reject(err.response);
					Message.error('网络异常');
				});
		});
	},

	post(url, data, responseType = '') {
		return new Promise((cback, reject) => {
			service({
				method: 'post',
				url,
				data: data,
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8', // 解决415错误
				responseType: responseType
			})
				.then((res) => {
					var res_code = res.status.toString();
					cback(res);
				})
				.catch((err) => {
					reject(err.response);
					Message.error('网络异常');
				});
		});
	}
};
