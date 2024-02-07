import CardContato from '../../components/CardsBarraLateral'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <aside>
      <S.ConteinerLateral>
        <S.Pesquisar type="text" placeholder="Pesquisar contato" />
        <S.ConteinerCards>
          <CardContato ativo />
          <CardContato />
          <CardContato />
          <CardContato />
        </S.ConteinerCards>
      </S.ConteinerLateral>
    </aside>
  )
}

export default BarraLateral
