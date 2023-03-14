import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { DataProvider } from "./components/context";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import './theme/index.css'
import Form from "./Form";

function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={<Form />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
