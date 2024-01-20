import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCart } from './CartContext'
import { useState } from 'react';
import { PropaneSharp } from '@mui/icons-material';
import { Box } from '@mui/material';
import CartItem from './CartItem';

const CartItems = () => {
  
  const {cart}=useCart()
  
  const[quantity,setQuantity]= useState(1)
  console.log(cart)
 
  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart))
    
  }, [cart]);

  
  return (
    <div style={{height:'100%',width:'100%'}}>
      {cart.map((item) => (
        <CartItem
          lastAddedProduct={item}
        />
      ))}
  </div>
  )
}



export default CartItems

