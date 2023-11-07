import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  property: 0,
  location: 0,
  meters: 20,
  quotations: []
};
export const dataSlice = createSlice({

  name: "data",
  initialState,
  reducers: {
    changeProperty: (state, action) => {
      const { property } = action.payload;
      state.property = property;
    },

    changeLocation: (state, action) => {
      const { location } = action.payload;
      state.location = location;
    },

    changeMeters: (state, action) => {
      const { meters } = action.payload;

      state.meters = meters;
    },

    saveQuotation: (state, action) => {
    state.quotations.push(action.payload);
    },

  
  },
});

export const { changeProperty, changeLocation, changeMeters,saveQuotation} =
  dataSlice.actions;
export default dataSlice.reducer;
