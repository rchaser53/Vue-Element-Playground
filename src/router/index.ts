import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import AComponent from '@/components/A.vue'
import BComponent from '@/components/B.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hoge',
      name: 'HelloWorld',
      children: [
        {
          path: 'ratta',
          component: AComponent
        },
        {
          path: 'makimaki',
          component: BComponent
        }
      ],
      components: {
        default: HelloWorld
      }
    },
    // this is kinda 404
    {
      path: '/*',
      component: BComponent
    },
  ]
})
