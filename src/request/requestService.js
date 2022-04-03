import axios from 'axios';
import store from '@/store';
import router from '@/router';

const API_ENDPOINT = 'http://localhost:8000'

export default {

    get(url, params = {}) {
      return axios.get(
        API_ENDPOINT + url,
        {
          params,
          headers,
        },
      );
    },
    post(url, body = {}, config = {}) {
      return axios.post(
        API_ENDPOINT + url,
        body,
        config,
      );
    },
    delete(url, config = {}) {
      return axios.delete(API_ENDPOINT + url, config);
    },
    put(url, body = {}, config = {}) {
      return axios.put(
        API_ENDPOINT + url,
        body,
        config,
      );
    },
  };