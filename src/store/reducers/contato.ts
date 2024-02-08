import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type contatoState = {
  itens: Contato[]
}

const initialState: contatoState = {
  itens: [
    {
      nome: 'Romulo Augustos',
      email: 'jhons@gmail.com',
      numero: '(17) 77465-5832',
      id: 1
    },
    {
      nome: 'borges Augustos',
      email: 'jhons@gmail.com',
      numero: '(11) 76865-5842',
      id: 2
    },
    {
      nome: 'birubiru cabelo',
      email: 'jonas@gmail.com',
      numero: '(17) 77465-5832',
      id: 3
    },
    {
      nome: 'jack Augustos',
      email: 'jhons@gaga.com',
      numero: '(14) 667465-5832',
      id: 4
    },
    {
      nome: 'soares fini',
      email: 'lokinho@gmail.com',
      numero: '(90) 44465-5732',
      id: 5
    },
    {
      nome: 'andre Augustos',
      email: 'jhons@gmail.com',
      numero: '(15) 77655-4432',
      id: 6
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const IndexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (IndexContato >= 0) {
        state.itens[IndexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions

export default contatoSlice.reducer
