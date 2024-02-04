<template>
  <page-wrapper>
    <DateSelector :today="getToday" @dateChanged="changeDate"/>
    <page-title>Welcome! Check out Nasa's photo for the date {{ todayDate }}</page-title>
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
import { mapGetters } from "vuex"
import vueStyles from "@/styles/homepage-vue-styles"
import DateSelector from "./DateSelector.vue"
import { getToday } from "@/utils/getToday"


export default {
  name: "home-page",
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
