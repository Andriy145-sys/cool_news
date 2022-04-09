import axios from 'axios';

//const API_ENDPOINT = 'http://localhost:8000'
const API_ENDPOINT = 'https://coolnewsbackend.herokuapp.com'

export default {

    get(url, params = {}) {
      return axios.get(
        API_ENDPOINT + url,
        {
          params,
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