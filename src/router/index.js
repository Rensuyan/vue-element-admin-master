import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormFile from '@/components/FormFile'
import Layout from '@/components/layout'
import overview from '@/components/overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FormFile',
      name: 'FormFile',
      component: FormFile
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    }
  ]
})
