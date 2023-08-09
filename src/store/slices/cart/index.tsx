import { SuccsesToast, WarningToast } from '@/components/lib/swal'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartItemsProps {
    price : number
    link : string
    name : string
    img : string
    offPrecent : number
}

const initialState : cartItemsProps[] = [{
  price : 465,
  link : "سلام خوبی",
  name : "آموزش پیشرفته ریاضیات گسسته",
  img : "/images/home/big-discount-champions-learning-event.jpg",
  offPrecent : 45,
}]

export const cartProducts = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
      addProduct : ( state, action : PayloadAction<any> ) => {
        let { link } = action.payload

        if(state.length === 0) {
          state.push(action.payload)
          SuccsesToast("محصول به سبد خرید اضافه شد !")
        } else {
          state?.forEach((product : cartItemsProps) => {
            if(product.link !== link) {
              state.push(action.payload)
              SuccsesToast("محصول به سبد خرید اضافه گردید !")
            } else {
              WarningToast("این محصول در سبد شما هست !")
            }
          })
        }

      },
      emptyCart : () => {
        return []
      },
      deleteProduct : (state, action) => {
        SuccsesToast("FUCK YOU !")

        return state.filter((item) => {
          return item.link !== action.payload
        })
      }
    },
  },
)

export const { addProduct, emptyCart, deleteProduct } = cartProducts.actions

export default cartProducts.reducer