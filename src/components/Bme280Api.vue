<template>
  <div class="bme280api">
    <div class="container">
      <p class="date">{{ year }}/{{ month }}/{{ day }} {{hours}}:{{minutes}}.{{seconds}}</p>
      <div class="data280">
      <p class="data280-item temp-degree">{{tempData}}</p>
      <p class="data280-item press-hpa">{{pressureData}}</p>
      <p class="data280-item humid-percent">{{humidityData}}</p>
      </div>
    </div>

  </div>
</template>

<script>

const zeroPadding = (num, digit) => {
  return (Array(digit).join("0") + num).slice(-digit)
}

export default {
  name: 'Bme280Api',
  props: {
    msg: String,
    info: {},
    date: null
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
    year() {
      return this.date.getFullYear()
    },
    month() {
      return zeroPadding(this.date.getMonth() + 1, 2)
    },
    day() {
      return zeroPadding(this.date.getDate(), 2)
    },
    hours() {
      return zeroPadding(this.date.getHours(), 2)
    },
    minutes() {
      return zeroPadding(this.date.getMinutes(), 2)
    },
    seconds() {
      return zeroPadding(this.date.getSeconds(), 2)
    },
  },
  mounted: function(){
    console.log("Bme280")
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

.container {
  background-color: #3a4a5e;
  padding: 2%;
  margin-top: 30px;
}
 
 
.date {
  text-align: right;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  letter-spacing: .1em;
  margin: .0em 0;
  line-height: 1;
}
 
 
.data280 {
  display: flex;
}
 
 
.data280-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  height: 85px;
  position: relative;
  z-index: 1;
  padding: 0.5em;
  margin: 3px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 1;
  background-color: #48b883;
  box-sizing: border-box;
}
 
 
.data280-item:before {
  position: absolute;
  right: 5px;
  bottom: 1px;
  z-index: 1;
  color: #3a4a5e;
  font-family: 'Teko', sans-serif;
  font-size: 1.4rem;
  letter-spacing: .05em;
}
 
 
.temp-degree:before {
  content: "degree";
}
 
 
.press-hpa:before {
  content: "hPa";
}
 
 
.humid-percent:before {
  content: "%";
}

</style>
