import { configureStore } from '@reduxjs/toolkit'

import contatoReducer from '../store/reducers/contato'

const store = configureStore({
  reducer: {
    contato: contatoReducer
  }
})

type RootReducer = ReturnType<typeof store.getState>

export default store
