import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://backend-feudo-azul.herokuapp.com/',
  baseURL: 'http://192.168.1.67:3003',
  timeout: 15000
})

export default instance