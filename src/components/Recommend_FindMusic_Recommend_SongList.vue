<template>
  <el-row>
    <h4 class="h4-type-1">推荐歌单<span>更多-></span></h4>
    <el-col :span="4" v-for="(item, index) in 8" :key="item" :offset="index%4===0 ? 0 :2" class="mgb-10">
      <el-card :body-style="{ padding: '0px' }">
        <h1>{{ item }}</h1>
        <div style="padding: 14px;">
          <span>{{ item }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .mgb-10{
    margin-bottom: 10px;
  }
  .h4-type-1{
    position: relative;
    text-align: left;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
  }
  .h4-type-1 span{
    float:right;
    cursor:pointer;
  }
  .h4-type-1 span:hover{
    color:#409EFF;
  }
</style>

<script>
export default {
  name: 'RecommendSongList',
  data () {
    return {
      default: 0,
      currentDate: new Date()
    }
  }
}
</script>
