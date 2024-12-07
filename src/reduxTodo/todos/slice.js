import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const sliceTodos = createSlice({
  name: 'todos',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default sliceTodos.reducer;
