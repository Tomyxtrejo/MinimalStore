import { createContext, useState, useEffect } from 'react'


export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const calculateTotal = (arr) => {
        return arr.reduce((sum, i) => {
          return sum + (i.item.price * i.quantity)
        }, 0)
      };    

    useEffect(() => {
        let totalPrice = 0
        cartItems.map((i) => {
            totalPrice = totalPrice + i.quantity
        })
        setQuantity(totalPrice)
        setTotal(calculateTotal(cartItems))
    }, [cartItems])

    const isInCart = (id) => {
        let check = cartItems.filter((i) => i.id === id)
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

    const clearCart = () => {
        setCartItems([])
    }



    return (
        <CartContext.Provider value={{ cartItems, quantity, addItem, removeItem, isInCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    )
}
