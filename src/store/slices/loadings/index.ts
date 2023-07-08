import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface setLoadingStateProps {
  loadingType : string,
}

const initialState : setLoadingStateProps = {
  loadingType : undefined
}

export const setLoadingSlice = createSlice({
  name: 'setLoading',
  initialState,
  reducers: {
      loadingsSetter : ( state, action : PayloadAction<any> ) => {
        return {
          loadingType : action.payload
        }
      }
    },
  },
)

export const { loadingsSetter } = setLoadingSlice.actions

export default setLoadingSlice.reducer