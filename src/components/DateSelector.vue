<template>
    <CenteredDateSelector>
      <DateSelectorWrapper>
        <DateInput v-model="selectedDate" :max="today" @input="updateDate" />
      </DateSelectorWrapper>
    </CenteredDateSelector>
  </template>
  
<script>
import VueStyles from "@/styles/dateselector-vue-styles"

export default {
  components: {
    CenteredDateSelector: VueStyles.CENTERED_DATE_SELECTOR,
    DateSelectorWrapper: VueStyles.DATE_SELECTOR_WRAPPER,
    DateInput: VueStyles.DATE_INPUT,
  },
  props: {
    today: String,
  },
  data() {
    return {
      selectedDate: '',
    }
  },
  beforeMount() {
    this.selectedDate = this.today
  },
  methods: {
    updateDate(value) {
      this.selectedDate = value
      this.$emit('dateChanged', this.selectedDate)
    },
  },
}
</script>
  