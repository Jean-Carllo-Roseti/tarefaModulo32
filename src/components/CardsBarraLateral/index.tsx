import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Categoria'

export type Props = {
  ativo?: boolean
  categoria: 'todas' | 'familia' | 'amigos' | 'trabalho'
  valor: enums.Categorias
  legenda: string
}

const CardContato = ({ ativo, categoria, valor, legenda }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        categoria,
        valor
      })
    )
  }
  return (
    <S.Card onClick={filtrar} ativo={ativo}>
      <S.Contador>3</S.Contador> <S.Catergoria>{legenda}</S.Catergoria>
    </S.Card>
  )
}

export default CardContato
