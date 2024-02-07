import React, { useState } from 'react'
import * as S from './style'

export type Props = {
  nome: string
  email: string
  numero: string
}

const FormContato = ({ nome, email, numero }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Conteudo>
      <S.Colunas>
        <S.Lista>
          <S.LItem>{nome}</S.LItem>
          <S.LItem>{email}</S.LItem>
          <S.LItem>{numero}</S.LItem>
        </S.Lista>
        <div>
          {estaEditando ? (
            <>
              <S.BotaoCancelar
                type="button"
                onClick={() => setEstaEditando(false)}
              >
                Cancelar
              </S.BotaoCancelar>
              <S.BotaoSalvar
                type="button"
                onClick={() => setEstaEditando(false)}
              >
                Salvar
              </S.BotaoSalvar>
            </>
          ) : (
            <>
              <S.BotaoRemover type="button">Remover</S.BotaoRemover>
              <S.BotaoEditar
                type="button"
                onClick={() => setEstaEditando(true)}
              >
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
