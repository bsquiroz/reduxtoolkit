import React from "react";

import { useTaskFormHooks } from "./useTaskFormHooks";
import "./styles.css";

export const TaskForm = () => {
    const { desc, imp, name, handleSubmit, handleValues, whatIsUpdatedTask } =
        useTaskFormHooks();

    return (
        <>
            <form className="taskForm" onSubmit={handleSubmit}>
                <h2>{whatIsUpdatedTask ? "Editar tarea" : "Crear tarea"}</h2>

                <div className="fieldsForm">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => handleValues("name", e.target.value)}
                    />
                </div>

                <div className="fieldsForm">
                    <label htmlFor="desc">Descripcion</label>
                    <textarea
                        name="desc"
                        id="desc"
                        value={desc}
                        onChange={(e) => handleValues("desc", e.target.value)}
                    ></textarea>
                </div>

                <div className="fieldsForm">
                    <label htmlFor="imp">Importancia</label>
                    <select
                        name="imp"
                        id="imp"
                        value={imp}
                        onChange={(e) => handleValues("imp", e.target.value)}
                    >
                        <option value={"1"}>Muy importante</option>
                        <option value={"2"}>Importante</option>
                        <option value={"3"}>Normal</option>
                    </select>
                </div>

                <input
                    className={whatIsUpdatedTask ? "btn__upd" : "btn__create"}
                    type="submit"
                    value={whatIsUpdatedTask ? "Editar" : "Crear"}
                />
            </form>
        </>
    );
};
