import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import $ from 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '../static/css/icon.css';  //icon图标

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '3ebdb3c7a684a4e64f39ddd306056522',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0',
})
  
import Echarts from 'echarts'
Vue.prototype.$echarts = Echarts
// Vue.use(Echarts)

import http from './libs/request.js'; //axios实例化后引入取名http
import service from './libs/api-url.js';

import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(ant)

// const G2 = require('@antv/g2')
// Vue.prototype.$G2 = G2

Vue.config.productionTip = false;

Vue.prototype.http = http
Vue.prototype.service = service
Vue.prototype.echarts = Echarts;
Vue.use(ElementUI, { size: 'small' });

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const requireAuth = to.meta.requireAuth
  // 判断该路由是否需要登录权限
  if (requireAuth) {
    // if (window.localStorage.getItem('login')) {
    //   next()
    // }
	if (store.state.user.token) {  // 通过vuex state获取当前的token是否存在
		next();
	}
	else {
      next('/login')
    }
  }
	else {
		next()  // 确保一定要有next()被调用
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('remote-script', {

    render: function (createElement) {
        var self = this;
        return createElement('script', {
            attrs: {
                type: 'text/javascript',
                src: this.src
            },
            on: {
                load: function (event) {
                    self.$emit('load', event);
                },
                error: function (event) {
                    self.$emit('error', event);
                },
                readystatechange: function (event) {
                    if (this.readyState == 'complete') {
                        self.$emit('load', event);
                    }
                }
            }
        });
    },

    props: {
        src: {
            type: String,
            required: true
        }
    }
});