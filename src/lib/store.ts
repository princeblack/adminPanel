'use client'
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboardSlice';
import salesReducer from '../features/salesSlice';
import userReducer from '../features/userSlice';
import sidebarReducer from "../features/sidebarSlice";

export const makeStore = () => {
 return  configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sales: salesReducer,
    user: userReducer,
    sidebar: sidebarReducer,

    }
  })
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


