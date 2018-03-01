import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import AComponent from '@/components/A.vue'
import BComponent from '@/components/B.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        A: AComponent,
        B: BComponent
      }
    }
  ]
})
