import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue');
const Hot = () => import('../views/home/hot/Hot.vue');
const Spot = () => import('../views/home/spot/Spot.vue');
const Modifier = () => import('../views/home/modifier/Modifier.vue');
const Profile = () => import('../views/home/profile/Profile.vue');





const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: 'hot' },
      { path: 'hot', component: Hot },
      { path: 'spot', component: Spot },
      { path: 'modifier', component: Modifier },
      { path: 'profile', component: Profile }
    ]
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router