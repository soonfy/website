import Vue from 'vue'
import * as _ from 'lodash'
import * as moment from 'moment'
import axios from 'axios'


axios.defaults.baseURL = `http://127.0.0.1:3000`


Vue.prototype.sleep = async (timeout) => {
  return new Promise((res, rej) => setTimeout(res, timeout * 1000))
}