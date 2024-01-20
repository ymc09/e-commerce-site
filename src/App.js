import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import  Container  from '@mui/material';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Apparel from './Apparel';
import Cart from './CartItems';
import DrawerNav from './DrawerNav';
import VinzPP from './VinzPP';
import BasquiPP from './BasquiPP';
import TysonPP from './TysonPP';
import FooterSm from './FooterSm';
import { CartProvider } from './CartContext';
import Checkout from './Checkout';

function App() 
 {

return(
   <div > 
   
        <CartProvider>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/apparel' element={<Apparel/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/basqui' element={<BasquiPP/>}/>
            <Route path='/vinz' element={<VinzPP/>}/>
            <Route path='/tyson' element={<TysonPP/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
         </Routes>
        </CartProvider>

   </div>
);
   
 }


export default App;
