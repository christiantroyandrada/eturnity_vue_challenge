import axios from "axios"

import { NASA_API_KEY } from "../../env"

const state = {
  isDailyImageLoading: false,
  todayImage: '',
}

const getters = {
  getIsDailyImageLoading(state) {
    return state.isDailyImageLoading
  },
  getTodayImage(state) {
    return state.todayImage
  },
}

const mutations = {
  mutate_isDailyImageLoading(state, value) {
    state.isDailyImageLoading = value
  },
  mutate_todayImage(state, value) {
    state.todayImage = value
  },
}

const actions = {
  async fetchDailyImage(context, payload){
    context.commit('mutate_isDailyImageLoading', true)
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${payload}&api_key=${NASA_API_KEY}`
      )
      .then((res) => {
        context.commit('mutate_todayImage', res.data)
        context.commit('mutate_isDailyImageLoading', false)
      })
      .catch(() => {
        context.commit('mutate_todayImage', {})
        context.commit('mutate_isDailyImageLoading', false)
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
