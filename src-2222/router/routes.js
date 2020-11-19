import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login,
    // 用来判定底部是否隐藏
    meta:{
      isHide:true
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHide:true
    }
  },
  {
    path:'/search/:keyword?',
    component:Search,
    name:'search',
    // props: route => ({keyword:route.params.keyword,keyword1:route.query.keyword1})
  },
  {
    path:'/',
    redirect:'/home'
  }
]