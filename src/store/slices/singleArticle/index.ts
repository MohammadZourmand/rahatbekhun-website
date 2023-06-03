import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface singleArticleStateProps {
  category : "",
  course : ""
}

const initialState : singleArticleStateProps = {
  category : "",
  course : ""
}

export const singleArticleSlice = createSlice({
  name: 'singleArticle',
  initialState,
  reducers: {
      addQuery : ( state, action : PayloadAction<any> ) => {
        return {
          ...action.payload
        }
      }
    },
  },
)

export const { addQuery } = singleArticleSlice.actions

export default singleArticleSlice.reducer