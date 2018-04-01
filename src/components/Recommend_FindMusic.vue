<template>
  <div>
    <top-nav></top-nav>
  </div>
</template>
<script>
import TopNav from './Recommend_FindMusic_A_TopNavigationMod.vue'
export default {
  name: 'findMusic',
  components: {TopNav},
  mounted () {
    this.$nextTick(function () {
      this.$router.push('/mainPage/findMusic/recommend')
    })
  }
}
</script>
