import React from "react";
import "./todoCounter.css";

function TodoCounter({ total, completed }) {
    return (
        <h2 className="todoCounter">has comlpetado {completed} de {total} todos</h2>
    );
};

export { TodoCounter }