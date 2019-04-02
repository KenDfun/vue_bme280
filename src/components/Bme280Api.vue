<template>
  <div class="bme280api">
    <h1>{{ msg }}</h1>
    <p>{{info}}</p>
    <p>温度：{{tempData}}℃</p>
    <p>気圧：{{pressureData}}HP</p>
    <p>湿度：{{humidityData}}%</p>
  </div>
</template>

<script>
export default {
  name: 'Bme280Api',
  props: {
    msg: String,
    info: {}
  },
  computed:{
    tempData: function(){
      return this.info.temperature;
    },
    pressureData: function(){
      return this.info.pressure;
    },
    humidityData: function(){
      return this.info.humidity;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
