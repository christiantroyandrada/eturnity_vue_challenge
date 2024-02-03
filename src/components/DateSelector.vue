<template>
    <CenteredDateSelector>
      <DateSelectorWrapper>
        <DateInput v-model="selectedDate" :max="today" @input="updateDate" />
      </DateSelectorWrapper>
    </CenteredDateSelector>
  </template>
  
<script>
import vueStyles from "@/styles/dateselector-vue-styles"

export default {
  components: {
    CenteredDateSelector: vueStyles.CENTERED_DATE_SELECTOR,
    DateSelectorWrapper: vueStyles.DATE_SELECTOR_WRAPPER,
    DateInput: vueStyles.DATE_INPUT,
  },
  props: {
    today: String,
  },
  data() {
    return {
      selectedDate: '',
    }
  },
  mounted() {
    this.selectedDate = this.today
  },
  methods: {
    updateDate(value) {
      this.selectedDate = value
      this.$store.dispatch("fetchDailyImage", this.selectedDate)
      this.$emit('dateChanged', this.selectedDate)
    },
  },
}
</script>
  