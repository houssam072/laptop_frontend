import { Routes ,Route  } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import AllProduct from './pages/allProduct/AllProduct';
import Product_detailes from './pages/product_detailes/Product_detailes';
import AdminPanel from './pages/adminPanel/AdminPanel';
import AdminCat from './pages/adminPanel/AdminCat';
import OrderProduct from './pages/orderProduct/OrderProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/register' element = {<Register />}/>
        <Route path = '/admin' element = {<AdminPanel />}/>
        <Route path = '/AdminCat' element = {<AdminCat />}/>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/all-product' element = {<AllProduct />}/>
        <Route path = '/product-detailes/:id/' element = {<Product_detailes />}/>
        <Route path = '/order' element = {<OrderProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
