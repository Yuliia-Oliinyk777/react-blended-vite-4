import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const createNewTodo = createAsyncThunk(
  'todos/createNewTodo',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post('/todos', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
