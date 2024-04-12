import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Task to do",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      if (action.payload) {
        state.todos.push(todo);
      } else {
        alert("Please add some to do...");
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    //update todo
    updateTodo: (state, action) => {
      const updateTodo = action.payload;
      const existingTodo = state.todos.find(
        (todo) => todo.id === updateTodo.id
      );
      if (existingTodo) {
        existingTodo.text = updateTodo.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
