<template>
  <div class="message-mod-no-messages">
    暂无{{ type }}内容
  </div>
</template>
<script>
export default {
  name: 'UserInfoMessageListMod_NoMessages',
  props: ['messageType'],
  data () {
    return {
      type: null
    }
  },
  mounted () {
    switch (this.$props.messageType) {
      case 'AtMe' :
        this.type = '@我'
        break
      case 'PersonalMessage' :
        this.type = '私信'
        break
      case 'Comment' :
        this.type = '评论'
        break
      case 'SystemNotice' :
        this.type = '通知'
        break
      default :
        this.type = ''
    }
  }
}
</script>
<style lang="scss">
  .message-mod-no-messages {
    height:600px;
    line-height: 600px;
  }
</style>
