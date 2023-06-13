import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import * as C from './style'

export const Cart: React.FC = () => {
    const { cartItems, removeFromCart } = useContext(CartContext)
    return (
        <C.CartContainer>
            <C.Title>Cart</C.Title>
            <C.UnorderedList>
                {cartItems.map((item) => (
                    <C.CartItem key={item.product.id}>
                        {item.product.name} - R$ {item.product.price} x     
                        {item.quantity}
                        <C.Button onClick={() => removeFromCart(item.product.id)}>Remove</C.Button>
                    </C.CartItem>
                ))}
            </C.UnorderedList>
        </C.CartContainer>
    )
}