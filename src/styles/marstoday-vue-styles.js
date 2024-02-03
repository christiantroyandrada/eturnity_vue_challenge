import styled from "vue-styled-components"

const PAGE_WRAPPER = styled.div`
  padding-bottom: 50px;
`

const PAGE_TITLE = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.purple};
`

const CARD_CONTAINER= styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 350px));
  align-items: center;
  justify-items: center;
  margin-top: 30px;
  padding: 20px;
`

const CARD_WRAPPER = styled.div`
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 100%;
  min-width: 100%;
`

const CARD_GRID = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
  min-height: 100%;
`

const CARD_TITLE = styled.div`
padding: 20px
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
`

const CARD_IMAGE = styled.img`
  max-width: 100%;
`

const CARD_DESCRIPTION = styled.div`
  font-size: 14px;
  padding: 14px;
`

const LOADING_CONTAINER = styled.div`
  width: 100%;
`
const LOADER = styled.div`
  border: 6px solid ${(props) => props.theme.colors.grey3};
  border-top: 6px solid ${(props) => props.theme.colors.red};
  border-radius: 100%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const MORE_DETAILS = styled.div`
  margin: 24px 0 16px 0;
  color: ${(props) => props.theme.colors.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export default{
  PAGE_WRAPPER,
  PAGE_TITLE,
  CARD_CONTAINER,
  CARD_WRAPPER,
  CARD_GRID,
  CARD_TITLE,
  CARD_IMAGE,
  CARD_DESCRIPTION,
  LOADING_CONTAINER,
  LOADER,
  MORE_DETAILS,
}