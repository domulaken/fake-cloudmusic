<template>
  <div class="setting-download">
    <h1>下载设置</h1>
    <ul class="music-quality-select-list">
      <h5>音质选择：</h5>
      <template v-for="(item, index) in musicQuality">
        <li class="music-quality-select-unit" :key="index">
          <span class="name">{{ item.name }}</span>
          <template v-for="(unit, index) in item.quality">
            <el-radio
              :key="index"
              :label="unit"
              v-model="item.valueName">{{ unit }}</el-radio>
          </template>
        </li>
      </template>
    </ul>
    <div class="download-directory pdl-40">
      <h5>下载目录：<span>默认将音乐文件下载在该文件夹中</span></h5>
      <span style="margin-right: 10px">F:/download</span>
      <el-button clain size="small">更改目录</el-button>
    </div>
    <div class="cache pdl-40">
      <h5>缓存设置</h5>
      <div class="cache-slide">
        <span class="hip">缓存最大占用</span>
        <el-slider
          v-model="cacheOccupy"
          show-input></el-slider>
        <el-button clain size="small">清除缓存</el-button>
      </div>
    </div>
    <general-list-mod
      :optionList="optionList"></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'SettingMod_DownloadSettings',
  components: {GeneralListMod},
  data () {
    return {
      musicQuality: [
        {
          name: '试听',
          quality: [
            '普通（128kbit/s）',
            '较高（128kbit/s）',
            '极高（128kbit/s）',
            '无损音质'
          ],
          defaultChoose: 2,
          valueName: '极高（128kbit/s）'
        },
        {
          name: '下载',
          quality: [
            '普通（128kbit/s）',
            '较高（128kbit/s）',
            '极高（128kbit/s）',
            '无损音质'
          ],
          defaultChoose: 2,
          valueName: '极高（128kbit/s）'
        }
      ],
      cacheOccupy: 10,
      optionList: [
        {
          type: 'radio',
          name: '音乐命名格式',
          shortDescription: '',
          valueName: '歌曲名-歌手',
          description: [
            {
              text: '歌曲名',
              value: 'songName'
            },
            {
              text: '歌手-歌曲名',
              value: 'singer-SongName'
            },
            {
              text: '歌曲名-歌手',
              value: 'songName-Singer'
            }
          ]
        },
        {
          type: 'radio',
          name: '文件智能分类',
          shortDescription: '',
          valueName: '不分文件夹',
          description: [
            {
              text: '不分文件夹',
              value: 'disabled'
            },
            {
              text: '按歌手分文件夹',
              value: 'singer'
            },
            {
              text: '按歌手\\专辑分文件夹',
              value: 'singer-Album'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .setting-download {
    .music-quality-select-list {
      .music-quality-select-unit{
        margin-bottom: 10px;
        span.name{
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
    .pdl-40{
      padding-left: 40px;
    }
    .cache-slide {
      display: flex;
      justify-content: flex-start;
      .el-slider {
        width:600px;
        margin-right: 40px;
      }
      span.hip {
        margin-right: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
