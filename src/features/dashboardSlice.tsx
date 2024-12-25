import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  totalIncome: number;
  profit: number;
  pendingOrders: number;
  conversionRate: number;
  revenueOverTime: number;
  revenueBreakdown: {
    online: number;
    offline: number;
  };
  conversion: {
    converted: number, 
    notConverted: number, 
  },

}

const initialState: DashboardState = {
  totalIncome: 994373,
  profit: 920650,
  pendingOrders: 420,
  conversionRate: 4.38,
  revenueOverTime: 90650278,
  revenueBreakdown: {
    online: 4650278,
    offline: 2000000,
  },
  conversion: {
    converted: 320, 
    notConverted: 180, 
  },

};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateDashboard: (state, action: PayloadAction<Partial<DashboardState>>) => {
      return { ...state, ...action.payload };
    },
    updateConversion: (state, action) => {
      state.conversion = action.payload;
    },
  },
});

export const { updateDashboard, updateConversion } = dashboardSlice.actions;
export default dashboardSlice.reducer;
