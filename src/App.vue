<template>
  <div id="app">
    <MainNavbar></MainNavbar>
    <router-view info="info"></router-view>
    <p>{{info}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { setInterval } from 'timers';
import MainNavbar from './components/MainNavbar.vue'


export default {
  name: 'app',
  components: {
    MainNavbar
  },
  data: function (){
    return {
      info: "",
      date: new Date()
    }
  },
  mounted (){
    this.getBme280()
    setInterval(() => this.getBme280(), 1000)
    console.log("!!!")
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
