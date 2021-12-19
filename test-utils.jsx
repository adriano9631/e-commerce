import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import rootReducer from "./features/store";
import commonSlice from "./features/commonSlice";
import productsSlice from "./features/productsSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { products: productsSlice, common: commonSlice },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
