<template>
  <page-wrapper>
    <DateSelector :today="getToday" @dateChanged="changeDate"/>
    <page-title>Welcome! Check out Nasa's photo for the date {{ todayDate }}</page-title>
    <loading-container v-if="isDailyLoading || !todayImage">
      <loader />
    </loading-container>
    <more-details 
    v-else-if="Object.keys(todayImage).length === 0">
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
import VueStyles from "@/styles/homepage-vue-styles"
import DateSelector from "./DateSelector.vue"
import { getToday } from "@/utils/getToday"


export default {
  name: "home-page",
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
    DateSelector,
  },
  data() {
    return {
      todayDate: '',
    }
  },
  methods: {
    changeDate(value) {
      this.todayDate = value
      this.$store.dispatch("fetchDailyImage", this.todayDate)
    }
  },
  computed: {
    ...mapGetters({
      isDailyLoading: "getIsDailyImageLoading",
      todayImage: "getTodayImage",
    }),
    getToday() {
      return getToday()
    },
  },
  mounted() {
    this.$store.dispatch('fetchDailyImage', this.getToday)
    this.todayDate = this.getToday
  },
}
</script>
