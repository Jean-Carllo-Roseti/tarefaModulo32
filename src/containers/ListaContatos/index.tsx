import * as S from './styles'
import FormContato from '../../components/Contatos'

const contato = [
  {
    nome: 'Jose da silva salro',
    email: 'dinossauro@gmail.com',
    numero: '(00) 22555-3265'
  }
]

const ListaDeConstatos = () => {
  return (
    <S.Main>
      <S.Subtitulo>Familia</S.Subtitulo>
      <S.ListaContainer>
        {contato.map((c) => (
          <S.Formulario key={c.nome}>
            <FormContato nome={c.nome} email={c.email} numero={c.numero} />
          </S.Formulario>
        ))}
      </S.ListaContainer>
    </S.Main>
  )
}

export default ListaDeConstatos
