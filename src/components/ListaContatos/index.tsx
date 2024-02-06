import {
  Formulario,
  ListaContainer,
  ExibeContato,
  BotaoEditar,
  CentralButao,
  BotaoRemover
} from './styles'

const ListaDeConstatos = () => {
  return (
    <div>
      <h2>Familia</h2>
      <ListaContainer>
        <Formulario>
          <ExibeContato>Nome:Jose</ExibeContato>
          <ExibeContato>Numero: (13) 99116-6494</ExibeContato>
          <ExibeContato>E-mail: jose_moura@gmail.com</ExibeContato>
        </Formulario>
        <CentralButao>
          <BotaoRemover type="button">Remover</BotaoRemover>
          <BotaoEditar type="button">Editar</BotaoEditar>
        </CentralButao>
      </ListaContainer>
    </div>
  )
}

export default ListaDeConstatos
