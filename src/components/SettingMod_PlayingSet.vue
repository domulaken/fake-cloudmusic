<template>
  <div class="setting-playing-set">
    <h1>播放</h1>
    <general-list-mod
      :option-list="optionList"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_PlayingSet',
  components: {GeneralListMod},
  data () {
    return {
      optionList: [
        {
          type: 'radio',
          name: '播放列表',
          shortDescription: '单曲、节目',
          valueName: '',
          description: [
            {
              text: '双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）',
              value: 'replaceOldSongList'
            },
            {
              text: '双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）',
              value: 'addThisIntoOldSongList'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '自动播放',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '程序启动时自动播放',
              value: 'autoPlayWhenStart'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '播放进度',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '程序启动时记住上一次播放进度',
              value: 'continueToPlayWhenStart'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '效果',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '开启音乐淡入淡出（仅支持输入设备DirectSound）',
              value: 'useFadeIn'
            }
          ]
        },
        {
          type: 'select',
          name: '输出设备',
          shortDescription: '播放下一首歌时生效',
          valueName: '',
          description: [
            {
              text: 'DirectSound:主声音驱动程序',
              value: 'DirectSound'
            },
            {
              text: '默认',
              value: 'default'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.setting-playing-set {

}
</style>
