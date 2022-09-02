import React from "react";
import { AppUI } from "./AppUI";


// const harCodetodos = [
//     { text: "cortar cebolla", completed: false},
//     { text: "tomar curos de react", completed: false},
//     { text: "llorar con la llorona", completed: false}
// ];

function useLocalStorage (itemName, initialValue) {
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems;

    if(!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = initialValue;
    } else {
        parsedItems = JSON.parse(localStorageItems)
    };

    const [item, setItem] = React.useState(parsedItems);

    const saveItems = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return [
        item,
        saveItems
    ]

};

function App() {
    //state
    const [todos, saveTodos] = useLocalStorage('TODOS_V0.1', [])
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