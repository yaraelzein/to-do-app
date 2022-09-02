import React from "react";
import { AppUI } from "./AppUI";


// const harCodetodos = [
//     { text: "cortar cebolla", completed: false},
//     { text: "tomar curos de react", completed: false},
//     { text: "llorar con la llorona", completed: false}
// ];

function App() {
    const localStorageTodos = localStorage.getItem('TODOS_V0.1');
    let parsedTodos;

    if(!localStorageTodos) {
        localStorage.setItem('TODOS_V0.1', JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos)
    };

    //state
    const [searchValue, setSearchValue] = React.useState('');
    const [todos, setTodos] = React.useState(parsedTodos);
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

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V0.1', stringifiedTodos);
        setTodos(newTodos);
    };

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


    return (
      <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
    );
}

export default App;