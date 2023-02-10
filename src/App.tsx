import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./components/container";
import { TodoList } from "./todoList";
// import { Counter } from "./counter";

export const App = () => {
    return (
        <Container>
            <TodoList />
            <ToastContainer />
        </Container>
    );
};
