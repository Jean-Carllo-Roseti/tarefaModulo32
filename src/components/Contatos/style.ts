import styled from 'styled-components'

export const Conteudo = styled.div`
  display: flex;
  align-items: center; // Centraliza verticalmente se necessário
`

export const Formulario = styled.form`
  padding: 16px 0;
  width: 500px;
  flex: 1; /* Ocupa o espaço disponível, mas não tudo se CentralButao precisar de espaço */
`

export const ExibeContato = styled.label`
  display: block;
  margin-left: 50px;
`

export const CentralButao = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os botões verticalmente */
  justify-content: center; /* Centraliza os botões verticalmente */
  padding: 0 auto;
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
