<template>
  <div class="setting-common">
    <h1>常规</h1>
    <general-list-mod
      :optionList="optionList"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_Common',
  components: {GeneralListMod},
  data () {
    return {
      optionList: [
        {
          type: 'select',
          name: '字体选择',
          shortDescription: '如果字体显示不清晰，请在控制面板-字体设置中启用系统clearType',
          valueName: '',
          description: [
            {
              text: '黑体',
              value: 'black'
            },
            {
              text: '默认',
              value: 'default'
            }
          ]
        },
        {
          name: '启动',
          type: 'checkbox',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '开机自动运行',
              value: 'startWithStartup'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '关联',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '将××云音乐设为默认播放器',
              value: 'setAsDefaultPlayer'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '动画',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '禁用动画效果（减少部分资源占用）',
              value: 'disableAnimate'
            }
          ]
        },
        {
          type: 'checkbox',
          name: 'GPU加速',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '禁用GPU加速（关闭图形加速，如果单曲播放页或者MV播放黑屏请勾选）',
              value: 'disableGPU'
            }
          ]
        },
        {
          type: 'radio',
          name: '关闭主面板',
          shortDescription: '',
          valueName: '',
          description: [
            {
              text: '最小化到系统托盘',
              value: 'goToTrayAreaWhenClose'
            },
            {
              text: '退出云音乐',
              value: 'exitWhenClose'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .setting-common { }
</style>
