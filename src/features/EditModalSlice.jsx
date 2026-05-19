import { createSlice } from "@reduxjs/toolkit";

export const editModal = createSlice({
  name: "editModal",
  initialState: {
    isOpen: false,
    isOpenAdd: false,
    product: null,
  },
  reducers: {
    openModal: (state,action) =>{
      state.isOpen = true;
      state.product = action.payload;
    },
    openAddModal: (state) => {
      state.isOpenAdd = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.product = null;
    }
  }
})

export const {openModal, closeModal, openAddModal} = editModal.actions
export default editModal.reducer;