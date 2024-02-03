<template>
  <page-wrapper>
    <page-title>Mars photos from today</page-title>
    <loading-container
      v-if="isMarsImageLoading || !marsImage || !marsImage.photos.length"
    >
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
import axios from "axios"
import { mapGetters, mapMutations } from "vuex"
import vueStyles from "@/styles/marstoday-vue-styles"
import { getToday } from "@/utils/getToday"


export default {
  name: "mars-yesterday",
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
  },
  data() {
    return {
      marsImage: null,
    }
  },
  computed: {
    ...mapGetters({
      isMarsImageLoading: "getIsMarsImageLoading",
      isDailyLoading: "getIsDailyImageLoading",
      todayImage: "getTodayImage",
    }),
    getToday() {
      return getToday()
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
  },
  mounted() {
    this.setIsDailyLoading(true)
    this.fetchTodayImage()
    let formattedDate
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 11)
    const year = yesterday.getFullYear()
    const month = String(yesterday.getMonth() + 1).padStart(2, "0")
    const day = String(yesterday.getDate()).padStart(2, "0")
    formattedDate = `${year}-${month}-${day}`
    // Note: returning -10 days on purpose because the data can be lagged. Just pretend it's "today"
    this.setIsMarsImageLoading(true)
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=jfhpZIbfdDVGKSNbIzVmeXUVt4kcaibRCKoj4iuw`
      )
      .then((res) => {
        this.marsImage = res.data
        // 25 results per page are returned
        this.setIsMarsImageLoading(false)
      })
  },
}
</script>
