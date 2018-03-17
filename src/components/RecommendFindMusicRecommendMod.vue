<template>
  <div>
    <carousel></carousel>
    <recommend-song-list></recommend-song-list>
    <recommend-boardcasting :name="boardcasting[0]"></recommend-boardcasting>
    <recommend-new-songs :name="newSongs[0]"></recommend-new-songs>
    <recommend-boardcasting :name="MV[0]"></recommend-boardcasting>
    <recommend-new-songs :name="streamer[0]"></recommend-new-songs>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import RecommendSongList from './RecommendSongList.vue'
import RecommendBoardcasting from './RecommendBoardcasting.vue'
import RecommendNewSongs from './RecommendNewSongs.vue'
export default {
  components: {Carousel, RecommendSongList, RecommendBoardcasting, RecommendNewSongs},
  data () {
    return {
      boardcasting: ['独家放送'],
      MV: ['MV'],
      newSongs: ['最新歌曲'],
      streamer: ['主播电台']
    }
  }
}
</script>

<style scoped></style>
