import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LeftNav from '@/components/LeftNav'
import TopNav from '../components/RecommendFindMusicTopNavigationMod.vue'
import Recommend from '../components/RecommendFindMusicRecommendMod.vue'
import SongList from '../components/RecommendFindMusicSongList.vue'
import Setting from '../components/SettingMod.vue'
import Container from '../components/Container.vue'
import MainPage from '../components/MainPage.vue'
import UserInfoZone from '../components/UserInfoZone.vue'
import PersonalFM from '../components/RecommendPersonalFM.vue'
import FindMusic from '../components/RecommendFindMusic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path: '/',
    //   name: 'LeftNav',
    //   component: LeftNav
    // },
    // {
    //   path: '/',
    //   name: 'TopNav',
    //   component: TopNav
    // }
    {
      path: '/mainPage',
      name: 'mainPage',
      components: {
        default: MainPage
      },
      children: [
        {
          path: 'findMusic',
          name: 'findMusic',
          component: FindMusic,
          children: [
            {
              path: 'recommend',
              name: 'recommend',
              component: Recommend
            },
            {
              path: 'songList',
              name: 'songList',
              component: SongList
            }
          ]
        },
        {
          path: 'personalFM',
          name: 'personalFM',
          component: PersonalFM
        }
      ]
    },
    // {
    //   path: '/mainPage/findMusic',
    //   name: 'findMusic',
    //   components: {
    //     default: MainPage
    //   },
    //   children: [
    //     {
    //       path: 'recommend',
    //       name: 'recommend',
    //       component: Recommend
    //     },
    //     {
    //       path: 'songList',
    //       name: 'songList',
    //       component: SongList
    //     }
    //   ]
    // },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/container',
      name: 'container',
      component: Container
    }
  ]
})
