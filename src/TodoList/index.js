import React from "react";
import './todoList.css'

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { TodoList };