<template>
  <div class="setting-keyboard-shortcuts">
    <h1>快捷键</h1>
    <ul class="keyboard-shortcuts-list">
      <li class="head">
        <span class="half-width">功能说明</span>
        <span class="green">快捷键</span>
        <span>全局快捷键</span>
      </li>
      <template v-for="(item, index) in keyboardShortcutsItems">
        <li class="keyboard-shortcuts-unit" :key="index">
          <div class="red half-width">{{ item.first }}</div>
          <el-input class="blue" :placeholder="item.second"></el-input>
          <el-input class="green" :placeholder="item.second"></el-input>
        </li>
      </template>
    </ul>
    <general-list-mod
      :optionList="optionList"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_KeyboardShortcuts',
  components: {GeneralListMod},
  data () {
    return {
      keyboardShortcutsItems: [
        {
          first: '播放/暂停',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '上一首',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '下一首',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '音量加',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '音量减',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: 'mini/完整模式',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '喜欢歌曲',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        },
        {
          first: '打开/关闭歌词',
          second: '就算设置了也不可用...',
          third: '就算设置了也不可用...'
        }
      ],
      optionList: [
        {
          type: 'checkbox',
          name: '全局',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '启用全局快捷键（在后台也能响应）',
              value: 'globalReaction'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .setting-keyboard-shortcuts{
    $itemHeight:40px;
    $itemWidth: 200px;
    .keyboard-shortcuts-list {
      li{
        display: flex;
        justify-content: flex-start;
        *{
          width: $itemWidth;
          height: $itemHeight;
        }
        .red{
          text-align: left;
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        .green{
          margin-left: 20px;
        }
        .blue{  }
        span{
          font-size: 14px;
          display:flex;
          align-items: center;
          text-align: left;
          color: #aaa;
        }
        .half-width{
          width: $itemWidth / 2;
          margin-right: 20px;
        }
      }
      .keyboard-shortcuts-unit{  }
    }
  }
</style>
