import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contato',
  initialState: [
    new Contato('Romulo Augustos', 'jhons@gmail.com', '(17)77465-5832', 1),
    new Contato('Aragão Venancio', 'Vena@hotmail.com', '(20)7554-6532', 2),
    new Contato('Elza Pulma', 'congelar@gmail.com', '(56)77465-5832', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
