<template>
    <div class="bookshelf">
      <ul>
        <li v-for="(item,index) in hotBook" :key="index" @click="See(item.url)"><img :src="item.image"/></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'bookshelf',
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
.bookshelf
  position absolute
  top 50px
  bottom 40px
  overflow hidden
.bookshelf > ul
  margin-top 50px
  margin-left 20px
.bookshelf > ul > li
  float left
  padding 5px 5px
.bookshelf > ul > li > img
  width 80px
  height 100px
</style>
