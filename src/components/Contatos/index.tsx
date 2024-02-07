import React, { useState } from 'react'
import * as S from './style' // Garanta que o caminho para o arquivo de estilo está correto

export type Props = {
  nome: string
  email: string
  numero: string
}

const FormContato = ({ nome, email, numero }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Conteudo>
      {' '}
      {/* Adicionado um novo styled-component para agir como contêiner flex */}
      <S.Formulario>
        <S.ExibeContato>{nome}</S.ExibeContato>
        <S.ExibeContato>{email}</S.ExibeContato>
        <S.ExibeContato>{numero}</S.ExibeContato>
      </S.Formulario>
      <S.CentralButao>
        {estaEditando ? (
          <>
            <S.BotaoCancelar
              type="button"
              onClick={() => setEstaEditando(false)}
            >
              Cancelar
            </S.BotaoCancelar>
            <S.BotaoSalvar type="button" onClick={() => setEstaEditando(false)}>
              Salvar
            </S.BotaoSalvar>
          </>
        ) : (
          <>
            <S.BotaoRemover type="button">Remover</S.BotaoRemover>
            <S.BotaoEditar type="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
          </>
        )}
      </S.CentralButao>
    </S.Conteudo>
  )
}

export default FormContato
