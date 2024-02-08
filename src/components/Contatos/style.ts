import styled from 'styled-components'

export const Conteudo = styled.div`
  display: flex;
  justify-content: center; /* utlizar mais desta propriedades*/
  margin-bottom: 16px;
`

export const Colunas = styled.div`
  display: flex;
  background-color: #000;
  padding: 10px;
`

export const Lista = styled.ul`
  background-color: blue;
  width: 550px;
  margin-right: 20px;
`

export const LItem = styled.li`
  display: block;
  margin-left: 50px;
`

export const Botao = styled.button`
  display: block;
  width: 70px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  padding: 4px;
  color: #fff;
  cursor: pointer;
`

export const BotaoRemover = styled(Botao)`
  background-color: red;
  color: #000;
  margin-bottom: 16px;

  &:hover {
    background-color: #b30000;
  }
`

export const BotaoEditar = styled(Botao)`
  background-color: #bdc3c7;
  color: #000;

  &:hover {
    background-color: #b30000;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
  color: #fff;

  &:hover {
    background-color: #b30000;
  }
`

export const BotaoCancelar = styled(Botao)`
  background-color: red;
  color: #fff;
  margin-bottom: 16px;

  &:hover {
    background-color: #b30000;
  }
`
