import React from "react";
import './todoItem.css'

function TodoItem(props) {
    return (
        <li className="todoItem">
            <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>
                c
            </span>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="icon icon-delete">
                x
            </span>
        </li>
    );
};

export { TodoItem };