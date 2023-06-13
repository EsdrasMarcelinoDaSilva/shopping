import { Cart } from "./components/cart/Cart"
import { ProductList } from "./components/productList/ProductList"
import { CartProvider } from "./contexts/CartContext"

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
  { id: 5, name: 'Product 5', price: 500 }
]

const App: React.FC = () => {
  
  return (  
    <CartProvider>
      <ProductList products={products}/>
      <Cart/>
    </CartProvider>
  )
}

export default App
