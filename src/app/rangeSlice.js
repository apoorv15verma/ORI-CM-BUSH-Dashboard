import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotspotValue: 100,
  highValue: 90,
  sum: 0,
};

const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    updateHotspotValue(state, action) {
      state.hotspotValue = action.payload;
    },
    updateHighValue(state, action) {
      state.highValue = action.payload;
    },
    updateSum(state, action) {
      state.sum = action.payload;
    },
  },
});

export const { updateHotspotValue, updateHighValue, updateSum } = rangeSlice.actions;

export default rangeSlice.reducer;
