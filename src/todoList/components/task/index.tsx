import React from "react";
import { useAppDispatch } from "../../hooks/useReactRedux";
import { TaskInterface } from "../../interfaces";

import {
    deleteTask,
    updatingTask,
    updateStateFromTask,
} from "../../todoListSlice";
import "./styles.css";

export const Task = ({ desc, id, imp, name, state }: TaskInterface) => {
    const dispatch = useAppDispatch();
    return (
        <div className={state ? "task taskChecked" : "task taskNoChecked"}>
            <h3>
                {name}{" "}
                <span
                    className={
                        imp === "1"
                            ? "styleRed"
                            : imp === "2"
                            ? "styleYellow"
                            : "styleGreen"
                    }
                ></span>
            </h3>
            <p>
                <small>{desc}</small>
            </p>

            <div>
                <button
                    className="btn btn__del"
                    onClick={() => dispatch(deleteTask(id))}
                >
                    DEL
                </button>
                <button
                    className="btn btn__edit"
                    onClick={() =>
                        dispatch(updatingTask({ desc, id, imp, name, state }))
                    }
                >
                    EDIT
                </button>
                <button
                    className={state ? "btn btn_noChecked" : "btn btn__checked"}
                    onClick={() => dispatch(updateStateFromTask(id))}
                >
                    {state ? "acabar" : "empezar"}
                </button>
            </div>
        </div>
    );
};
