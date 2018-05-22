<template>
  <div id="app">
    <div class="bookheader">
     <input type="text" placeholder="搜索"/>
    </div>
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/bookshelf">书架</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/bookcity">书城</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/finequality">精品</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      z-index 100
      border-top solid 1px #DBDBDB
      position absolute
      bottom 0
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size 14px
          color rgb(77, 85, 93)
          &.active
            color rgb(240, 20, 20)
    .bookheader
      width 100%
      height 50px
      background-color #FC6C61
      position relative
    .bookheader > input
      border-radius 50px
      border none
      text-align center
      height 30px
      position absolute
      left 25%
      top 15%
</style>
