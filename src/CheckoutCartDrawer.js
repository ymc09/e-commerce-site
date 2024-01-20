import React from 'react'
import { Stack,Box, p} from '@mui/material'
import CartItems from './CartItems'
import { useCart } from './CartContext';
import { ShoppingCart } from '@mui/icons-material';
import { CreditCard } from '@mui/icons-material';
import CartItem from './CartItem';
import CheckoutCartItem from './CheckoutCartItem';

const CheckoutCartDrawer = () => {

const {cart}=useCart();

const {totalPrice}= useCart()


return (
  <div style={{width:'45%', height:'100%'}}>
  <Stack spacing={2} sx={{ position: 'sticky', top: 0, height: '100vh', right: '0', width: '100%', display:{xs:'none',md:'flex'}, alignItems: 'center', bgcolor: '#fffef7' }}>
      <Box id="header" sx={{ height: '15%', width: '35vw', bgcolor: '#ffffed', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingLeft: '5%', alignItems: 'center', height: '100%' }}>
          <p class='header_details'>ORDER SUMMARY</p>
        </Box>
      </Box>
      <Box id="products" sx={{ height: '55%', width: '100%', bgcolor: '#fffef7' }}>
      <div>
      {cart.map((item) => (
        <CheckoutCartItem
          lastAddedProduct={item}
        />
      ))}
  </div>
      </Box>
      <Box id="subtotal" sx={{ height: '30%', width: '35vw', bgcolor: '#ffffed', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ height: "40%", width: '80%', display: 'flex', flexDirection: 'row', paddingTop: '1%', justifyContent: 'space-between', alignItems: 'center' }}>
          <p class='header_details'>SUBTOTAL</p>
          <p class='header_details'>{`${totalPrice} $`} </p>
        </Box>
      </Box>
    </Stack>


    <Stack spacing={2} sx={{height: '100%', top:'0',width: '100vw', display:{xs:'flex',md:'none'}, alignItems: 'center', bgcolor: '#fffef7' }}>
      <Box id="header" sx={{ height: '30%', width: '100vw', bgcolor: '#ffffed', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingLeft: '5%', alignItems: 'center', height: '100%' }}>
          <p class='header_details'>ORDER SUMMARY</p>
        </Box>
      </Box>
      <Box id="products" sx={{ height: '50%', width: '100%', bgcolor: '#fffef7',flex:'1',overflowY: 'auto'}}>
      <div sx={{width:'100%',height:'100%'}}>
      {cart.map((item) => (
        <CheckoutCartItem
          lastAddedProduct={item}
        />
      ))}
  </div>
      </Box>
      <Box id="subtotal" sx={{ height: '20%', width: '100vw', bgcolor: '#ffffed', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
        <Box sx={{ height: "80%", width: '80%', display: 'flex', flexDirection: 'row', paddingTop: '1%', justifyContent: 'space-between', alignItems: 'center' }}>
          <p class='header_details'>SUBTOTAL</p>
          <p class='header_details'>{`${totalPrice} $`} </p>
        </Box>
      </Box>
    </Stack>
    </div>
  )
}

export default CheckoutCartDrawer
