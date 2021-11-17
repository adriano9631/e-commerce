import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
  previouslyViewedProductsLinks: string[];
}

const initialState: ProductsState = {
  previouslyViewedProductsLinks: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addPreviouslyViewedProductsLinks: (
      state,
      action: PayloadAction<string[]>
    ) => {
      state.previouslyViewedProductsLinks = action.payload;
    },
  },
});

export const { addPreviouslyViewedProductsLinks } = productsSlice.actions;

export default productsSlice.reducer;
