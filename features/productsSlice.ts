import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  alt: string;
  size: string;
  quantity: number;
  productTotalPrice: number;
};

type ProductsState = {
  previouslyViewedProductsLinks: string[];
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

type CartItemPayload = CartItem;

const initialState: ProductsState = {
  previouslyViewedProductsLinks: [],
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addPreviouslyViewedProductsLinks: (
      state,
      action: PayloadAction<string[]>
    ) => {
      state.previouslyViewedProductsLinks = action.payload;
    },
    addCartItem: (state, action: PayloadAction<CartItemPayload>) => {
      function isProductNotPresent(item: CartItem) {
        return item.id !== action.payload.id;
      }

      const specificProductList = [];
      for (const item of state.cartItems) {
        if (item.id === action.payload.id) {
          specificProductList.push(item);
        }
      }
      function isProductSizeNotPresent(item: CartItem) {
        return item.size !== action.payload.size;
      }

      if (state.cartItems.every(isProductNotPresent)) {
        state.cartItems.push(action.payload);
      } else if (specificProductList.every(isProductSizeNotPresent)) {
        state.cartItems.push(action.payload);
      } else {
        for (const item of state.cartItems) {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size
          ) {
            item.quantity += action.payload.quantity;
            item.productTotalPrice += action.payload.productTotalPrice;
            break;
          }
        }
      }

      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.productTotalPrice;
    },
    setQuantity: (
      state,
      action: PayloadAction<{ quantity: number; id: string; size: string }>
    ) => {
      for (const item of state.cartItems) {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size
        ) {
          item.quantity = action.payload.quantity;
        }
      }
    },
    reset: () => initialState,
  },
});

export const {
  addPreviouslyViewedProductsLinks,
  addCartItem,
  setQuantity,
  reset,
} = productsSlice.actions;

export default productsSlice.reducer;
