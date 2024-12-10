import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (item) => {
        setBasketItems([...basketItems, item]);
    };

    return (
        <BasketContext.Provider value={{ basketItems, addToBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);