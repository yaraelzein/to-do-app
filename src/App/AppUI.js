import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {

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
            {loading && <p> estamos cargado </p>}
            {error && <p>oops hubo un error</p>}
            {(!loading && !searchedTodos.lenght) && <p> crea tu primer todo</p> }

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
    
        <CreateTodoButton/>
    </React.Fragment>
    )
};

export { AppUI }