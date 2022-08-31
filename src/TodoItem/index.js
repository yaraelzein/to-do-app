import React from "react";
import './todoItem.css'

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('ya completaste el todo ' + props.text);
    // };

    // const onDelete = () => {
    //     alert('borraste el todo ' + props.text);
    // }

    return (
        <li className="todoItem">
            <span 
                onClick={props.onComplete}
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
            >
                c
            </span>
            <p
                className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                onClick={props.onDelete} 
                className="icon icon-delete"
            >
                x
            </span>
        </li>
    );
};

export { TodoItem };