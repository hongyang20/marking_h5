import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import total from '@/components/total'


Vue.use(Router)

export default new Router({
  base: '/marketing',
  mode: 'history',
  routes: [
    
    {
      path:'/index.html',
      name:'total',
      component:total
    }
  ]
})
