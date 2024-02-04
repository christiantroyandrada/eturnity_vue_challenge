import Vue from "vue"
import Vuex from "vuex"
import ApodModule from "./apod-module"
import MarsRoverModule from "./mars-rover-module"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ApodModule,
    MarsRoverModule,
  },
})
