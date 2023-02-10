import React from "react";
import "./styles.css";

import { Tasks } from "./components/tasks";
import { TaskForm } from "./components/taskForm";

export const TodoList = () => {
    return (
        <div className="todoList">
            <Tasks />
            <TaskForm />
        </div>
    );
};
