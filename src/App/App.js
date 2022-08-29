import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


const todos = [
    { text: "cortar cebolla", completed: false},
    { text: "tomar curos de react", completed: false},
    { text: "llorar con la llorona", completed: false}
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
            {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text}/>
            ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;