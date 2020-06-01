// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/border.css'
import './assets/reset.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'
import  VueTouch from 'vue-touch'
import axios from 'axios'
import store from '../src/vuex/store'  //引入store.js
import moment from 'moment' // 导入文件
moment.locale('zh-cn')//moment汉化
 
Vue.prototype.$moment = moment //赋值使用 就是调用一下
Vue.prototype.$http = axios.create({
  baseURL:'https://free-api.heweather.net/s6/'
})
Vue.use(VueTouch,{name:'v-touch'})
VueTouch.config.swipe = {
  threshold:600  //设置左右滑动的距离
}
Vue.prototype.$echarts = echarts

Vue.use(Vant);

//导入rem的js，动态的设置了，不同屏幕的html根元素的font-size
//1rem根据当前屏幕html font-size进行转换
import 'lib-flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//相当于store:store,注册后，子组件中可以使用this.$store访问
  components: { App },
  template: '<App/>'
})
