<template>
  <div class="streamer-radio-type-list">
    <ul class="list-ul">
      <template v-for="(item, index) in typeLists">
        <li :key="index" class="list-item">
          <div :class="item.img"></div>
          <p>{{ item.text }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'streamer-radio-type-list',
  data () {
    return {
      typeLists: [
        {
          img: 'el-icon-tickets',
          text: '排行榜'
        },
        {
          img: 'el-icon-document',
          text: '有声书'
        },
        {
          img: 'el-icon-bell',
          text: '知识技能'
        },
        {
          img: 'el-icon-sort',
          text: '商业财经'
        },
        {
          img: 'el-icon-edit-outline',
          text: '人文历史'
        },
        {
          img: 'el-icon-share',
          text: '外语世界'
        },
        {
          img: 'el-icon-phone-outline',
          text: '亲子宝贝'
        },
        {
          img: 'el-icon-refresh',
          text: '创作|翻唱'
        },
        {
          img: 'el-icon-edit',
          text: '音乐故事'
        },
        {
          img: 'el-icon-service',
          text: '3D|电子'
        },
        {
          img: 'el-icon-star-off',
          text: '相声曲艺'
        },
        {
          img: 'el-icon-view',
          text: '情感调频'
        },
        {
          img: 'el-icon-mobile-phone',
          text: '美女读物'
        },
        {
          img: 'el-icon-rank',
          text: '脱口秀'
        },
        {
          img: 'el-icon-upload',
          text: '广播剧'
        },
        {
          img: 'el-icon-printer',
          text: '二次元'
        },
        {
          img: 'el-icon-check',
          text: '明星做主播'
        },
        {
          img: 'el-icon-menu',
          text: '娱乐|影视'
        },
        {
          img: 'el-icon-picture-outline',
          text: '科技科学'
        },
        {
          img: 'el-icon-time',
          text: '校园|教育'
        },
        {
          img: 'el-icon-upload2',
          text: '旅途|城市'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .streamer-radio-type-list {

    ul, li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .list-ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list-item {
        width: 11%;
        font-size: 12px;
        $ulMargin: 16px;
        $myPadding: 4px;
        padding-top: $myPadding * 2;
        padding-bottom: $myPadding * 2;
        padding-left: $myPadding;
        padding-right: $myPadding;
        border-radius: $ulMargin / 4;
        div {
          font-size: 28px;
        }
        p {
          margin-top: $myPadding * 2;
          margin-bottom: 0;
          min-width: 60px;
        }
      }
      .list-item:nth-child(9n){
        margin-right: 0;
      }
      .list-item:hover {
        background-color: #eee;
        cursor: pointer;
      }
    }
  }
</style>
