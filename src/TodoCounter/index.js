import React from "react";
import "./todoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
    return (
        <h2 className="todoCounter">has comlpetado {completedTodos} de {totalTodos} todos</h2>
    );
};

export { TodoCounter }