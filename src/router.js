import Vue from 'vue'
import VueRouter from 'vue-router'

import Bme280Api from './components/Bme280Api.vue'
import Graph from './components/Graph.vue'
import axios from 'axios'

Vue.use(VueRouter)

let info = {"temperature":"29.55"}; 
function getBme(){

  info.temperature = "-3.0";
  axios.get('http://localhost:3000/api/bme280')
    .then(response => (info = response.data.temperature))
    .catch(()=>{
      info.temperature = "-5.0"
    });
  return info;
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Bme280Api,
      props: {
        date: new Date(),
        info: getBme()
      },
      mounted (){
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
    },
    {
      path: '/realtime',
      name: 'DATA',
      component: Bme280Api,
      props: {
        date: new Date(),
        info: {"temperature":"27.55"}
      }
    },
    {
      path: '/graph',
      name: 'GRAPH',
      component: Graph
    }
  ]
})
