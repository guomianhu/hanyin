import Vue from 'vue'
import VueRouter from 'vue-router'

import Footer from '../components/common/Footer.vue'
import loginfooter from '../components/common/loginfooter.vue'
import Login from '../views/user/login.vue'
       
Vue.use(VueRouter)
  const routes = [
		{
		path: '/',
		redirect: '/login'
		},
		{
		  path: '/login',
		  component: Login,
		  meta:{
			title:'登录'
		  }
		},
		{
		  path: '/Footer',
		  component: Footer,
		  meta:{
			title:'底部'
		  }
		},
		{
		  path: '/loginfooter',
		  component: loginfooter,
		  meta:{
			title:'登录页底部'
		  }
		},
		{
		  path: '/Index',
		  component: resolve => require(['../views/index/Index.vue'], resolve),
		  meta:{
			title:'首页',
			requireAuth:true//是否需要登录
		  }
		},
		{
		  path: '/WaterProcess',
		  component: resolve => require(['../views/WaterProcess/WaterProcess.vue'], resolve),
		  meta:{
			title:'水厂工艺'
		  }
		},
		{
		  path: '/Gis',
		  component: resolve => require(['../views/Gis/Gis.vue'], resolve),
		  meta:{
			title:'Gis地图'
		  }
		},
		{
		  path: '/PlMonitoring',
		  component: resolve => require(['../views/PlMonitoring/PlMonitoring.vue'], resolve),
		  meta:{
			title:'管网监测'
		  }
		},
		{
		  path: '/VideoSurveillance',
		  component: resolve => require(['../views/VideoSurveillance/VideoSurveillance.vue'], resolve),
		  meta:{
			title:'视频监控'
		  }
		},
		{
		  path: '/videoShow',
		  component: resolve => require(['../views/VideoSurveillance/videoShow.vue'], resolve),
		  meta:{
			title:'视频详情'
		  }
		},
		{
		  path: '/Scada',
		  component: resolve => require(['../views/Scada/Scada.vue'], resolve),
		  meta:{
			title:'SCADA采集分析'
		  }
		},
		{
		  path: '/Remotetable',
		  component: resolve => require(['../views/Remotetable/Remotetable.vue'], resolve),
		  meta:{
			title:'远传表'
		  }
		},
		{
		  path: '/Pomanagement',
		  component: resolve => require(['../views/Pomanagement/Pomanagement.vue'], resolve),
		  meta:{
			title:'生产运行管理'
		  }
		},
		{
		  path: '/Pomanadetail',
		  component: resolve => require(['../views/Pomanagement/Pomanadetail.vue'], resolve),
		  meta:{
			title:'生产运行管理详情'
		  }
		},
		{
		  path: '/Dailymaintenance',
		  component: resolve => require(['../views/Dailymaintenance/Dailymaintenance.vue'], resolve),
		  meta:{
			title:'日常维护'
		  }
		},
		{
		  path: '/Datanalysis',
		  component: resolve => require(['../views/Datanalysis/Datanalysis.vue'], resolve),
		  meta:{
			title:'数据统计分析'
		  }
		},
		{
		  path: '/Companywebsite',
		  component: resolve => require(['../views/Companywebsite/Companywebsite.vue'], resolve),
		  meta:{
			title:'公司网站'
		  }
		},
		{
		  path: '/Serviceportal',
		  component: resolve => require(['../views/Serviceportal/Serviceportal.vue'], resolve),
		  meta:{
			title:'服务门户'
		  }
		},
		{
		  path: '/map',
		  component: resolve => require(['../views/map/map.vue'], resolve),
		  meta:{
			title:'应急预案'
		  }
		},
	]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
