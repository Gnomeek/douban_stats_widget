<template>
    <div class="v0_3" id="root_card"><span class="v0_4">今年{{verb}}过{{doubanStats["2022"][type]}} {{measure}} </span>
        <div class="v0_5"></div>
        <div class="v0_6"><span class="v0_7">总共{{verb}}过 {{doubanStats["total_data"][type]}} {{measure}} </span>
            <div class="v0_8">
                <div class="v0_9"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DoubanCardSmall',
  props: {
    doubanStats: Object,
    type: String,
    verb: String,
    measure: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v0_3 {
  width: 169px;
  height: 169px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), #60A95C;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  overflow: hidden;
}
.v0_4 {
  width: 141px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 16px;
  left: 14px;
  font-family: PuhuiTi-Light;
  line-height: 40px;
  /* font-weight: Light; */
  font-size: 35px;
  opacity: 1;
  text-align: left;
}
.v0_5 {
  width: 24px;
  /* background: url("../images/v0_5.png"); */
  opacity: 1;
  position: absolute;
  top: 112px;
  left: 14px;
  border: 1px solid rgba(255,255,255,0.48);
}

.v0_6 {
  width: 141px;
  height: 24px;
  /* background: url("../images/v0_6.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 131px;
  left: 14px;
  overflow: hidden;
}
.v0_7 {
  width: 105px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 2px;
  left: 0px;
  font-family: PuhuiTi-Bold;
  /* font-weight: SemiBold; */
  font-size: 13px;
  opacity: 1;
  text-align: left;
}
.v0_8 {
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 117px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
}
.v0_9 {
  width: 14px;
  height: 14px;
  background: url("../assets/douban_icon_small.svg");
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>
