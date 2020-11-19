import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import '@/mock/mockServer'

//这个是为了测试接口请求函数  后期也会使用这样的方式去使用
import * as API from '@/api'
// console.log(API)
// API.reqBannerList()
// API.reqGoodsList({})


Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
const mv = new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  mounted () {
    console.log(this)
  },
  el: '#app',
  render: h => h(App),
  router,
  store
})
console.log(mv);
console.dir(Vue);
console.log(Vue.prototype);

