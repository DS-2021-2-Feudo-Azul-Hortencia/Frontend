import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backend-feudo-azul.herokuapp.com/',
  timeout: 15000
})

export default instance