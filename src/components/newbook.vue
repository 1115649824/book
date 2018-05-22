<template>
  <div class="newbook">
    <div class="newbook-nav">
      <span>最新书籍</span>
    </div>
    <div class="newbook-content" @click="See(newBook.url)">
      <div class="newbook-content-left">
        <img :src="newBook.image"/>
      </div>
      <div class="newbook-content-right">
        <p class="title">{{newBook.name}}</p>
        <p class="author">作者:{{newBook.author}}</p>
        <p class="info">{{newBook.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'newbook',
      data () {
        return {
          newBook: {}
        }
      },
      methods: {
        See (e) {
          window.location.href = e
        }
      },
      created () {
        this.$axios.get('/api/newBook')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.newBook = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
  .newbook
    border-bottom 1px solid black
    padding-bottom 10px
  .newbook-nav > span
    font-size 15px
    font-family '宋体'
    margin-left 15px
    font-weight bold
    display inline-block
    margin-top 20px
  .newbook-content
    display flex
    width 90%
    margin-left 15px
  .newbook-content-left
    flex 0 0 80px
    width 80px
  .newbook-content-left > img
    width 80px
    height 120px
  .newbook-content-right
    flex
  .title
    color #5A5F65
    margin-top 18px
    margin-left 15px
  .author
    color #848589
    font-size 15px
    margin-left 15px
    margin-top 18px
  .info
    color #848589
    font-size 15px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    height 20px
    width 220px
    margin-left 15px
    margin-top 18px
</style>
