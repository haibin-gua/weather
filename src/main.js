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
  components: { App },
  template: '<App/>'
})
