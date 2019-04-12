<template>
  <div id="app">
    <Bme280Api msg="API BME280" :info="info" :date="date"/>
  </div>
</template>

<script>
import Bme280Api from './components/Bme280Api.vue'
import axios from 'axios'
import { setInterval } from 'timers';

export default {
  name: 'app',
  components: {
    Bme280Api
  },
  data () {
    return {
      info: "",
      date: new Date()
    }
  },
  mounted () {
    this.getBme280()
    setInterval(() => this.getBme280(), 1000)
  },
  methods: {
    getBme280() {
    axios
      .get('http://localhost:3000/api/bme280')
      .then(response => (this.info = response.data));
    this.date = new Date()
    }
  },
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
