<template>
    <CenteredDateSelector>
      <DateSelectorWrapper>
        <DateInput v-model="selectedDate" :max="today" @input="updateDate" />
      </DateSelectorWrapper>
    </CenteredDateSelector>
  </template>
  
  <script>
  import styled from 'vue-styled-components'
  
  const CenteredDateSelector = styled.div`
    display: flex
    justify-content: center
    align-items: center
    margin: 20px auto
  `
  
  const DateSelectorWrapper = styled.div`
    display: inline-block
  `
  
  const DateInput = styled.input.attrs({
    type: 'date',
  })`
    padding: 8px
    font-size: 16px
    border: 1px solid ${(props) => props.theme.colors.grey1}
    border-radius: 4px
  `
  
  export default {
    components: {
      CenteredDateSelector,
      DateSelectorWrapper,
      DateInput,
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
  