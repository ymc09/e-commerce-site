import React, { useState } from 'react'
import { Box } from '@mui/material'
import './checkout.css'
import CheckoutCartDrawer from './CheckoutCartDrawer';
import { useCart } from './CartContext'
import CheckoutNav from './CheckoutNav'

const Checkout = () => {
  
  const{handleCheckout}= useCart()
  const[mail,setMail]=useState("")

  const checkoutClick = () => 
  {
    localStorage.setItem('cart',JSON.stringify([]))
    handleCheckout(mail)
  }

  return (
    <div style={{width:'100%',height:'100%'}}>

    {/* big screen */}

    <CheckoutNav/>
    <Box sx={{width:'100%',height:'800px',display:{xs:'none',md:'flex'},flexDirection:'row'}}>
    <Box sx={{width:'80%',height:'80%', display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'30px',margin:'10px'}}>
      <form action='/home' style={{width:'60%',height:'60%'}}>
      <Box  style={{width:'100%',height:'40%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Contact</p>
      <input  id='contact' value={mail} onChange={(e) => setMail(e.target.value)} className='checkoutinputs' placeholder='Enter your email address' type='email' required></input>
      </Box>
      <Box  style={{width:'100%',height:'40%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Delivery</p>
      <select id='payment' className='checkoutinputs' name="paymentMethod">
      <option value="cashOnDelivery">Cash On Delivery</option>
      </select>
      </Box>
      <Box  style={{width:'100%',height:'80%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Address</p>
      <Box sx={{width:'80%',height:'15%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <input  id='nameinput' className='checkoutinputs'  placeholder='First name' type='text' name='First Name: ' required></input>
      <input  id='nameinput' className='checkoutinputs'  placeholder='Last name' type='text'   name='Last name:' required></input>      
      </Box>
      <p class='checkoutTitle'>Country</p>
      <select id='countries' className='checkoutinputs'>
      <option value="leb">Lebanon</option>
      </select>
      </Box>
      <Box sx={{height:'40%',width:'100%',display:'flex',flexDirection:"column",justifyContent:'space-around'}}>
      <p class='checkoutTitle'>Street Address</p>
      <input id='addressinput' className='checkoutinputs'  placeholder='Enter your address'  required></input>
      </Box>
      <Box id= "checkBox">
      <button id="checkButton" onClick={checkoutClick}>CHECKOUT</button>
      </Box>
      </form>
    </Box>
    
      
    <CheckoutCartDrawer/>
    </Box>

    {/* small screen */}

    <Box sx={{width:'100%',height:'1200px',display:{xs:'flex',md:'none'},flexDirection:'column'}}>
    <Box sx={{height:'30%'}}>
      <CheckoutCartDrawer/>
    </Box>
    <Box sx={{width:'80%',height:'70%', display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'30px',margin:'10px'}}>
      <form action='/' style={{width:'60%',height:'100%'}}>
      <Box  style={{width:'100%',height:'20%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Contact</p>
      <input id='contactsm' value={mail} onChange={(e) => setMail(e.target.value)} className='checkoutinputs' placeholder='Enter your email address' type='email' required></input>
      </Box>
      <Box  style={{width:'100%',height:'20%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Delivery</p>
      <select id='paymentsm' className='checkoutinputs' name="paymentMethod">
      <option value="cashOnDelivery">Cash On Delivery</option>
      </select>
      </Box>
      <Box  style={{width:'100%',height:'30%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <p class='checkout_header'>Address</p>
      <Box sx={{width:'100%',height:'15%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <input  id='nameinputsm' className='checkoutinputs'  placeholder='First name' type='text' name='First Name: ' required></input>
      <input  id='nameinputsm' className='checkoutinputs'  placeholder='Last name' type='text'   name='Last name:' required></input>      
      </Box>
      <p class='checkoutTitle'>Country</p>
      <select id='countriessm' className='checkoutinputs'>
      <option value="leb">Lebanon</option>
      </select>
      </Box>
      <Box sx={{height:'15%',width:'100%',display:'flex',flexDirection:"column",justifyContent:'space-around'}}>
      <p class='checkoutTitle'>Street Address</p>
      <input id='addressinputsm' className='checkoutinputs'  placeholder='Enter your address'  required></input>
      </Box>
      <Box id= "checkBoxsm">
      <button id="checkButtonsm" onClick={checkoutClick}>CHECKOUT</button>
      </Box>
      </form>
    </Box>
    </Box>
    </div>
  )
}

export default Checkout
