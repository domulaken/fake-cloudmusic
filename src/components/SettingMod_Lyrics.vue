<template>
  <div class="setting-lyrics">
    <h1>歌词</h1>
    <general-list-mod
      :optionList="optionList1"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_Lyrics',
  components: {GeneralListMod},
  data () {
    return {
      optionList1: [
        {
          type: 'radio',
          name: '类型',
          shortDescription: '',
          valueName: '桌面歌词',
          description: [
            {
              text: '桌面歌词',
              value: 'lyricInDesktop'
            },
            {
              text: '软件内歌词',
              value: 'lyricInSoftware'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '启用',
          shortDescription: '',
          valueName: ['usesAutoTranslate'],
          description: [
            {
              text: '启用歌词',
              value: 'useLyric'
            },
            {
              text: '外文歌词显示翻译',
              value: 'usesAutoTranslate'
            }
          ]
        },
        {
          type: 'select',
          name: '调整字号',
          shortDescription: '',
          valueName: '36',
          description: [
            {
              text: '36',
              value: '36'
            },
            {
              text: '40',
              value: '40'
            }
          ]
        },
        {
          type: 'select',
          name: '字体选择',
          shortDescription: '',
          valueName: '微软雅黑',
          description: [
            {
              text: '微软雅黑',
              value: 'MSYahei'
            },
            {
              text: '宋体',
              value: 'song'
            }
          ]
        },
        {
          type: 'radio',
          name: '更改单双行',
          shortDescription: '',
          valueName: '单行',
          description: [
            {
              text: '单行',
              value: 'singleLine'
            },
            {
              text: '双行',
              value: 'doubleLine'
            }
          ]
        },
        {
          type: 'select',
          name: '更改对齐方式',
          shortDescription: '',
          valueName: '居中',
          description: [
            {
              text: '左对齐',
              value: 'flexStart'
            },
            {
              text: '居中',
              value: 'center'
            },
            {
              text: '右对齐',
              value: 'flexEnd'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .setting-lyrics{}
</style>
