/* 
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const todo = {
                id: nanoid(),
                text: action.payload,
                //action ma data aauxa
            }

            console.log(state.todos);
            state.todos.push(todo);//state le current state ko access dinxa

        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log(state.todos);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; */


import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer