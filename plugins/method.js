import Vue from 'vue'

Vue.prototype.sleep = async (timeout) => {
  return new Promise((res, rej) => setTimeout(res, timeout * 1000))
}