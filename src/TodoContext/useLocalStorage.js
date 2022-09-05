import React from "react";

function useLocalStorage (itemName, initialValue) {

    const [error, setError] = React.useState(false);
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
       try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
       } catch(error){
        setError(error);
       }
    };

    return {
        item,
        saveItems,
        loading,
        error
    };

};

export { useLocalStorage };