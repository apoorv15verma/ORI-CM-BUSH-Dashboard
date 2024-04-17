import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotspotValue: 80,
  highValue: 60,
  range1: 0,
  range2: 0,
  range3: 0,
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
    updateRange1(state, action) {
      state.range1 = action.payload;
    },
    updateRange2(state, action) {
      state.range2 = action.payload;
    },
    updateRange3(state, action) {
      state.range3 = action.payload;
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

export const { updateHotspotValue, updateHighValue, updateRange1, updateRange2, updateRange3 , updateNormal, updateWarning, updateAlert } = rangeSlice.actions;

export default rangeSlice.reducer;
