// 引入需要跳转的页面
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// 暴露注册路由
export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        props (route) {
            return {
                keyword: route.params.keyword,
                keyword1: route.query.keyword1
            }
        },
        // props: route => ({
        //     keyword:route.params.keyword,
        //     keyword1:route.query.keyword1
        //   })
    },
    {
        path: '/',
        redirect: '/home'
    },
]