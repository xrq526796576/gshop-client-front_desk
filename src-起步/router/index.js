// 引入vue
import Vue from 'vue'
//引入Vue-router
import VueRouter from 'vue-router'
// 引入分装的路由 
import routes from '@/router/routes'
// 声明使用vue-router
Vue.use(VueRouter)
// 暴露Vuerouter
export default new VueRouter({
    routes
})