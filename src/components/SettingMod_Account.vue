<template>
  <div class="setting-account">
    <h1>账号</h1>
    <div class="bind-other-account">
      <i class="el-icon-search"></i>
      <i class="el-icon-search"></i>
      <i class="el-icon-search"></i>
      <i class="el-icon-search"></i>
      <i class="el-icon-search"></i>
      <span>绑定账号</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="button-zone">
      <el-button plain size="small">修改个人信息</el-button>
      <el-button plain size="small">寻找并邀请好友</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SettingMod_Account'
}
</script>
<style lang="scss">
  .setting-account {
    .bind-other-account {
      cursor: pointer;
      margin: 10px 0;
      text-align: left;
    }
  }
</style>
