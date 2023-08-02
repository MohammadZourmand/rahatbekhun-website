import { configureStore } from '@reduxjs/toolkit'

import singleArticleSlice from './slices/singleArticle/index';
import cartProducts from './slices/cart';
import setLoadingSlice from './slices/loadings/index';
import  articleInfoSlice  from './slices/article/index';

export const store = configureStore({
  reducer: {
    singleArticleSlice,
    cartProducts,
    setLoadingSlice,
    articleInfoSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
