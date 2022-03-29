import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface appState {
  search: boolean;
}

const initialState: appState = {
  search: false,
};

export const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToggleSearch: (state) => {
      state.search = !state.search;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToggleSearch } = appSlice.actions;

// cần đặt tên có đuôi Store
export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
