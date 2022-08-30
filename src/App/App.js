import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


const harCodetodos = [
    { text: "cortar cebolla", completed: true},
    { text: "tomar curos de react", completed: false},
    { text: "llorar con la llorona", completed: false}
];

function App() {
    //state
    const [searchValue, setSearchValue] = React.useState('');
    const [todos, setTodos] = React.useState(harCodetodos);
    //variables
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

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

    return (
        <React.Fragment>
            <TodoCounter
            total={totalTodos}
            completed={completedTodos}
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
                />
            ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;