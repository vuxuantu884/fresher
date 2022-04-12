import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDistricts, IProvince, IWards } from "types";
import { RootState } from "store";

interface IState {
  province?: IProvince | undefined;
  district?: IDistricts | undefined;
  ward?: IWards | undefined;
}

const initialState: IState = {
  province: undefined,
  district: undefined,
  ward: undefined,
};

export const provinceSlice = createSlice({
  name: "province",
  initialState,
  reducers: {
    resetProvince: () => {
      return initialState;
    },
    setProvince: (state, action: PayloadAction<IProvince | undefined>) => {
      state.province = action.payload;
    },
    setDistrict: (state, action: PayloadAction<IDistricts | undefined>) => {
      state.district = action.payload;
    },
    setWard: (state, action: PayloadAction<IWards | undefined>) => {
      state.ward = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetProvince, setProvince, setDistrict, setWard } =
  provinceSlice.actions;

// cần đặt tên có đuôi Store
export const selectProvince = (state: RootState) => state.province;

export default provinceSlice.reducer;
