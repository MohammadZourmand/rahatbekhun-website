import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItemsProps {
    price : number
    link : string
    name : string
    img : string
}

const initialState : CartItemsProps[] = []

export const cartProducts = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
      addProduct : ( state, action : PayloadAction<any> ) => {
        let { link } = action.payload

        if(state.length === 0) {
          state.push(action.payload)
        } else {
          state?.forEach((product : CartItemsProps) => {
            product.link !== link && state.push(action.payload)
          })
        }

      },
      emptyCart : () => {
        return []
      }
    },
  },
)

export const { addProduct, emptyCart } = cartProducts.actions

export default cartProducts.reducer