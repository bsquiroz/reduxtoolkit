import React, { useEffect, useState } from "react";

import { createTask, updateTask } from "../../todoListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useReactRedux";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    desc: "",
    imp: "1",
};

export const useTaskFormHooks = () => {
    const [valuesTask, setValuesTask] = useState(initialState);
    const { desc, imp, name } = valuesTask;

    const dispatch = useAppDispatch();

    const { whatIsUpdatedTask } = useAppSelector((state) => state.todoList);

    useEffect(() => {
        if (whatIsUpdatedTask) {
            setValuesTask(whatIsUpdatedTask);
        }
    }, [whatIsUpdatedTask]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.trim() === "" || desc.trim() === "") {
            (() => toast.error("Todos los campos son necesarios!!!"))();
            return;
        }

        if (whatIsUpdatedTask) {
            const taskUpdated = {
                ...valuesTask,
                state: whatIsUpdatedTask.state,
                id: whatIsUpdatedTask.id,
            };

            dispatch(updateTask(taskUpdated));
        } else {
            const taskCompleted = {
                ...valuesTask,
                id: crypto.randomUUID(),
                state: false,
            };

            dispatch(createTask(taskCompleted));
        }

        setValuesTask(initialState);
    };

    const handleValues = (name: string, value: string | number) => {
        setValuesTask({
            ...valuesTask,
            [name]: value,
        });
    };
    return {
        handleSubmit,
        whatIsUpdatedTask,
        handleValues,
        ...valuesTask,
    };
};
