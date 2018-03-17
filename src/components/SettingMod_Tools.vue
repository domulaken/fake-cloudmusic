<template>
  <div class="setting-tools">
    <h1>工具</h1>
    <general-list-mod
      :optionList="optionList"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_Tools',
  components: {GeneralListMod},
  data () {
    return {
      optionList: [
        {
          type: 'radio',
          name: 'HTTP代理',
          shortDescription: '',
          valueName: '不使用代理',
          description: [
            {
              text: '不使用代理',
              value: 'disable'
            },
            {
              text: '使用IE代理设置',
              value: 'useIE'
            },
            {
              text: '自定义代理',
              value: 'useHobbit'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '音乐云盘设置',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '本地音乐添加到歌单后，将文件上传至云盘，可多端同步歌单，播放下载',
              value: 'autoUploadToCloud'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .setting-tools{ }
</style>
