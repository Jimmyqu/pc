import axios from 'axios'
import qs from "qs";

const base='http://api.politics.com/api/admin/'


const post = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    timeout: 5000,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

const get= (url,params={}) => {
  return axios({
    method: 'get',
    url: `${base}${url}?token=e232748d6db1fa8228753eed230bb7f3`,
    params,
    timeout: 5000,
  });
}

export default {
  get,
  post
}
