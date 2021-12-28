import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './components/products/Product';
import ProductList from './components/products/ProductList';

const App = () => {
  const urlState = useSelector(state => state.app.API_URL);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/products-list' element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
