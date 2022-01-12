<template>
  <div class="home">
    <DoubanCardSmall :doubanStats="doubanStats" :type="type" :verb="verb" :measure="measure" />
  </div>
</template>

<script>
// @ is an alias to /src
import DoubanCardSmall from '@/components/DoubanCardSmall.vue'

import axios from 'axios';


export default {
  name: 'App',
  components: {
    DoubanCardSmall
  },
  
  data() {
    return {
      doubanStats: {},
      type: "movie",
      verb: "看",
      measure: "部",
    };
  },

  mounted() {
    const verb_mapping = {"movie": "看", "book": "读", "music": "听"}
    const measure_mapping = {"movie": "部", "book": "本", "music": "张"}
    // this.size = this.$route.query.size
    // if (this.size == undefined) {
    //   this.size = "small"
    // }
    this.type = this.$route.query.type
    if (this.type == undefined) {
      this.type = "movie"
    }
    this.verb = verb_mapping[this.type]
    this.measure = measure_mapping[this.type]
    
    axios
      .get(`https://qce78q.api.cloudendpoint.cn/getDoubanStats?id=${this.$route.query.id}`)
      .then(response => {
        this.doubanStats = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
};
</script>
