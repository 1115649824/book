<template>
  <div class="finequality" ref="fine">
    <div>
      <div class="finequality-top" ref="banner">
      <ul ref="box">
        <li v-for="(item,index) in slidingWindow" :key="index"><img :src="item.lunboUrl"/></li>
      </ul>
      <ol>
        <li v-for="i in 4" :key="i" :class="{active:i-1===index}"></li>
      </ol>
    </div>
      <newbook></newbook>
      <hotbook></hotbook>
      <recommendBook></recommendBook>
    </div>
  </div>
</template>

<script>
  import newbook from '../components/newbook'
  import hotbook from '../components/hotbook'
  import recommendBook from '../components/recommendBook'
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'finequality',
      mounted () {
          this.$nextTick(function () {
              clearInterval(this.timer)
              let box = this.$refs.box
              let banner = this.$refs.banner
              this.timer = setInterval(() => {
                this.index++
                box.style.transition = 'all .5s'
                box.style.transform = `translateX(${banner.offsetWidth * -this.index}px)`
            }, 2000)
          })
      },
      data () {
        return {
          slidingWindow: [],
          index: 0,
          timer: 0
        }
      },
      watch: {
        index (val) {
          if (val > 3) {
            this.$refs.box.style.transition = 'none'
            this.$refs.box.style.transform = `translateX(0)`
            this.index = 0
          }
        }
      },
      created () {
        this.$axios.get('/api/slidingWindow')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.slidingWindow = res.data
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
      components: {
        hotbook,
        newbook,
        recommendBook
      },
      methods: {
        _initScroll () {
          if (!this.sellerScroll) {
            this.sellerScroll = new IScroll(this.$refs.fine, {
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
  .finequality
    position absolute
    top 50px
    bottom 40px
    overflow hidden
  .finequality-top
    width 90%
    overflow hidden
    border-radius 25px 25px 10px 10px
    margin-left 15px
  .finequality-top > ul > li > img
    width 100%
    height 180px
    margin-top 15px
    margin-right 10px
  .finequality-top > ul
    width 1000%
  .finequality-top > ul > li
    width 10%
    float left
  .finequality-top > ol
    position absolute
    top 165px
    background-color #717276
    opacity 0.5
    height 30px
    width 90%
    border-radius 0px 0px 10px 10px
  .finequality-top > ol > li
    width 10px
    height 10px
    border solid 2px white
    margin: 7px 0px;
    margin-left 5px
    display: inline-block;
  .active
    background-color white
</style>
