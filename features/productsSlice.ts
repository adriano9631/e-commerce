import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  alt: string;
  size: string;
  quantity: number | "";
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
            if (
              typeof item.quantity === "number" &&
              typeof action.payload.quantity === "number"
            ) {
              item.quantity = item.quantity + action.payload.quantity;
            } else {
              item.quantity = action.payload.quantity;
            }

            break;
          }
        }
      }
      if (typeof action.payload.quantity === "number") {
        state.totalQuantity += action.payload.quantity;
      }
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

      for (const item of state.cartItems) {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size
        ) {
          item.productTotalPrice = action.payload.quantity * item.price;
        }
      }

      const calculateTotalPrice = () => {
        state.totalPrice = state.cartItems.reduce((amount, product) => {
          if (typeof product.quantity === "number") {
            return amount + product.quantity * product.price;
          }
          return amount;
        }, 0);
      };
      const calculateTotalQuantity = () => {
        state.totalQuantity = state.cartItems.reduce((amount, product) => {
          if (typeof product.quantity === "number") {
            return amount + product.quantity;
          }
          return amount;
        }, 0);
      };
      calculateTotalPrice();
      calculateTotalQuantity();
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const itemToRemove = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      const itemQuantity = itemToRemove?.quantity;
      const itemTotalPrice = itemToRemove?.productTotalPrice;
      const itemToRemoveIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      state.cartItems.splice(itemToRemoveIndex, 1);
      if (typeof itemQuantity === "number") {
        state.totalQuantity -= itemQuantity;
      }
      if (typeof itemTotalPrice == "number") {
        state.totalPrice -= itemTotalPrice;
      }
    },
    reset: () => initialState,
  },
});

export const {
  addPreviouslyViewedProductsLinks,
  addCartItem,
  setQuantity,
  removeItemFromCart,
  reset,
} = productsSlice.actions;

export default productsSlice.reducer;
function calculateTotalPrice() {
  throw new Error("Function not implemented.");
}
