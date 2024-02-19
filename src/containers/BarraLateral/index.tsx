import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import CardContato from '../../components/CardsBarraLateral'
import * as S from './styles'
import * as enums from '../../utils/enums/Categoria'

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
          <CardContato
            valor={enums.Categorias.FAMILIA}
            categoria="familia"
            ativo
            legenda={'Família'}
          />
          <CardContato
            valor={enums.Categorias.AMIGOS}
            categoria="amigos"
            ativo
            legenda={'Amigos'}
          />
          <CardContato
            valor={enums.Categorias.TRABALHO}
            categoria="trabalho"
            ativo
            legenda={'Trabalho'}
          />
          <CardContato
            valor={enums.Categorias.TODAS}
            categoria="todas"
            legenda={'Todas'}
          />
        </S.ConteinerCards>
      </S.ConteinerLateral>
    </aside>
  )
}

export default BarraLateral
