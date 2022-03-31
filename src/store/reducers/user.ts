import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { User } from "types/user.types";

interface IState {
  user?: string;
  token?: string;
}

const initialState: IState = {
  user: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Cần đặt tên có đuôi Action
    setUserAction: (state) => {
      state.token = "token";
    },
    logout: () => {
      return initialState;
    },
    removeUserAction: (state) => {
      state.user = undefined;
    },
    updateUserAction: (state, action: PayloadAction<User>) => {
      //
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserAction, removeUserAction, updateUserAction, logout } =
  userSlice.actions;

// cần đặt tên có đuôi Store
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
