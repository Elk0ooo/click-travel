import axios from 'axios'
import { env } from '../config/env.dev'
// uncomment the next line to switch to production
// (and comment the line above - env.dev)
// import { env } from '../config/env.prod'

export default axios.create({
  baseURL: env.api,
  timeout: 10 * 60 * 1000,
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
