<template>
  <div class="header">
    <section class="left-part">
      <div @click="goToMainPage" class="back-to-main-page">点我返回主页</div>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" size="mini" plain></el-button>
        <el-button type="primary" size="mini" plain><i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-input placeholder="请输入内容" class="input-with-select" size="mini">
        <el-button slot="append" icon="el-icon-search" type="primary" plain size="mini"></el-button>
      </el-input>
    </section>
    <section class="right-part">
      <!--用户常用功能popover-->
      <el-popover
        ref="userInfo"
        placement="bottom"
        title=""
        width="200"
        trigger="click"
        class="user-info-frame">
        <div class="wrap">
          <section class="user-profile">
            <div class="name-and-portrait">
              <div class="portrait">头像</div>
              <span>{{ this.user.name }}</span>
            </div>
            <el-button size="mini">签到</el-button>
          </section>
          <section class="user-social-data">
            <ul class="movements-attentions-fans-list">
              <li class="item movements">
                <span>0</span>
                <span>动态</span>
              </li>
              <li class="item attentions">
                <span>0</span>
                <span>关注</span>
              </li>
              <li class="item fans">
                <span>0</span>
                <span>粉丝</span>
              </li>
            </ul>
          </section>
          <section class="spend-zone">
            <el-menu class="el-menu-vertical-demo" style="border-right:0;border-bottom: 1px solid #eee">
              <el-menu-item index="1" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>vip会员</span>
                </span>
                <span>未订购<i class="el-icon-arrow-right"></i></span>
              </el-menu-item>
              <el-menu-item index="2" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>等级</span>
                </span>
                <span>LV6<i class="el-icon-arrow-right"></i></span>
              </el-menu-item>
              <el-menu-item index="3" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>商城</span>
                </span>
                <span><i class="el-icon-arrow-right"></i></span>
              </el-menu-item>
            </el-menu>
          </section>
          <section class="setting-zone">
            <el-menu class="el-menu-vertical-demo" style="border-right:0;border-bottom: 1px solid #eee">
              <el-menu-item index="1" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>个人信息设置</span>
                </span>
                <span><i class="el-icon-arrow-right"></i></span>
              </el-menu-item>
              <el-menu-item index="2" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>社交账号绑定</span>
                </span>
                <span><i class="el-icon-arrow-right"></i></span>
              </el-menu-item>
            </el-menu>
          </section>
          <section class="quit">
            <el-menu class="el-menu-vertical-demo" style="border-right:0;">
              <el-menu-item index="1" class="spend-zone-item">
                <span>
                  <i class="el-icon-location"></i>
                  <span>退出</span>
                </span>
                <span> </span>
              </el-menu-item>
            </el-menu>
          </section>
        </div>
      </el-popover>
      <el-popover
        ref="skin"
        placement="bottom"
        title=""
        width="200"
        trigger="click"
        >
        <el-tabs>
          <el-tab-pane label="主题">
            <ul class="skin-list">
              <li class="skin-unit black" style="background-color: black">black</li>
              <li class="skin-unit red" style="background-color: red">red</li>
              <li class="skin-unit pink" style="background-color: pink">pink</li>
              <li class="skin-unit blue" style="background-color: blue">blue</li>
              <li class="skin-unit green" style="background-color: green">green</li>
              <li class="skin-unit gold" style="background-color: gold">gold</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="纯色">
            <el-color-picker v-model="color"></el-color-picker>
          </el-tab-pane>
        </el-tabs>
      </el-popover>
      <el-popover
        ref="message"
        placement="bottom"
        title=""
        width="500"
        height="500"
        trigger="click">
        <div
          style="display:flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: center">
          <el-radio-group
            v-model="messageType"
            size="small"
            @change="handleClick(messageType)">
            <el-badge
              :value="this.messageGroup.message_AtMe.number===0 ? '' : this.messageGroup.message_AtMe.number"
              class="header-message-badge">
              <el-radio-button label="@我"></el-radio-button>
            </el-badge>
            <el-badge
              :value="this.messageGroup.message_PersonalMessage.number===0 ? '' : this.messageGroup.message_PersonalMessage.number"
              class="header-message-badge">
              <el-radio-button label="私信"></el-radio-button>
            </el-badge>
            <el-badge
              :value="this.messageGroup.message_Comment.number===0 ? '' : this.messageGroup.message_Comment.number"
              class="header-message-badge">
              <el-radio-button label="评论"></el-radio-button>
            </el-badge>
            <el-badge
              :value="this.messageGroup.message_SystemNotice.number===0 ? '' : this.messageGroup.message_SystemNotice.number"
              class="header-message-badge">
              <el-radio-button label="通知"></el-radio-button>
            </el-badge>
          </el-radio-group>
          <!--暂时废弃↓-->
          <el-button-group class="header-message-buttongroup">
            <el-badge :value="this.messageGroup.message_AtMe.number" class="header-message-badge">
              <el-button size="mini" type="primary">@我</el-button>
            </el-badge>
            <el-badge :value="this.messageGroup.message_PersonalMessage.number" class="header-message-badge">
              <el-button size="mini" type="primary" @click="handleClick($event)">私信</el-button>
            </el-badge>
            <el-badge :value="this.messageGroup.message_Comment.number" class="header-message-badge">
              <el-button size="mini" type="primary" @click="handleClick($event)">评论</el-button>
            </el-badge>
            <el-badge :value="this.messageGroup.message_SystemNotice.number" class="header-message-badge">
              <el-button size="mini" type="primary" @click="handleClick($event)">提醒</el-button>
            </el-badge>
          </el-button-group>
          <!--暂时废弃↑-->
          <!--用户messageList信息列表区-->
          <user-info-zone-message-list-mod
            :style="messageType==='@我' ? {display:'block'} : {display:'none'}"
            v-bind="messageGroup.message_AtMe">
          </user-info-zone-message-list-mod>
          <user-info-zone-message-list-mod
            :style="messageType==='私信' ? {display:'block'} : {display:'none'}"
            v-bind="messageGroup.message_PersonalMessage">
          </user-info-zone-message-list-mod>
          <user-info-zone-message-list-mod
            :style="messageType==='评论' ? {display:'block'} : {display:'none'}"
            v-bind="messageGroup.message_Comment">
          </user-info-zone-message-list-mod>
          <user-info-zone-message-list-mod
            :style="messageType==='通知' ? {display:'block'} : {display:'none'}"
            v-bind="messageGroup.message_SystemNotice">
          </user-info-zone-message-list-mod>
        </div>
      </el-popover>
      <!--用户常用功能列表-->
      <el-button type="text" v-popover:userInfo>{{ this.user.name }}<i class="el-icon-caret-bottom"></i></el-button>
      <el-button class="header-buttons" type="text" v-popover:skin><i class="el-icon-goods"></i></el-button>
      <el-badge :value="12" class="header-badge">
        <el-button class="header-buttons" type="text" v-popover:message>
          <i class="el-icon-message"></i>
        </el-button>
      </el-badge>
      <el-button class="header-buttons" type="text" @click="goToSettings()">
        <i class="el-icon-setting"></i>
      </el-button>
    </section>
  </div>
