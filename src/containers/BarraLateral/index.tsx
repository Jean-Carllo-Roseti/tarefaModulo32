import { useDispatch, useSelector } from 'react-redux'
import CardContato from '../../components/CardsBarraLateral'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <aside>
      <S.ConteinerLateral>
        <S.Pesquisar
          type="text"
          placeholder="Pesquisar contato"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
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
