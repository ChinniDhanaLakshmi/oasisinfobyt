import React from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route , Link , Switch, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Userslist from './screens/Userslist';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Editpizza from './screens/Editpizza';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<Homescreen/>}/>
        <Route path="/cart" exact element={<Cartscreen/>}/>
        <Route path="/register" exact element={<Registerscreen/>}/>
        <Route path="/login"  exact element={<Loginscreen/>}/>
        <Route path="/orders"  exact element={<Ordersscreen/>}/>
        <Route path="/admin" element={<Adminscreen/>}/>
        <Route path="/admin/userslist" exact element={<Userslist/>}/>
        <Route path="/admin/orderslist" exact element={<Orderslist/>}/>
        <Route path="/admin/pizzaslist" exact element={<Pizzaslist/>}/>
        <Route path="/admin/addpizza" exact element={<Addpizza/>}/>
        <Route path="/admin/editpizza/:pizzaid" exact element={<Editpizza/>}/>
        
      </Routes>    

      </BrowserRouter>
    
    </div>
  );
}

export default App;
