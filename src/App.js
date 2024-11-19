import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
