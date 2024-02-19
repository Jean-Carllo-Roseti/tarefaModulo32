import { Provider } from 'react-redux'
import store from './store'

import EstiloGlobal from './styles/styles'
import CabecalhoLista from './containers/Cabecalho'
import ListaDeConstatos from './containers/ListaContatos'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <CabecalhoLista />
      <ListaDeConstatos />
    </Provider>
  )
}

export default App
