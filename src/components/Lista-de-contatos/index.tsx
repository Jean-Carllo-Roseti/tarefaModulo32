import {
  Titulo,
  BotaoADC,
  Cabecalho,
  Lista,
  HeaderContainer,
  Campo
} from './styles'

const ListaDeContato = () => {
  return (
    <Cabecalho>
      <Titulo>Contatos</Titulo>
      <HeaderContainer>
        <Lista>
          <li>
            <Campo type="text" placeholder="nome" />
          </li>
          <li>
            <Campo type="email" placeholder="email" />
          </li>
          <li>
            <Campo type="number" placeholder="numero" />
          </li>
          <li>
            <div>
              <BotaoADC type="button">Adicionar</BotaoADC>
            </div>
          </li>
        </Lista>
      </HeaderContainer>
    </Cabecalho>
  )
}

export default ListaDeContato
