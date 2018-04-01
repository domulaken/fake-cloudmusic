<template>
  <el-row>
    <h4 class="h4-type-1">{{ name }}<span>更多-></span></h4>
    <el-col :span="6" v-for="(item, index) in 3" :key="item" :offset="index%3===0 ? 0 :2" class="mgb-10">
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

<script>
export default {
  name: 'RecommendBoradcasting',
  props: ['name'],
  data () {
    return {
      default: 0,
      currentDate: new Date()
    }
  }
}
</script>

<style scoped></style>