</template>

<script>
import UserInfoZoneMessageListMod from '../components/UserInfoZoneMessageListMod.vue'
export default {
  name: 'UserInfoZone',
  components: {UserInfoZoneMessageListMod},
  data () {
    return {
      user: {
        name: '用户'
      },
      activeName2: null,
      color: null,
      messageType: null,
      messageGroup: {
        message_AtMe: {
          messageType: 'AtMe',
          number: 5,
          content: [
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            }
          ]
        },
        message_PersonalMessage: {
          messageType: 'PersonalMessage',
          number: 12,
          content: [
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            },
            {
              name: '小粉红',
              date: '2018年2月27日',
              content: '我是一条信息'
            }
          ]
        },
        message_Comment: {
          messageType: 'Comment',
          number: 0,
          content: []
        },
        message_SystemNotice: {
          messageType: 'SystemNotice',
          number: 0,
          content: []
        }
      }
    }
  },
  methods: {
    handleClick (e) {},
    goToSettings () {
      this.$router.push('/setting')
    },
    goToMainPage () {
      this.$router.push('/mainPage/findMusic')
    }
  }
}
</script>

<style lang="scss">
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .input-with-select {
    width:400px;
  }
  .header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    .left-part {
      width:50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .back-to-main-page{
        cursor: pointer;
      }
    }
    .right-part{
      .header-buttons{
        width:50px;
      }
      .header-badge{
        sup{
          top: 8px;
          right: 28px;
        }
      }
      .header-message-badge{
        sup{
          z-index:10;
          right:28px;
        }
      }
    }
  }
  /*弹出框popover：用户常用功能栏*/
  .user-profile{
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: #eee;
  }
  .name-and-portrait{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .user-social-data {
    border-bottom: 1px solid #eee;
    .movements-attentions-fans-list{
      padding:0;
      display:flex;
      justify-content: space-between;
      .item{
        width:33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #eee;
      }
      .item:nth-last-child(1){
        border-right: 0;
      }
    }
  }
  .el-menu-vertical-demo{
    .spend-zone-item{
      padding:0 !important;
      display:flex;
      justify-content: space-between;
    }
  }
  /*弹出框popover：皮肤栏*/
  .skin-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .skin-unit{
      width:56px;
      height:56px;
      margin-top: 10px;
      margin-right: 10px;
      border:1px solid white;
      cursor: pointer;
      color:white;
    }
    .skin-unit:nth-child(3n){
      margin-right: 0;
    }
    .skin-unit:nth-last-child(1){
      margin-right: 0;
    }
    .skin-unit:hover{
      border:1px solid #eee;
    }
    .skin-unit.black:hover{
      box-shadow: 1px 1px 5px black;
    }
    .skin-unit.red:hover{
      box-shadow: 1px 1px 5px red;
    }
    .skin-unit.pink:hover{
      box-shadow: 1px 1px 5px pink;
    }
    .skin-unit.blue:hover{
      box-shadow: 1px 1px 5px blue;
    }
    .skin-unit.green:hover{
      box-shadow: 1px 1px 5px green;
    }
    .skin-unit.gold:hover{
      box-shadow: 1px 1px 5px gold;
    }
  }
  /*弹出框popover：信息栏*/
  .header-message-badge{
    sup{
      z-index: 10;
      right: 28px !important;
    }
  }
  .header-message-buttongroup{
    display: flex;
  }
</style>
