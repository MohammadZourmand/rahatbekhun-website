import { SuccsesToast, WarningToast } from '@/components/lib/swal'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItemsProps {
    price : number
    link : string
    name : string
    img : string
    offPrecent : number
}

const initialState : CartItemsProps[] = [{
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
          state?.forEach((product : CartItemsProps) => {
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
      }
    },
  },
)

export const { addProduct, emptyCart } = cartProducts.actions

export default cartProducts.reducer