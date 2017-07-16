import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 30px;
  color: red;
`

export const H2 = H1.withComponent('h2').extend`
  font-size: 24px;
`

export const H3 = H1.withComponent('h3').extend`
  font-size: 18px;
`

export const H4 = H1.withComponent('h4').extend`
  font-size: 15px;
  color: green;
`
