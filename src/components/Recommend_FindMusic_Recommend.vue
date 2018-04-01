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
import Carousel from './Recommend_FindMusic_Recommend_Carousel.vue'
import RecommendSongList from './Recommend_FindMusic_Recommend_SongList.vue'
import RecommendBoardcasting from './Recommend_Boardcasting.vue'
import RecommendNewSongs from './Recommend_FindMusic_Recommend_NewSongs.vue'
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
