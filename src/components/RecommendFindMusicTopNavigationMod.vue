<template>
  <div class="find-music-top-nav">
    <el-tabs class="top-nav-tab-header" v-model="activeName" @tab-click="handleClick(activeName)">
      <el-tab-pane label="个性推荐" name="recommend">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="songList">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="streamerRadio">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="billBoard"></el-tab-pane>
      <el-tab-pane label="歌手" name="singer"></el-tab-pane>
      <el-tab-pane label="最新音乐" name="newSong"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Recommend from './RecommendFindMusicRecommendMod.vue'
import SongList from './RecommendFindMusicSongList.vue'
export default {
  components: {Recommend, SongList},
  data () {
//    let currentRouteName = this.$router.history.current.name === 'findMusic' ? 'recommend' : this.$router.history.current.name
    let currentRouteName = 'recommend'
    return {
      activeName: currentRouteName
    }
  },
  mounted () {
    let path = '/mainPage/findMusic/' + this.activeName
    this.$router.push({path: path})
  },
  methods: {
    handleClick (value) {
      switch (value) {
        case 'recommend' :
          this.$router.push({path: '/mainPage/findMusic/recommend'})
          break
        case 'songList' :
          this.$router.push('/mainPage/findMusic/songList')
          break
        case 'streamerRadio' :
          this.$router.push('streamerRadio')
          break
        case 'billBoard' :
          this.$router.push('billBoard')
          break
        case 'singer' :
          this.$router.push('singer')
          break
        case 'newSong' :
          this.$router.push('newSong')
          break
        default :
          this.$router.push('recommend')
          break
      }
    }
  }
}
</script>
<style lang="scss">
  .find-music-top-nav{
    .el-tabs__header{
      display:flex;
      justify-content: center;
      border-bottom: 2px solid #eee;
    }
    .el-tabs__nav-wrap::after{
      background-color: transparent;
    }
  }
</style>
