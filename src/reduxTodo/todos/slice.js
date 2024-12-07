import { createSlice } from '@reduxjs/toolkit';
import { createNewTodo, deleteTodo, fetchTodos } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filterValue: '',
};

const sliceTodos = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    changeFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
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
      })
      .addCase(createNewTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createNewTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default sliceTodos.reducer;
export const { changeFilter } = sliceTodos.actions;
