import axios from 'axios'

export const _axios = axios.create( {
  baseURL: 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/'
})

const HttpService = {
  _axios
}

export default HttpService