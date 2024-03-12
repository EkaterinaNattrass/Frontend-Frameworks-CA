import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import NoPage from "./pages/nopage";
import './App.css';
import Nav from "./components/nav";
import Footer from "./components/footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BrowserRouter>
    < Nav />
      <Routes>
         <Route path="/" element={< Home />}/>
          <Route path="contact" element={< Contact />} />
          <Route path="products" element={< Products />} />
          <Route path="details" element={< Details />} />
          <Route path="cart" element={< Cart />} />
          <Route path="checkout" element={< Checkout />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
