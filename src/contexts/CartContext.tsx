import { createContext, useState } from 'react'

type Product = {
    id: number;
    name: string;
    price: number;
}
type CartItem = {
    product: Product;
    quantity: number;
}
type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}
export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => false,
    removeFromCart: () => false,
})
type CartProviderProps = {
    children: React.ReactNode;
}
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setCartItems((prev) => {
            const itemIndex = prev.findIndex((item => item.product.id === product.id))
            if(itemIndex >= 0 ){
                const newItem = [...prev]
                newItem[itemIndex].quantity += 1
                return newItem
                    } else {
                        return [...prev, { product, quantity: 1 }]
                    }
                })
            }
    const removeFromCart = (productId: number) => {
        setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
        }

        return(
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        )    
}