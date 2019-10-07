import axios from 'axios'

export default {
  getBme280() {
    let result = {};
    axios.get('http://localhost:3000/api/bme280').then(response => (result.info = response.data));
    result.date = new Date()
    return result;
  }
}

