import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectFilter = state => state.todos.filterValue;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filterValue) => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filterValue.toLowerCase()),
    );
  },
);
