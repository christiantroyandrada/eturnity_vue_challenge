import axios from "axios"

import { NASA_API_KEY } from "../../env"

const state = {
  isDailyImageLoading: false,
  isMarsImageLoading: false,
  todayImage: '',
  marsImages: [],
}

const getters = {
  getIsDailyImageLoading(state) {
    return state.isDailyImageLoading
  },
  getIsMarsImageLoading(state) {
    return state.isMarsImageLoading
  },
  getTodayImage(state) {
    return state.todayImage
  },
  getMarsImages(state) {
    return state.marsImages
  },
}

const mutations = {
  mutate_isDailyImageLoading(state, value) {
    state.isDailyImageLoading = value
  },
  mutate_isMarsImageLoading(state, value) {
    state.isMarsImageLoading = value
  },
  mutate_todayImage(state, value) {
    state.todayImage = value
  },
  mutate_marsImages(state, value) {
    state.marsImages = value
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
  },
  async fetchMarsImages(context, payload){
    context.commit('mutate_isMarsImageLoading', true)
    const parameters = payload
    switch (parameters.rover) {
      case 'opportunity':
        parameters.date = "2018-06-09"
        break;
      case 'spirit':
        parameters.date = "2010-03-21"
        break;
      default:
        break;
    }
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${parameters.rover}/photos?earth_date=${parameters.date}&api_key=${NASA_API_KEY}`
      )
      .then((res) => {
        context.commit('mutate_marsImages', res.data)
        context.commit('mutate_isMarsImageLoading', false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
