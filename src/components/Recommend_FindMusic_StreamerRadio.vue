<template>
  <div class="streamer-radio">
    <type-list-mod></type-list-mod>
    <div class="i-wanna-sign-up">
      <i class="el-icon-warning"></i>
      我要做主播
    </div>
    <section-mod></section-mod>
  </div>
</template>
<script>
import TypeListMod from '../components/Recommend_FindMusic_StreamerRadio_TypeListMod.vue'
import SectionMod from '../components/Recommend_FindMusic_StreamerRadio_SectionMod.vue'
export default {
  name: 'StreamerRadio',
  components: {TypeListMod, SectionMod}
}
</script>
<style lang="scss">
  .streamer-radio {
    display: flex;
    flex-direction: column;
    align-items: center;
    .i-wanna-sign-up {
      align-self: flex-end;
      color: #E6A23C;
      font-size: 12px;
    }
  }
</style>
