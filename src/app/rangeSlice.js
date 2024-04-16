import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sum: 0,
};

const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    updateSum(state, action) {
      state.sum = action.payload;
    },
  },
});

export const { updateSum } = rangeSlice.actions;

export default rangeSlice.reducer;
