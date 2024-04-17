import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotspotValue: 100,
  highValue: 90,
  sum: 0,
  normal: 0,
  warning: 0,
  alert: 0,
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
    updateNormal(state) {
      state.normal += 1;
    },
    updateWarning(state) {
      state.warning += 1;
    },
    updateAlert(state) {
      state.alert += 1;
    },
  },
});

export const { updateHotspotValue, updateHighValue, updateSum, updateNormal, updateWarning, updateAlert } = rangeSlice.actions;

export default rangeSlice.reducer;
