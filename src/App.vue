<template>
  <div id="app">
    <router-view to="/"> </router-view>
    <!-- <movieCard /> -->
    <!-- <div id="nav">
      <router-link to="/movieCard">movieCard</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
// <script>
// // @ is an alias to /src
// import movieCard from '@/views/MovieCard.vue'

// export default {
//   name: 'App',
//   components: {
//     movieCard
//   },
// };
// </script>
<style>
@font-face {
  font-family: 'PuhuiTi-Light';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_4s3a9r793qu.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_4s3a9r793qu.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_4s3a9r793qu.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_4s3a9r793qu.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_4s3a9r793qu.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_4s3a9r793qu.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}
@font-face {
  font-family: 'PuhuiTi-Bold';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_qq0mab8155c.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_qq0mab8155c.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_qq0mab8155c.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_qq0mab8155c.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_qq0mab8155c.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_qq0mab8155c.svg#Alibaba-PuHuiTi-Bold') format('svg'); /* iOS 4.1- */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
