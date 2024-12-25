import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  role: string;
}

const initialState: UserState = {
  name: 'Judha Mayusystya',
  role: 'Team Marketing',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
