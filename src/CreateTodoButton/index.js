import React from "react";
import './createTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
        className="createTodoButton"
        onClick={() => onClickButton("aqui dberia abrir el modal")}
        >
            +
        </button>
    );
};

export { CreateTodoButton };