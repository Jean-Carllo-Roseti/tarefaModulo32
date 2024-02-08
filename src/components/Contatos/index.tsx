import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import Contato from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contato'

type Props = Contato

const FormContato = ({
  nome: nomeSalvo,
  email: emailSalvo,
  numero: numeroSalvo,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (numeroSalvo.length > 0) {
      setNumero(numeroSalvo)
    }
    if (nomeSalvo.length > 0) {
      setNome(nomeSalvo)
    }
    if (emailSalvo.length > 0) {
      // Corrigido o erro de sintaxe aqui
      setEmail(emailSalvo)
    }
  }, [numeroSalvo, nomeSalvo, emailSalvo])

  function CancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroSalvo)
    setEmail(emailSalvo)
    setNome(nomeSalvo)
  }

  return (
    <S.Conteudo>
      <S.Colunas>
        <S.Lista>
          <S.LItem>
            <input
              disabled={!estaEditando}
              value={nome}
              placeholder={nomeSalvo}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </S.LItem>
          <S.LItem>
            <input
              disabled={!estaEditando}
              value={email}
              placeholder={emailSalvo}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </S.LItem>
          <S.LItem>
            <input
              type="number"
              disabled={!estaEditando}
              value={numero}
              placeholder={numeroSalvo}
              onChange={(evento) => setNumero(evento.target.value)}
            />
          </S.LItem>
        </S.Lista>
        <div>
          {estaEditando ? (
            <>
              <S.BotaoCancelar onClick={CancelarEdicao}>
                Cancelar
              </S.BotaoCancelar>
              <S.BotaoSalvar
                onClick={() => {
                  setEstaEditando(false)
                  dispatch(
                    editar({
                      nome,
                      email,
                      numero,
                      id
                    })
                  )
                }}
              >
                Salvar
              </S.BotaoSalvar>
            </>
          ) : (
            <>
              <S.BotaoRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoRemover>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                Editar
              </S.BotaoEditar>
            </>
          )}
        </div>
      </S.Colunas>
    </S.Conteudo>
  )
}

export default FormContato
