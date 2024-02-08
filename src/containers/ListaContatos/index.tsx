import * as S from './styles'
import { useSelector } from 'react-redux'

import FormContato from '../../components/Contatos'

import { RootReducer } from '../../store'

const ListaDeConstatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Main>
      <S.Subtitulo>Familia teste pesquisa: &quot;{termo}&quot;</S.Subtitulo>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <FormContato
              nome={c.nome}
              email={c.email}
              numero={c.numero}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  )
}

export default ListaDeConstatos
