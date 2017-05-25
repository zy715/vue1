import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Mint from 'mint-ui';

import index from './component/index.vue'
import zixun from './component/zixun.vue'
import me from './component/me.vue'
import abouts from './component/abouts.vue'
import zxmetial from './component/zxmetial.vue'
import jingzhun from './component/jingzhun.vue'
import gy from './component/gongyi.vue'
import meside from './component/meside.vue'


Vue.use(Mint);

Vue.use(VueResource)
Vue.use(VueRouter)



var route = [
	{path:'/',component:index},
	{path:'/index',component:index},
	{path:'/zixun',component:zixun},
	{path:'/me',component:me},
	{path:'/abouts',component:abouts},
	{path:'/zixun/:id',component:zxmetial},
	{path:'/jingzhun',component:jingzhun},
	{path:'/gy',component:gy},
	{path:'/meside',component:meside},
	
	
]
var router = new VueRouter ({
	routes:route
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
