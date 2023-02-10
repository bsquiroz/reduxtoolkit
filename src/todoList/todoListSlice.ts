import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskInterface } from "./interfaces";

export interface TasksState {
    tasks: TaskInterface[];
    whatIsUpdatedTask: TaskInterface | null;
}

const initialState: TasksState = {
    tasks: [
        {
            id: "10001",
            name: "aprender ingles",
            desc: "necesito aprender ingles antes de los 25 años",
            state: false,
            imp: "1",
        },
        {
            id: "10002",
            name: "aprender a conducir",
            desc: "hay que aprender a manejar carro",
            state: false,
            imp: "2",
        },
    ],
    whatIsUpdatedTask: null,
};

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<TaskInterface>) => {
            state.tasks = [...state.tasks, action.payload];
        },
        updatingTask: (state, action: PayloadAction<TaskInterface | null>) => {
            state.whatIsUpdatedTask = action.payload;
        },
        updateTask: (state, action: PayloadAction<TaskInterface>) => {
            state.tasks = state.tasks.map((task) => {
                return task.id === action.payload.id ? action.payload : task;
            });
            state.whatIsUpdatedTask = null;
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            state.whatIsUpdatedTask = null;
        },
        updateStateFromTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map((task) => {
                return task.id === action.payload
                    ? { ...task, state: !task.state }
                    : task;
            });
        },
    },
});

export const {
    createTask,
    deleteTask,
    updateTask,
    updatingTask,
    updateStateFromTask,
} = todoListSlice.actions;
export default todoListSlice.reducer;
