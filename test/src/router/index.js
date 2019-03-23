import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import homeComponent from '@/pages/home'
import vipComponent from '@/pages/vip'
import personalCenterComponent from '@/pages/personalCenter'
import shareComponent from '@/pages/share'
import financialCircleComponent from '@/pages/financialCircle'




export default new Router({
  routes: [
    { path: '/',redirect:'/home'},
    {path:"/vip",component:vipComponent},
    {path:"/home",component:homeComponent},
    {path:"/personalCenter",component:personalCenterComponent},
    {path:"/share",component:shareComponent},
    {path:"/financialCircle",component:financialCircleComponent},
  ]
})
