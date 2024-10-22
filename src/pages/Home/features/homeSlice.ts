import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
