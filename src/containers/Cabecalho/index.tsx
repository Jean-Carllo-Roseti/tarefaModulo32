import { FormEvent, useState } from 'react'

import * as S from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { adiconar } from '../../store/reducers/contato'

const CabecalhoLista = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const adcionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, numero, 9)

    dispatch(adiconar(contatoParaAdicionar))
  }

  return (
    <S.Form onSubmit={adcionarContato}>
      <S.Cabecalho>
        <S.Titulo>Contatos</S.Titulo>
        <S.Lista>
          <li>
            <S.Campo
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              type="text"
              required
              placeholder="nome"
            />
          </li>
          <li>
            <S.Campo
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              required
              placeholder="email"
            />
          </li>
          <li>
            <S.Campo
              value={numero}
              onChange={({ target }) => setNumero(target.value)}
              type="number"
              required
              placeholder="numero"
            />
          </li>
          <li>
            <S.BotaoADC type="submit">Adicionar</S.BotaoADC>
          </li>
        </S.Lista>
      </S.Cabecalho>
    </S.Form>
  )
}

export default CabecalhoLista
