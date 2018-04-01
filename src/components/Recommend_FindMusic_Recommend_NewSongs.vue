<template>
  <el-row>
    <h4 class="h4-type-1">{{ name }}<span>更多-></span></h4>
    <el-col :span="12" v-for="(item, index) in 10" :key="item">
      <div class="grid-content" :class="index%3===0 ? 'bg-purple-light' : ''">{{ item-1 }}</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'RecommendNewSongs',
  props: ['name']
}
</script>
