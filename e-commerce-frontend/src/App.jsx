import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home"

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="min-h-screen w-380 flex flex-col bg-gray-100 text-gray-800">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-2xl font-bold text-blue-600">
            MERN Ecommerce
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              to="/home"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-blue-600 transition"
            >
              Products
            </Link>
            <Link
              to="/addproduct"
              className="hover:text-blue-600 transition"
            >
              Add Product
            </Link>

            <Link
              to="/cart"
              className="hover:text-blue-600 transition"
            >
              Cart
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-blue-600 px-2 text-xs text-white">
                {cart.length}
              </span>
            </Link>

            {localStorage.getItem("user") ? (
              <button
                onClick={logout}
                className="rounded-md bg-red-500 px-4 py-1.5 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded-md bg-blue-600 px-4 py-1.5 text-white hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        <Routes>
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © 2025 MERN Ecommerce Project. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
