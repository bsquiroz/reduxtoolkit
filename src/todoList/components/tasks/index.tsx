import React from "react";
import "./styles.css";

import { Task } from "../task";
import { useAppSelector } from "../../hooks/useReactRedux";

export const Tasks = () => {
    const { tasks } = useAppSelector((state) => state.todoList);

    return (
        <div className="tasks">
            {tasks.map(({ desc, id, imp, name, state }) => (
                <Task
                    key={id}
                    id={id}
                    name={name}
                    desc={desc}
                    state={state}
                    imp={imp}
                />
            ))}
        </div>
    );
};
