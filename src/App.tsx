import EstiloGlobal, { Container } from './styles/styles'

import CabecalhoLista from './components/Cabecalho'
import ListaDeConstatos from './components/ListaContatos'
import BarraLateral from './components/BarraLateral'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <CabecalhoLista />
        <BarraLateral />
        <ListaDeConstatos />
      </Container>
    </>
  )
}

export default App
