import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "../features/QueryProducts";
import { editModal } from "../features/EditModalSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    modal: editModal.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});
