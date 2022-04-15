import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://backend-feudo-azul.herokuapp.com/',
  baseURL: 'http://localhost:3000/',
  timeout: 15000
})

export default instance