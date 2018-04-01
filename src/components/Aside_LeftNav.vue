<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
        <h5>推荐</h5>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">发现音乐</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">私人FM</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">MV</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">朋友</span>
        </el-menu-item>
        <h5>我的音乐</h5>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">本地音乐</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">下载管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-menu"></i>
          <span slot="title">我的音乐云盘</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-menu"></i>
          <span slot="title">我的电台</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-menu"></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-submenu index="10">
          <template slot="title">
            <span>创建的歌单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="10-1">我喜欢的音乐</el-menu-item>
            <el-menu-item index="10-2">每日推荐(2018年2月21日)</el-menu-item>
            <el-menu-item index="10-3">初音未来</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <span>收藏的歌单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="11-1">我喜欢的音乐</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      index: null
    }
  },
  mounted () {
//    this.runAsync().then(
//      function (data) {
//        console.log('resolved')
//        console.log(data)
//      }
//    ).catch(
//      function (data) {
//        console.log('reject')
//        console.log(data)
//      }
//    )
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (index, indexPath) {
      switch (index) {
        case '1': {
          this.$router.push('/mainPage/findMusic/recommend')
          break
        }
        case '2': {
          this.$router.push('/mainPage/personalFM')
          break
        }
        default : {
          console.log('error')
        }
      }
    },
//    runAsync () {
//      let p = new Promise(function (resolve, reject) {
//        setTimeout(function () {
//          console.log('done')
//          let num = Math.ceil(Math.random() * 10)
//          if (num < 5) {
//            resolve(num)
//          } else {
//            reject('too big' + num)
//          }
//        }, 2000)
//      })
//      return p
//    }
  }
}
</script>

<style lang="scss">
  .tac{
    h5, li, span, i{
      font-size: 12px;
    }
    .el-menu-item {
      height: 36px;
      line-height: 36px;
      text-align: left;
    }
    .el-submenu__title {
      height: 36px;
      line-height: 36px;
      text-align: left;
      span:nth-child(1) {
        font-weight: bold;
      }
    }
    .el-submenu {
      .el-menu-item {
        padding-left: 20px !important;
      }
    }
    h5{
      margin-top:10px;
      margin-bottom: 10px;
      padding:0 20px;
      text-align: left;
    }
  }
</style>
