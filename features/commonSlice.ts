import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CommonState = {
  isPopupVisible: boolean;
};

const initialState: CommonState = {
  isPopupVisible: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsPopupVisible: (state, action: PayloadAction<boolean>) => {
      state.isPopupVisible = action.payload;
    },
  },
});

export const { setIsPopupVisible } = commonSlice.actions;

export default commonSlice.reducer;
