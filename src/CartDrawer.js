import React from 'react'
import { Drawer,Box,Stack,IconButton,p} from '@mui/material'
import { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { ShoppingBag } from '@mui/icons-material';
import { CreditCard } from '@mui/icons-material';
import './cart.css'
import CartItems from './CartItems'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useCart } from './CartContext';
import { useEffect } from 'react';


const CartDrawer = () => {

const{isOpen}=useCart()
const{handleClick}=useCart()
const{closeDrawer}=useCart()

const [showButton, setShowButton] = useState(false);
const {cart}=useCart();
const {totalPrice}= useCart()
const{updateTotalQuantity}= useCart()

useEffect(() => {
  // Update showButton state based on cart length
  setShowButton(cart.length !== 0);
  updateTotalQuantity()
}, [cart.length]); // Run this effect whenever cart.length changes





  return (
    <Box sx={{display:'flex', height:'100%', width:'20%',justifyContent:'center',alignItems:'center'}}>

<IconButton size="large" variant="contained" onClick={handleClick} sx={{height:'30%',width:'15%','&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'}}}>

    <ShoppingBag sx={{color:'black'}}/>
</IconButton>

    {/* big screen */}

    <Drawer sx={{display:{xs:'none',md:'flex'},color:'black'}}  anchor="right" open={isOpen} onClose={closeDrawer}>

        <Stack spacing={2} sx={{width:'35vw', height:'100vh' ,display:'flex',alignItems:'center', bgcolor:'#fffef7'}}>
        
          <Box id="header" sx={{height:'15%',width:'35vw',bgcolor:'#ffffed', justifyContent:'space-between',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingLeft:'5%',alignItems:'center',width:'15vw',height:'100%'}}>
                
                <Box sx={{height:'50%',width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <ShoppingCart sx={{height:'60%',color:'black'}}/>
                </Box>
                <p class='header_details'>YOUR CART</p>
              </Box>
              <IconButton onClick={closeDrawer} sx={{height:'40%',borderRadius:'0',width:'10%',marginRight:'6%',display:'flex'}}> <DisabledByDefaultIcon sx={{color:'black'}}></DisabledByDefaultIcon> </IconButton>

          </Box>
          
          <Box id="products"sx={{height:'75%',width:'100%',bgcolor:'#fffef7',flex:'1',overflowY: 'auto'}}>
            <CartItems/>
          </Box>
          <Box id="subtotal" sx={{height:'25%',width:'35vw',bgcolor:'#ffffed',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{height:"40%",width:'80%',display:'flex',flexDirection:'row',paddingTop:'1%',justifyContent:'space-between',alignItems:'center'}}>
              <p class='header_details'>SUBTOTAL</p>
              <p class='header_details'>{`${totalPrice} $`} </p>
            </Box>
          <a href='/checkout' style={{height:'40%',width:'60%',display:'flex',textDecoration:'none',padding:'0',margin:'0'}}>
          {showButton && <button id="checkout" > CHECKOUT </button>}
          </a>
          </Box> 

        </Stack>


    </Drawer>



    {/* small screen */}

    <Drawer  sx={{display:{xs:'flex',md:'none',lg:'none',xl:'none'},color:'black'}} anchor="right" open={isOpen} onClose={closeDrawer}>

        <Stack spacing={2} sx={{width:'70vw', height:'100%' ,display:'flex',alignItems:'center', bgcolor:'#fffef7'}}>
        
        <Box id="header" sx={{height:'15%',width:'70vw',bgcolor:'#ffffed', justifyContent:'space-between',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingLeft:'5%',alignItems:'center',width:'35vw',height:'100%'}}>
                <ShoppingCart sx={{paddingRight:'1%',color:'black'}}/>
                <p class='header_details'>YOUR CART</p>
              </Box>
              <IconButton onClick={closeDrawer} sx={{height:'40%',borderRadius:'0',width:'10%',marginRight:'6%',display:'flex'}}> <DisabledByDefaultIcon sx={{color:'black'}}></DisabledByDefaultIcon> </IconButton>

          </Box>
          
          
          <Box id="products"sx={{height:'60%',width:'100%',bgcolor:'#fffef7',flex:'1',overflowY: 'auto'}}>
            <CartItems/>
          </Box>
          <Box id="subtotal" sx={{height:'25%',width:'70vw',bgcolor:'#ffffed',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Box sx={{height:"40%",width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <p class='header_details'> SUBTOTAL </p>
            <p class='header_details'> {`${totalPrice} $`}  </p>
          </Box>
          <a href='/checkout' style={{height:'35%',width:'60%',display:'flex',textDecoration:'none',padding:'0',margin:'0'}}>
          {showButton && <button id="checkoutsm" > CHECKOUT </button>}
          </a>
         
          </Box>

        </Stack>


    </Drawer>
    




    </Box>

    
  )
}

export default CartDrawer
