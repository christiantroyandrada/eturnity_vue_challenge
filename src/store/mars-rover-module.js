import axios from "axios"

import { NASA_API_KEY } from "../../env"
import { getTodayOpportunity, getTodaySpirit } from "@/utils/getToday"

const state = {
  isMarsImageLoading: false,
  marsImages: [],
  dateToday: '',
}

const getters = {
  getIsMarsImageLoading(state) {
    return state.isMarsImageLoading
  },
  getMarsImages(state) {
    return state.marsImages
  },
  getDateToday(state) {
    return state.dateToday
  },
}

const mutations = {
  mutate_isMarsImageLoading(state, value) {
    state.isMarsImageLoading = value
  },
  mutate_marsImages(state, value) {
    state.marsImages = value
  },
  mutate_dateToday(state, value) {
    state.dateToday = value
  },
}

const actions = {
  async fetchMarsImages(context, payload){
    context.commit('mutate_isMarsImageLoading', true)
    const parameters = payload
    switch (parameters.rover) {
      case 'opportunity':
        parameters.date = getTodayOpportunity
        break;
      case 'spirit':
        parameters.date = getTodaySpirit
        break;
      default:
        break;
    }
    context.commit('mutate_dateToday', parameters.date)

    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${parameters.rover}/photos?earth_date=${parameters.date}&api_key=${NASA_API_KEY}`
      )
      .then((res) => {
        context.commit('mutate_marsImages', res.data)
        context.commit('mutate_isMarsImageLoading', false)
      }).catch(() => {
        context.commit('mutate_marsImages', {
          photos: [],
        })
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
