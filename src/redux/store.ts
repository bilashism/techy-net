import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart/cartSlice';
import { productReducer } from './features/products/productSlice';
import { productsApi } from './api/productsApiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
