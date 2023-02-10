import React from "react";
import "./styles.css";

import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter {count}</h2>

            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
        </div>
    );
};
