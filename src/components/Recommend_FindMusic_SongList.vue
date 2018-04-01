<template>
  <div class="find-music-song-list">
    <el-button size="mini" :v-popover='"popover1"'>
      全部歌单
      <i class="el-icon-arrow-down"></i>
    </el-button>
    <ul class="hot-label">
      <li>
        <a>热门标签：</a>
      </li>
      <template v-for="item in hotLabels">
        <li class="hot-label-item" :key="item">
          <a>{{ item }}</a>
        </li>
      </template>
    </ul>
    <list-item-mod></list-item-mod>
    <el-pagination
      layout="prev,pager,next"
      :total="totalPage"
      background
    ></el-pagination>
  </div>
</template>

<script>
import ListItemMod from './Recommend_FindMusic_SongList_ListItemMod.vue'
export default {
  name: 'SongList',
  components: {ListItemMod},
  data () {
    return {
      hotLabels: [
        '华语',
        '流行',
        '摇滚',
        '民谣',
        '电子',
        '轻音乐',
        '影视原声',
        'ACG',
        '怀旧',
        '治愈'
      ],
      totalPage: 1000
    }
  }
}
</script>

<style lang="scss">
  .find-music-song-list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .hot-label {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 20px;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      li {
        display: flex;
        align-items: center;
        height: 30px;
      }
      .hot-label-item{
        a {
          padding: 0 14px;
          border-right: 1px solid #ddd;
          height: auto;
          cursor: pointer;
        }
      }
      .hot-label-item:nth-last-child(1) a{
        border-right: 0;
      }
    }
    .el-pagination {
      align-self: center;
    }
  }
</style>
