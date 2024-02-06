import styled from 'styled-components'

import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#fff' : '#000')};
  border-radius: 8px;
`
export const Contador = styled.span`
  font-size: 32px;
  color: #000;
  display: block;
`

export const Catergoria = styled.label`
  margin-left: 6px;
`
