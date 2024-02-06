import EstiloGlobal, { Container } from './styles/styles'

import BarraLateral from './components/BarraLateral'
import ConteudoPrincpal from './components/ConteudoPrincipal'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ConteudoPrincpal />
      </Container>
    </>
  )
}

export default App
