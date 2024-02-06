import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
`

export default EstiloGlobal
