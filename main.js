import Vue from 'vue'
import App from './App'
import store from 'store/index.js'
Vue.config.productionTip = false
import cuCustom from 'colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

const API = require('./utils/api');
const wxRequst = require('./utils/wxRequest.js');
Vue.prototype.$api=API;
Vue.prototype.$wxRequest=wxRequst
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
