import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
// import Pagination from '@/components/Pagination'
import '@/mock/mockServer'

//这个是为了测试接口请求函数  后期也会使用这样的方式去使用
import * as API from '@/api'
// console.log(API)
// API.reqBannerList()
// API.reqGoodsList({})
import { MessageBox, Message, Pagination } from 'element-ui';
Vue.use(Pagination)
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$msgbox = MessageBox; //消息盒子
Vue.prototype.$alert = MessageBox.alert; //弹出框
Vue.prototype.$message = Message; //提示信息


Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
Vue.component('Pagination', Pagination)


new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  el: '#app',
  render: h => h(App),
  router,
  store
})
