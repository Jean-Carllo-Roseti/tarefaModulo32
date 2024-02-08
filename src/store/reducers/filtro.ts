import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Categoria'

type FiltroState = {
  termo: string
  categoria: 'todas' | 'familia' | 'amigos' | 'trabalho'
  value?: enums.Categorias
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
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
