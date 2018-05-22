<template>
    <div class="recommendBook">
      <div class="recommendBook-nav">
        <span>主编推荐</span>
      </div>
      <div class="recommendBook-content">
        <ul>
          <li v-for="(item,index) in recommendBook" :key="index" @click="See(item.url)"><img :src="item.image"/><p>{{item.name}}</p></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'recommendBook',
      data () {
          return {
            recommendBook: []
          }
      },
      created () {
        this.$axios.get('/api/recommendBook')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.recommendBook = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      },
    methods: {
      See (e) {
        window.location.href = e
      }
    }
    }
</script>

<style lang="stylus" scoped>
  .recommendBook-nav > span
    font-size 15px
    font-family '宋体'
    margin-left 15px
    font-weight bold
    display inline-block
    margin-top 20px
  .recommendBook
    width 100%
  .recommendBook-content > ul > li > img
    width 60px
    height 80px
  .recommendBook-content > ul
    width 100%
    height 260px
    margin-left 10px
  .recommendBook-content > ul > li
    float left
    padding 5px 8px
  .recommendBook-content > ul > li > p
    width 60px
    font-size 12px
</style>
