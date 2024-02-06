import { Titulo, BotaoADC, Cabecalho, Lista, Campo } from './styles'

const CabecalhoLista = () => {
  return (
    <Cabecalho>
      <Titulo>Contatos</Titulo>
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
          <BotaoADC type="button">Adicionar</BotaoADC>
        </li>
      </Lista>
    </Cabecalho>
  )
}

export default CabecalhoLista
