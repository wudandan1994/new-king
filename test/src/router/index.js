import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import homeComponent from '@/pages/home'
import cardCenterComponent from '@/pages/cardCenter'
import consultationComponent from '@/pages/consultation'
import receivablesComponent from '@/pages/receivables'
import rateComponent from '@/pages/rate'
import vipComponent from '@/pages/vip'
import personalCenterComponent from '@/pages/personalCenter'
import shareComponent from '@/pages/share'
import financialCircleComponent from '@/pages/financialCircle'
import realNameComponent from '@/pages/realName'






export default new Router({
  routes: [
    { path: '/',redirect:'/home'},
    {path:"/vip",component:vipComponent},
    {path:"/home",component:homeComponent},
    {path:"/home/cardCenter",component:cardCenterComponent,},
    {path:"/home/receivables",component:receivablesComponent,},
    {path:"/home/receivables/rate",component:rateComponent,},
    {path:"/home/cardCenter/consultation",component:consultationComponent,},
    {path:"/personalCenter",component:personalCenterComponent},
    {path:"/share",component:shareComponent},
    {path:"/financialCircle",component:financialCircleComponent},
    {path:"/vip/realName",component:realNameComponent},

  ]
})
