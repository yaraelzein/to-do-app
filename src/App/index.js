import React from "react";
import { AppUI } from "./AppUI";


// const harCodetodos = [
//     { text: "cortar cebolla", completed: false},
//     { text: "tomar curos de react", completed: false},
//     { text: "llorar con la llorona", completed: false}
// ];

function useLocalStorage (itemName, initialValue) {

    const [error, setError] = React.useState
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItems;
        
                if(!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue;
                } else {
                    parsedItems = JSON.parse(localStorageItems)
                };

                setItem(parsedItems);
                setLoading(false);
            }catch(error){
                setError(error);
            };

        }, 2000);
    })

    const saveItems = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    };

    return {
        item,
        saveItems,
        loading,
        error
    };

};

function App() {
    //state
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

    // console.log('render(antes del use effect)');

    // React.useEffect(() => {
    //     console.log('use effect')
    // });

    // console.log('render (despues del use effect)');


    return (
      <AppUI 
      error={error}
      loading={loading}
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