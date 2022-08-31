import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


const harCodetodos = [
    { text: "cortar cebolla", completed: false},
    { text: "tomar curos de react", completed: false},
    { text: "llorar con la llorona", completed: false}
];

function App() {
    //state
    const [searchValue, setSearchValue] = React.useState('');
    const [todos, setTodos] = React.useState(harCodetodos);
    //variables
    //para el contador - camtidad de completados y de totales todos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //para el filtro 
    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        })
    }

    //para completar
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo[todoIndex].completed = true;
        setTodos(newTodo);
    };

    //para eliminar
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo.splice(todoIndex, 1);
        setTodos(newTodo);
    };


    return (
        <React.Fragment>
            <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            />

            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            <TodoList>
            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;