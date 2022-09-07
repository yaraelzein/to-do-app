import React from "react";
import { TodoContext } from "../TodoContext";
import './todoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="todoSearch" 
            placeholder="text"
            value={searchValue}
            onChange={onSearchValueChange} 
        />
    );
};

export { TodoSearch };