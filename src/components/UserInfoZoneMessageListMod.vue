<template>
  <ul class="user-info-zone-message-list" v-if="this.$props.number!==0" :class="{'auto-scroll-bar' : this.$props.number >10}">
    <template v-for="(item, index) in this.$props.content">
      <li :key="index">
        <section class="left-part">
          <div class="avatar"></div>
        </section>
        <section class="right-part">
          <p class="name">{{ item.name }}</p>
          <p class="date-time">{{ item.date }}</p>
          <p class="content">{{ item.content }}</p>
        </section>
      </li>
    </template>
  </ul>
  <no-messages v-else :messageType="this.messageType"></no-messages>
</template>
<script>
import NoMessages from '../components/UserInfoZoneMessageListMod_NoMessages.vue'
export default {
  name: 'UserInfoZoneMessageListMod',
  props: ['messageType', 'number', 'content'],
  components: {NoMessages},
  mounted () {},
  methods: {
    judgeScrollBarShow () {
      let ul = document.getElementsByClassName('user-info-zone-message-list')[0]
      let unitNumber = this.$props.content.length
      let totalHeight = 60 * unitNumber
      if (totalHeight > 600) {
        ul.style.overflowY = 'scroll'
        ul.style.height = '600px'
        console.log('totalHeight', totalHeight)
      } else {
        ul.style.overflowY = 'auto'
      }
    }
  }
}
</script>
<style lang="scss">
  .user-info-zone-message-list {
    $defaultHeight:60px;
    $defaultColor:#409EFF;
    $fatherWidth:100%;
    $topAndBottomPadding:10px;
    padding:0;
    list-style: none;
    width:100%;
    height:600px;
    .unread {
      list-style: disc;
    }
    li:hover {
      background-color: #eee;
    }
    li {
      display:flex;
      justify-content: space-between;
      .left-part{
        width:$defaultHeight;
        height:$defaultHeight;
        box-sizing: border-box;
        padding: $topAndBottomPadding;
        .avatar{
          background-color: $defaultColor;
          width:100%;
          height:100%;
        }
      }
      .right-part {
        box-sizing: border-box;
        padding: 10px 0;
        flex-grow: 1;
        height:$defaultHeight;
        position: relative;
        p{
          position: absolute;
          margin:0;
        }
        .name{
          left:0;
          top:$topAndBottomPadding;
        }
        .date-time{
          right:$topAndBottomPadding;
          top: $topAndBottomPadding;
        }
        .content{
          bottom:$topAndBottomPadding;
          left:0;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width:100%;
        }
      }
      .right-part:after{
        content:'';
        display:block;
        height:0;
        clear:both;
        visibility: hidden;
      }
    }
  }
  .no-scroll-bar {
    overflow: auto;
  }
  .auto-scroll-bar {
    height: 600px;
    overflow-y: scroll;
  }
</style>
