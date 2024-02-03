import styled from 'vue-styled-components'

const CENTERED_DATE_SELECTOR = styled.div`
    display: flex
    justify-content: center
    align-items: center
    margin: 20px auto
  `
  
  const DATE_SELECTOR_WRAPPER = styled.div`
    display: inline-block
  `
  
  const DATE_INPUT = styled.input.attrs({
    type: 'date',
  })`
    padding: 8px
    font-size: 16px
    border: 1px solid ${(props) => props.theme.colors.grey1}
    border-radius: 4px
  `

  export default {
    CENTERED_DATE_SELECTOR,
    DATE_SELECTOR_WRAPPER,
    DATE_INPUT
  }