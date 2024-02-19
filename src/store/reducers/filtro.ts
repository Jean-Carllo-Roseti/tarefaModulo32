import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Categoria'

type FiltroState = {
  termo?: string
  categoria: 'todas' | 'familia' | 'amigos' | 'trabalho'
  valor?: enums.Categorias
}

const initialState: FiltroState = {
  termo: '',
  categoria: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.categoria = action.payload.categoria
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
