import { Card2TypeProps } from '@/types/home'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState : Card2TypeProps = {
  category: '',
  imgSrc: '',
  imgAlt: '',
  head: '',
  para: '',
  date: '',
  author: '',
  linkName: ''
}

export const articleInfoSlice = createSlice({
  name: 'articleInfo',
  initialState,
  reducers: {
      setArticleInfo : ( state, action : PayloadAction<any> ) => {


        return {
          ...action.payload
        }
      }
    },
  },
)

export const { setArticleInfo } = articleInfoSlice.actions

export default articleInfoSlice.reducer