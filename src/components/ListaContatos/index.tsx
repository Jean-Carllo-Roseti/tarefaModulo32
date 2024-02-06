import {
  Formulario,
  ListaContainer,
  ExibeContato,
  BotaoEditar,
  CentralButao,
  BotaoRemover,
  Subtitulo
} from './styles'

const ListaDeConstatos = () => {
  return (
    <main>
      <Subtitulo>Familia</Subtitulo>
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
    </main>
  )
}

export default ListaDeConstatos
