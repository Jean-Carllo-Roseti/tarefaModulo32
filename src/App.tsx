import EstiloGlobal, { Container } from './styles/styles'

import BarraLateral from './containers/BarraLateral'
import ConteudoPrincpal from './containers/ConteudoPrincipal'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ConteudoPrincpal />
      </Container>
    </Provider>
  )
}

export default App
