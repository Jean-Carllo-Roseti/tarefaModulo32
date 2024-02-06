import styled from 'styled-components'

export const ListaContainer = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #6a89cc;
  border-radius: 8px;

  h2 {
    text-align: center;
  }
`
export const Formulario = styled.form`
  border-radius: 8px;
  padding: 16px 0;
  width: 500px;
`

export const ExibeContato = styled.label`
  display: block;
  margin-left: 50px;
`
export const BotaoEditar = styled.button`
  display: block;
  width: 70px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  padding: 4px;
`

export const BotaoRemover = styled.button`
  background-color: red;
  color: #fff;
  display: block;
  width: 70px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  margin-bottom: 16px;
  padding: 4px;
`

export const CentralButao = styled.div`
  margin: auto;
`
