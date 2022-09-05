import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V0.1', [])
    const [searchValue, setSearchValue] = React.useState('');
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
        saveTodos(newTodo);
    };

    //para eliminar
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo.splice(todoIndex, 1);
        saveTodos(newTodo);
    };
    
    
    return(
        <TodoContext.Provider value ={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };