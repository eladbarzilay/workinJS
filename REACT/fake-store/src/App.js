
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CategoriesProduct from './components/CategoriesProduct';
import ProductDetails from './components/ProductDetails';
import Categories from './components/Categories';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <Header/>
        <Cart/>
            <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="/categoriesProducts/:category" element={<CategoriesProduct/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>

        </Routes>
      
    </div>
  );
}

export default App;
