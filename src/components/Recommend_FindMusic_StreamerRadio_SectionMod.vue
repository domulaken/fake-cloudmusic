<template>
  <div class="section-part-mod">
    <h3>
      {{ title }}
      <div>
        <span :class="active===true ? 'active' : ''" @click="changeToFast">上升最快</span>
        <span class="slash">|</span>
        <span :class="active===false ? 'active' : ''" @click="changeToHot">最热电台</span>
      </div>
    </h3>
    <ul class="section-ul">
      <template v-for="(item, index) in radioShowList">
        <li :key="index" class="section-li">
          <div class="img-box">
            我是一张封面图
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="sub-title">{{ item.subTitle }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SectionPart',
  data () {
    return {
      title: '优秀新电台',
      radioShowList: [
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        },
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        },
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        },
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        },
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        },
        {
          title: 'I am a Title',
          subTitle: 'I am a subTitle'
        }
      ],
      active: true
    }
  },
  mounted () { },
  methods: {
    changeToHot () {}
  }
}
</script>
<style lang="scss">
  .section-part-mod {
    ul,li{
      padding: 0;
      margin: 0;
    }
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    width: 100%;
    h3 {
      border-bottom: 1px solid #eee;
      width: 100%;
      text-align: left;
      padding-bottom: 8px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        align-items: flex-end;
        .slash {
          $margin: 10px;
          margin-bottom: 2px;
          margin-left: $margin;
          margin-right: $margin;
        }
      }
      span {
        font-size: 12px;
        font-weight: normal;
        cursor: pointer;
        color: #bbb;
      }
      .active {
        color: #222;
      }
    }
    .section-ul{
      display: flex;
      justify-content: space-between;
      .section-li {
        margin-right: 2%;
        .img-box {
          width: 130px;
          height: 130px;
          border: 1px solid #eee;
        }
        p {
          font-size: 14px;
          margin: 0;
          text-align: left;
        }
        .title {
          $margin: 2px;
          margin-top: $margin * 2;
          margin-bottom: $margin;
        }
        .sub-title {
          font-size: 12px;
          color: #bbb;
        }
      }
      .section-li:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
</style>
