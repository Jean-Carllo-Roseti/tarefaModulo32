import * as S from './styles'
import { useSelector } from 'react-redux'

import FormContato from '../../components/Contatos'

import { RootReducer } from '../../store'

const ListaDeConstatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo, categoria, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

        if (categoria === 'familia') {
          contatosFiltrados = contatosFiltrados.filter(
            item => item.
          )
        }

    } else {
      return itens
    }
  }

  return (
    <S.Main>
      <S.Subtitulo>Familia teste pesquisa: &quot;{termo}&quot;</S.Subtitulo>
      <ul>
        <li>{termo}</li>
        <li>{categoria}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraContatos().map((c) => (
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
