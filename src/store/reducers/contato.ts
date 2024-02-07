import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contato',
  initialState: [
    new Contato('Romulo Augustos', 'jhons@gmail.com', '(17) 77465-5832', 1),
    new Contato('Aragão Venancio', 'Vena@hotmail.com', '(20) 7554-6532', 2),
    new Contato('Elza Pulma', 'congelar@gmail.com', '(56) 77465-5832', 3),
    new Contato('Antero Afastos', 'reireins@gmail.com', '(14) 78965-7732', 4),
    new Contato('Potter velozcio', 'baha@hotmail.com', '(25) 7554-6537', 5),
    new Contato('pedrao marcos', 'cdsdevr@gmail.com', '(50) 54325-5992', 6)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
