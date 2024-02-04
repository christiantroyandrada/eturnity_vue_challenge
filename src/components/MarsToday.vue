<template>
  <page-wrapper>
    <RoverSelector @roverSelected="fetchMarsImages" />
    <page-title>Mars photos for today({{ dateToday }})</page-title>
    <loading-container v-if="isMarsImageLoading || !marsImage || !marsImage.photos || !marsImage.photos.length">
      <loader />
    </loading-container>
    <more-details v-else-if="marsImage.photos.length === 0">
      Sorry, no data found
    </more-details>
    <card-container v-else>
      <card-wrapper v-for="(imageMars, index) in marsImage.photos" :key="index">
        <card-grid>
          <card-title>
            {{ imageMars.camera.full_name }}
          </card-title>
          <card-image :src="imageMars.img_src" />
          <card-description>
            {{ imageMars.rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
    </card-container>
    <more-details>Another look at the photo of the day</more-details>
    <loading-container v-if="isDailyLoading || !todayImage">
      <loader />
    </loading-container>
    <more-details v-else-if="Object.keys(todayImage).length === 0">
      Sorry, no data found
    </more-details>
    <card-container v-else>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ todayImage.title }}
          </card-title>
          <card-image :src="todayImage.url" />
          <card-description>
            {{ todayImage.explanation }}
          </card-description>
        </card-grid>
      </card-wrapper>
    </card-container>
  </page-wrapper>
</template>

<script>
import { mapGetters } from "vuex"
import VueStyles from "@/styles/marstoday-vue-styles"
import { getToday, getTodayDelayed } from "@/utils/getToday"
import RoverSelector from "./RoverSelector.vue"

export default {
  name: "mars-today",
  components: {
    PageWrapper: VueStyles.PAGE_WRAPPER,
    PageTitle: VueStyles.PAGE_TITLE,
    CardContainer: VueStyles.CARD_CONTAINER,
    CardWrapper: VueStyles.CARD_WRAPPER,
    Loader: VueStyles.LOADER,
    LoadingContainer: VueStyles.LOADING_CONTAINER,
    CardTitle: VueStyles.CARD_TITLE,
    CardImage: VueStyles.CARD_IMAGE,
    CardDescription: VueStyles.CARD_DESCRIPTION,
    CardGrid: VueStyles.CARD_GRID,
    MoreDetails: VueStyles.MORE_DETAILS,
    RoverSelector
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isMarsImageLoading: "getIsMarsImageLoading",
      isDailyLoading: "getIsDailyImageLoading",
      todayImage: "getTodayImage",
      marsImage: "getMarsImages",
      dateToday: "getDateToday",
    }),
    getToday() {
      return getToday()
    },
    getTodayDelayed() {
      return getTodayDelayed()
    },
  },
  methods: {
    fetchTodayImage() {
      this.$store.dispatch('fetchDailyImage', this.getToday)
    },
    fetchMarsImages(value) {
      this.$store.dispatch('fetchMarsImages',
        {
          date: this.getTodayDelayed,
          rover: value,
        })
    }
  },
  mounted() {
    this.fetchTodayImage()
  },
}
</script>
