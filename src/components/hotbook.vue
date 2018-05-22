<template>
  <div class="hotBook">
    <div class="hotBook-nav">
      <span>热销排行</span>
    </div>
    <div class="hotBook-content">
      <ul>
        <li v-for="(item,index) in hotBook" :key="index" @click="See(item.url)"><img :src="item.image"/><p>{{item.name}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'hotbook',
      data () {
          return {
            hotBook: []
          }
      },
      created () {
        this.$axios.get('/api/hotBook')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.hotBook = res.data
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
  .hotBook-nav > span
    font-size 15px
    font-family '宋体'
    margin-left 15px
    font-weight bold
    display inline-block
    margin-top 20px
  .hotBook
    border-bottom 1px solid black
    padding-bottom 10px
    width 100%
  .hotBook-content > ul > li > img
    width 60px
    height 80px
  .hotBook-content > ul
    width 100%
    height 260px
    margin-left 10px
  .hotBook-content > ul > li
    float left
    padding 5px 8px
  .hotBook-content > ul > li > p
    width 60px
    font-size 12px
</style>
