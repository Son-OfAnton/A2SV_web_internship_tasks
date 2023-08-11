import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
