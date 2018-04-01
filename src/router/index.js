import Vue from 'vue'
import Router from 'vue-router'

// Header :包含在main-page中
import MainPage from '../components/MainPage.vue'

import Recommend from '../components/Recommend_FindMusic_Recommend.vue'
import SongList from '../components/Recommend_FindMusic_SongList.vue'
import Setting from '../components/SettingMod.vue'
import Container from '../components/Container.vue'

import PersonalFM from '../components/Recommend_PersonalFM.vue'
import FindMusic from '../components/Recommend_FindMusic.vue'
import StreamerRadio from '../components/Recommend_FindMusic_StreamerRadio.vue'

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
            },
            {
              path: 'StreamerRadio',
              name: 'StreamerRadio',
              component: StreamerRadio
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
