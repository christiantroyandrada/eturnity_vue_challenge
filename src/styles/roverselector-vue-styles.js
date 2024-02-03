import styled from 'vue-styled-components';

const DROPDOWN_CONTAINER = styled.div`
  display: flex
  justify-content: center
  align-items: center
  margin: 20px auto
`

const DROPDOWN_LABEL = styled.label`
  font-size: 16px;
  margin-right: 10px;
`

const DROPDOWN_SELECT = styled.select`
  padding: 8px;
  font-size: 16px;
`

export default {
  DROPDOWN_CONTAINER,
  DROPDOWN_LABEL,
  DROPDOWN_SELECT
}