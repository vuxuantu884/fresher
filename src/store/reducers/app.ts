import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface appState {
  search: boolean;
  popup: boolean;
  popupCancellation: boolean;
  popupSelectTheQuestionProblem: boolean;
  deliveryRecords: boolean;
  editAddress: boolean;
  message: boolean;
}

const initialState: appState = {
  search: false,
  popup: false,
  popupCancellation: false,
  popupSelectTheQuestionProblem: false,
  deliveryRecords: false,
  editAddress: false,
  message: false,
};

export const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetApp: () => {
      return initialState;
    },
    setToggleSearch: (state) => {
      state.search = !state.search;
    },
    setTogglePopup: (state) => {
      state.popup = !state.popup;
    },
    setTogglePopupCancellation: (state) => {
      state.popupCancellation = !state.popupCancellation;
    },
    setToggleSelectTheQuestionProblem: (state) => {
      state.popupSelectTheQuestionProblem =
        !state.popupSelectTheQuestionProblem;
    },
    setToggleDeliveryRecords: (state) => {
      state.deliveryRecords = !state.deliveryRecords;
    },
    setToggleEditAddress: (state) => {
      state.editAddress = !state.editAddress;
    },
    setToggleMessage: (state) => {
      state.message = !state.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  resetApp,
  setToggleSearch,
  setTogglePopup,
  setTogglePopupCancellation,
  setToggleSelectTheQuestionProblem,
  setToggleDeliveryRecords,
  setToggleEditAddress,
  setToggleMessage,
} = appSlice.actions;

// cần đặt tên có đuôi Store
export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
