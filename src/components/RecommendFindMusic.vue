<template>
  <div>
    <top-nav></top-nav>
  </div>
</template>
<script>
import TopNav from '../components/RecommendFindMusicTopNavigationMod.vue'
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
