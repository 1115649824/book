<template>
    <div class="bookcity" ref="city">
      <ul>
        <li v-for="(item,index) in bookcity" :key="index"><img :src="item.image"/></li>
      </ul>
    </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'bookcity',
      data () {
          return {
            bookcity: []
          }
      },
      created () {
        this.$axios.get('/api/bookcity')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.bookcity = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      },
      beforeUpdate () {
        this.$nextTick(() => {
          this._initScroll()
        })
      },
      methods: {
        _initScroll () {
          if (!this.sellerScroll) {
            this.sellerScroll = new IScroll(this.$refs.city, {
              click: true
            })
          } else {
            this.sellerScroll.refresh()
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
.bookcity
  position absolute
  top 50px
  bottom 40px
  overflow hidden
.bookcity > ul
  display flex
  flex-wrap wrap
.bookcity > ul > li
  flex 1
.bookcity > ul > li > img
  width 150px
  height 100px
  padding 5px 5px
</style>
