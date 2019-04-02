<template>
  <div id="app">
    <Bme280Api msg="API BME280" :info="info"/>
  </div>
</template>

<script>
import Bme280Api from './components/Bme280Api.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Bme280Api
  },
  data () {
    return {
      info: ""
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/bme280')
      .then(response => (this.info = response.data))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
