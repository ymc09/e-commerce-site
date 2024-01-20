import React, { ReactNode, createContext, useContext, useState } from "react"

type CartItem =
{
    id: number
    quantitiy: number
}

type ShoppingCartProviderProps =
{
    children: ReactNode
}

type ShoppingCartContext ={

    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    subtractQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export function useShoppingCart () {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps)
{
    const [cartItem, setCartItem] = useState<CartItem[]>([])
    return (
        <ShoppingCartContext.Provider value={{increaseQuantity(id)}}>
        {children}
        </ShoppingCartContext.Provider>
    )
}
