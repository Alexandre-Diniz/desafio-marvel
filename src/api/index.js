import axios from 'axios'
import host from './host'
import keys from './keys'

export default api = axios.create({
  baseURL:host
})