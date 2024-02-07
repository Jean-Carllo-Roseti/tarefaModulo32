import styled from 'styled-components'

export const Subtitulo = styled.h2`
  width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 8px;
  margin-bottom: 8px;
`

export const ListaContainer = styled.div`
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #6a89cc;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 16px 4px 0 rgba(0, 0, 0, 0.8);
`
export const Formulario = styled.form`
  padding: 16px 0;
  width: 500px;
`

export const ExibeContato = styled.label`
  display: block;
  margin-left: 50px;
`

export const CentralButao = styled.div`
  margin: auto;
`
export const Main = styled.div`
  overflow-y: scroll;
  height: 81vh;
`
export const Botao = styled.button`
  display: block;
  width: 70px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  padding: 4px;
  color: #fff;
`

export const BotaoRemover = styled(Botao)`
  background-color: red;
  color: #000;
  margin-bottom: 16px;
`
export const BotaoEditar = styled(Botao)`
  background-color: #bdc3c7;
  color: #000;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
  color: #fff;
`
export const BotaoCancelar = styled(Botao)`
  background-color: red;
  color: #fff;
  margin-bottom: 16px;
`
