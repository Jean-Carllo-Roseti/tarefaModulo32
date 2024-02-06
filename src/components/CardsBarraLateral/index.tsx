import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const CardContato = (props: Props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>3</S.Contador> <S.Catergoria>Familias</S.Catergoria>
    </S.Card>
  )
}

export default CardContato
