import * as S from './styles'

const CabecalhoLista = () => {
  return (
    <main>
      <S.Cabecalho>
        <S.Titulo>Contatos</S.Titulo>
        <S.Lista>
          <li>
            <S.Campo type="text" placeholder="nome" />
          </li>
          <li>
            <S.Campo type="email" placeholder="email" />
          </li>
          <li>
            <S.Campo type="number" placeholder="numero" />
          </li>
          <li>
            <S.BotaoADC type="button">Adicionar</S.BotaoADC>
          </li>
        </S.Lista>
      </S.Cabecalho>
    </main>
  )
}

export default CabecalhoLista
