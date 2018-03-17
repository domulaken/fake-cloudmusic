<template>
  <div class="setting-messages-and-privacy">
    <h1>消息与隐私</h1>
    <general-list-mod
      :option-list="optionList"
    ></general-list-mod>
  </div>
</template>
<script>
import GeneralListMod from '../components/SettingMod_GeneralListMod.vue'
export default {
  name: 'MessageAndPrivacy',
  components: {GeneralListMod},
  data () {
    return {
      optionList: [
        {
          type: 'radio',
          name: '私信',
          shortDescription: '接收私信提醒',
          valueName: '',
          description: [
            {
              text: '所有人',
              value: 'receiveAll'
            },
            {
              text: '我关注的人',
              value: 'receiveMyFocusPeople'
            }
          ]
        },
        {
          name: '通知',
          type: 'checkbox',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '歌单被收藏',
              value: 'mySongListHasBeenCollected'
            },
            {
              text: '收到赞',
              value: 'getALike'
            },
            {
              text: '新粉丝',
              value: 'getANewFan'
            }
          ]
        },
        {
          type: 'checkbox',
          name: '推荐动态',
          shortDescription: '',
          valueName: [],
          description: [
            {
              text: '‘朋友’页显示推荐动态（关闭后，朋友页将不再出现新的推荐动态',
              value: 'showFriendActions'
            }
          ]
        },
        {
          type: 'radio',
          name: '我的听歌排行',
          shortDescription: '',
          valueName: '',
          description: [
            {
              text: '所有人可见',
              value: 'allCanSee'
            },
            {
              text: '我关注的人可见',
              value: 'myFocusPeopleCanSee'
            },
            {
              text: '仅自己可见',
              value: 'onlyMe'
            }
          ]
        }
      ]
    }
  }
}
</script>
