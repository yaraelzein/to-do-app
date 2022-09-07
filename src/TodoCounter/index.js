import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoCounter.css";

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="todoCounter">has comlpetado {completedTodos} de {totalTodos} todos</h2>
    );
};

export { TodoCounter }