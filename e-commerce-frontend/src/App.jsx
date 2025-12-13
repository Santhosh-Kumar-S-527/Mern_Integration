import {Link, Route, Routes} from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import { useEffect, useState } from 'react'
import Cart from './components/Cart';
import BuyNow from './components/BuyNow';
import Login from './components/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import AddProduct from './components/AddProduct';
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));}, [cart]);
  const logout = () => {
    localStorage.removeItem("user");
    window,location.reload();
  }
  return (
    <>
    <div>
      <header>
        <Link to = "/"><h1>MERN Ecommerce Project</h1></Link>
        <Link to = "/addproduct">Add Product</Link>{ " | "}
        <Link to = "/cart">Cart ({cart.length})</Link> {" | "}
        {localStorage.getItem("user") ? (
          <button onClick = {logout}>Logout</button>
        ) : (<Link to = "/login">Login</Link>)}
      </header>
      <main>
        <Routes>
          <Route path = "/" element = {<Products cart = {cart} setCart={setCart}/>}></Route>
          <Route path = "/product/:id" element = {<Product />}></Route>
          <Route path = "/cart" element = {
            <ProtectedRoute>
            <Cart cart = {cart} setCart = {setCart}/>
            </ProtectedRoute>
          }></Route>
          <Route path = "/buynow/:id" element = {
            <ProtectedRoute>
              <BuyNow />
            </ProtectedRoute>
          }></Route>
          <Route path = "/login" element = {<Login />}></Route>
          <Route path = "/addproduct" element = {<AddProduct />}></Route>
        </Routes>
      </main>
      <footer>
        <p>&#169; 2025 MERN Ecommerce Project</p>
      </footer>
    </div>
    </>
  )
}
export default App