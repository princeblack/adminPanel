import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Widget {
  id: string;
  // add other properties as needed
}

const widgetsSlice = createSlice({
  name: "widgets",
  initialState: [] as Widget[],
  reducers: {
    addWidget: (state, action: PayloadAction<Widget>) => {
      state.push(action.payload);
    },
    removeWidget: (state, action) => {
      return state.filter((widget) => widget.id !== action.payload.id);
    },
  },
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
