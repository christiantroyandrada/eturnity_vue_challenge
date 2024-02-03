<template>
  <page-wrapper>
    <RoverSelector @roverSelected="fetchMarsImages" />
    <page-title>Mars photos from today</page-title>
    <loading-container v-if="isMarsImageLoading || !marsImage || !marsImage.photos || !marsImage.photos.length">
      <loader />
    </loading-container>
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
import { mapGetters, mapMutations } from "vuex"
import vueStyles from "@/styles/marstoday-vue-styles"
import { getToday, getTodayDelayed } from "@/utils/getToday"
import RoverSelector from "./RoverSelector.vue"

export default {
  name: "mars-today",
  components: {
    PageWrapper: vueStyles.PAGE_WRAPPER,
    PageTitle: vueStyles.PAGE_TITLE,
    CardContainer: vueStyles.CARD_CONTAINER,
    CardWrapper: vueStyles.CARD_WRAPPER,
    Loader: vueStyles.LOADER,
    LoadingContainer: vueStyles.LOADING_CONTAINER,
    CardTitle: vueStyles.CARD_TITLE,
    CardImage: vueStyles.CARD_IMAGE,
    CardDescription: vueStyles.CARD_DESCRIPTION,
    CardGrid: vueStyles.CARD_GRID,
    MoreDetails: vueStyles.MORE_DETAILS,
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
    }),
    getToday() {
      return getToday()
    },
    getTodayDelayed() {
      return getTodayDelayed()
    },
  },
  methods: {
    ...mapMutations({
      setIsMarsImageLoading: "mutate_isMarsImageLoading",
      setIsDailyLoading: "mutate_isDailyImageLoading",
    }),
    fetchTodayImage() {
      this.$store.dispatch('fetchDailyImage', this.getToday)
    },
    fetchMarsImages(value) {
      this.$store.dispatch('fetchMarsImages',
        {
          date: this.getTodayDelayed,
          rover: value
        })
    }
  },
  mounted() {
    this.setIsDailyLoading(true)
    this.fetchTodayImage()
  },
}
</script>
