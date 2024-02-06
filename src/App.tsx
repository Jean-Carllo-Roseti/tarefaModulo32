import EstiloGlobal, { Container } from './styles/styles'

import BarraLateral from './containers/BarraLateral'
import ConteudoPrincpal from './containers/ConteudoPrincipal'

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
