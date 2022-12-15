import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProductsPage from "./Pages/Products/ProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";
import SignupPage from "./Pages/Signuppage/SignupPage";
import Login from "./components/Login/Login";
import CreatePage from "./Pages/CreatePage/CreatePage";
import ProductsTablePage from "./Pages/ProductsTablePage/ProductsTablePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
          <Route path ="/signup" element ={<SignupPage />} />
          <Route path ="/login" element ={<Login />} />
          <Route path="/create" element ={<CreatePage />} />
          <Route path ="/productTable" element ={<ProductsTablePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
