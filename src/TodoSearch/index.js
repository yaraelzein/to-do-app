import React from "react";
import './todoSearch.css'

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <input 
            className="todoSearch" 
            placeholder="text"
            onChange={onSearchValueChange} 
        />
    );
};

export { TodoSearch };