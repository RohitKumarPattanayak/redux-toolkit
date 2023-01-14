import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, data) => {
      state.count += Number(data.payload.Value);
    },
    decrease: (state, data) => {
      state.count -= Number(data.payload.Value);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
