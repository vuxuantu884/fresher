import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { User } from "types/user.types";

interface UserState {
  user?: User;
  token?: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
  },
  reducers: {
    // Cần đặt tên có đuôi Action
    setUserAction: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUserAction: (state: UserState) => {
      state.user = undefined;
    },
    updateUserAction: (state: UserState, action: PayloadAction<User>) => {
      if (action.payload) {
        state.user = state.user ? { ...state.user, ...action.payload  } : action.payload;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserAction, removeUserAction, updateUserAction } = userSlice.actions;

// cần đặt tên có đuôi Store
export const getUserStore = (state: RootState) => state.user.user;

export default userSlice.reducer