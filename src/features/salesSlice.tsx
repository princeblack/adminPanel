import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SalesState {
  products: { name: string; sold: number }[];
  categories: { name: string; sales: number }[];
}

const initialState: SalesState = {
  products: [
    { name: 'iPhone 14', sold: 213 },
    { name: 'Galaxy Tab S9', sold: 182 },
    { name: 'WH-1000XM5', sold: 152 },
  ],
  categories: [
    { name: 'Électronique', sales: 54071 },
    { name: 'Mode', sales: 32210 },
    { name: 'Maison et Décoration', sales: 24410 },
  ],
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    updateSales: (state, action: PayloadAction<Partial<SalesState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSales } = salesSlice.actions;
export default salesSlice.reducer;
