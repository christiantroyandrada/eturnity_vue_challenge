<template>
  <page-wrapper>
    <page-title>Welcome! Check out Nasa's photo of the day</page-title>
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
import vueStyles from "@/styles/homepage-vue-styles"


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
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      setIsDailyLoading: "mutate_isDailyImageLoading",
    }),
  },
  computed: {
    ...mapGetters({
      isDailyLoading: "getIsDailyImageLoading",
      todayImage: "getTodayImage",
    }),
  },
  mounted() {
    this.$store.dispatch('fetchDailyImage')
  },
}
</script>
