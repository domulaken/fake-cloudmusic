<template>
  <div class="list-item-mod">
    <ul class="list-ul">
      <template v-for="item in 28">
        <li :key="item" class="list-item">
          <div class="card">
            <div class="img-box">
              <div class="listened-number">
                <i class="el-icon-service"></i>
                12121
              </div>
              <div class="album-creator">
                <i class="el-icon-star-off"></i>
                album-creator
              </div>
            </div>
            <div class="description">
              this is song-list {{ item }}
              this is song-list {{ item }}
              this is song-list {{ item }}
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list-item-mod'
}
</script>

<style lang="scss">
  $defaultWidth: 170px;
  $defaultMargin: 16px;
  .list-item-mod {
    width: 100%;
    ul,li{
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .list-ul {
      display:flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list-item {
        margin-right: $defaultMargin;
        margin-bottom: $defaultMargin;
        display: flex;
        .card {
          width: 100%;
          .img-box{
            $leftColor: rgba(255,255,255,0);
            $middleColor: rgba(128,128,128,0);
            $rightColor: rgba(0,0,0,.3);
            width: $defaultWidth;
            height: $defaultWidth;
            background-color: lightblue;
            position: relative;
            div{
              color:#ddd;
              font-size: 12px;
              box-sizing: border-box;
            }
            .listened-number{
              $listenedNumberHeight: 20px;
              position: absolute;
              top:0;
              right:0;
              width: 100%;
              text-align: right;
              background: linear-gradient(to right, $leftColor, $middleColor, $rightColor);
              height: $listenedNumberHeight;
              line-height: $listenedNumberHeight;
              padding-right: $listenedNumberHeight * 0.1;
            }
            .album-creator {
              $albumCreatorHeight: 32px;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: left;
              background: linear-gradient(to bottom, $middleColor 2%, $rightColor);
              height: $albumCreatorHeight;
              line-height: $albumCreatorHeight + 0.2 * $albumCreatorHeight;
              padding-left: $albumCreatorHeight * 0.1;
            }
          }
          .description {
            width: $defaultWidth;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
