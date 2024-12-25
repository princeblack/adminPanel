import { createSlice } from "@reduxjs/toolkit";

const widgetsSlice = createSlice({
  name: "widgets",
  initialState: [],
  reducers: {
    addWidget: (state, action) => {
      state.push(action.payload);
    },
    removeWidget: (state, action) => {
      return state.filter((widget) => widget.id !== action.payload.id);
    },
  },
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
