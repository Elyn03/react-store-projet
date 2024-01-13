import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const clearCart = () => {
        setCart([])
    }

    return (<CartContext.Provider value={{ cart, addToCart, clearCart }}>
        {children}
    </CartContext.Provider>)
}

export function useCart() {
    return useContext(CartContext)
}