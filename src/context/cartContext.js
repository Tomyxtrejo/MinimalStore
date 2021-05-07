import { createContext, useState, useEffect } from 'react'


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(15)
    

    useEffect(() => {
        let total = 0
        cartItems.map((i) => {
            total = total + i.quantity
        })
        setQuantity(total)
        console.log(cartItems)
    }, [cartItems])

    const isInCart = (id) => {
        let check = cartItems.filter((i) => i.id == id)
        if (check.length) {
            return [true, check[0].quantity]
        }
        return [false]
    }

    const addItem = (item, quantity) => {
        const newItems = cartItems.filter((it) => it.id !== item.id)
        let inCart = isInCart(item.id)
        if (inCart[0]) {
            quantity = inCart[1] + quantity
        }
        setCartItems([...newItems, {
            'id': item.id,
            'item': item,
            'quantity': quantity
        }])
    }

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter((it) => it.id !== itemId))
    }

    const clear = () => {
        setCartItems([])
    }


    return (
        <CartContext.Provider value={{ quantity, addItem, removeItem, isInCart, clear }}>
            {children}
        </CartContext.Provider>
    )
}
