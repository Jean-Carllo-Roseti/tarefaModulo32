import * as S from './styles'
import { useSelector } from 'react-redux'

import FormContato from '../../components/Contatos'

import { RootReducer } from '../../store'

const ListaDeConstatos = () => {
  const { contato } = useSelector((state: RootReducer) => state)

  return (
    <S.Main>
      <S.Subtitulo>Familia</S.Subtitulo>
      <ul>
        {contato.map((c) => (
          <li key={c.nome}>
            <FormContato nome={c.nome} email={c.email} numero={c.numero} />
          </li>
        ))}
      </ul>
    </S.Main>
  )
}

export default ListaDeConstatos
