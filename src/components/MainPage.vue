<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <left-nav></left-nav>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import UserInfoZone from '../components/UserInfoZone.vue'
import LeftNav from '../components/LeftNav.vue'
import TopNav from './RecommendFindMusicTopNavigationMod.vue'
export default {
  name: 'MainPage',
  components: {UserInfoZone, LeftNav, TopNav},
  mounted () {
    let currentRoute = '/mainPage/findMusic/recommend'
//    this.$router.push(currentRoute)
    console.log('mainpage', this.$router.history.current.name)
  }
}
</script>
