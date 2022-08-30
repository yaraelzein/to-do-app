import React from "react";
import './todoSearch.css'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
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