<template>
  <div class="setting-mod">
    <el-button size="large" class="back" type="text" @click="goToMainPage">
      <i class="el-icon-arrow-left"></i>
      设置
    </el-button>
    <el-tabs tab-position="left">
      <el-tab-pane  class="content" label="账号">
        <account></account>
      </el-tab-pane>
      <el-tab-pane class="content" label="常规">
        <common></common>
      </el-tab-pane>
      <el-tab-pane class="content" label="播放">
        <playing-set></playing-set>
      </el-tab-pane>
      <el-tab-pane class="content" label="消息与隐私">
        <message></message>
      </el-tab-pane>
      <el-tab-pane class="content" label="快捷键">
        <keyboard-shortcuts></keyboard-shortcuts>
      </el-tab-pane>
      <el-tab-pane class="content" label="下载设置">
        <download-settings></download-settings>
      </el-tab-pane>
      <el-tab-pane class="content" label="歌词">
        <lyric></lyric>
      </el-tab-pane>
      <el-tab-pane class="content" label="工具">
        <tools></tools>
      </el-tab-pane>
      <el-tab-pane class="content" label="关于××云音乐">
        <about-us></about-us>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Account from '../components/SettingMod_Account.vue'
import Common from '../components/SettingMod_Common.vue'
import PlayingSet from '../components/SettingMod_PlayingSet.vue'
import Message from '../components/SettingMod_MessagesAndPrivacy.vue'
import KeyboardShortcuts from '../components/SettingMod_KeyboardShortcuts.vue'
import DownloadSettings from '../components/SettingMod_DownloadSettings.vue'
import Lyric from '../components/SettingMod_Lyrics.vue'
import Tools from '../components/SettingMod_Tools.vue'
import AboutUs from '../components/SettingMod_AboutUs.vue'
export default {
  name: 'SettingMod',
  components: {Account, Common, PlayingSet, Message, KeyboardShortcuts, DownloadSettings, Lyric, Tools, AboutUs},
  methods: {
    goToMainPage () {
      this.$router.push('/mainPage/findMusic')
    }
  }
}
</script>
<style lang="scss">
  .setting-mod{
    display: flex;
    flex-direction: column;
    width:100%;
    .back{
      width:100%;
      text-align: left;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
      span{
        font-size: 1.22em;
        padding-left: 30px;
      }
    }
    .content {
      text-align: left;
      padding-left: 20px;
      h1{
        text-align: left;
      }
      ul {
        list-style-type:none;
        li{
          div{
            margin-bottom: 20px;
          }
          div:nth-last-child(1){
            margin-bottom:0
          }
        }
      }
      h5{
        span{
          color:#aaa;
          font-size: 10px;
        }
      }
    }
  }
</style>
