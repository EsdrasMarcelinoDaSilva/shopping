import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import * as C from './style'

type Product = {
    id: number;
    name: string;
    price: number;
}

export const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    const { addToCart } = useContext(CartContext)
    return (
        <C.Container>
            <C.Title>Products</C.Title>
            <C.UnorderedList>
                {products.map((product) => (
                    <C.Description key={product.id}>
                        {product.name} - R$ {product.price}
                        <C.Button onClick={() => addToCart(product)}>Add to cart</C.Button>
                    </C.Description>
                ))}
            </C.UnorderedList>
        </C.Container>
    )
}
