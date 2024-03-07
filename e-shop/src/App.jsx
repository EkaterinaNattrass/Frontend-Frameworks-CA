import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import NoPage from "./pages/nopage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={< Layout />}> */}
          <Route index element={< Home />} />
          <Route path="products" element={< Products />} />
          <Route path="details" element={< Details />} />
          <Route path="cart" element={< Cart />} />
          <Route path="checkout" element={< Checkout />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
