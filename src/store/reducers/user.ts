import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state: UserState) => {
      state.user = undefined;
    },
    updateUser: (state: UserState, action: PayloadAction<User>) => {
      if (action.payload) {
        state.user = state.user ? { ...state.user, ...action.payload  } : action.payload;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser, updateUser } = userSlice.actions

export default userSlice.reducer