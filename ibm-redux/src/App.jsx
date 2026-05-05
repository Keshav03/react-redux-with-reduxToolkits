import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';


function App() {

  return (
     <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/shoppingcart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
