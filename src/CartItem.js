import {React,useState} from 'react'
import { Box } from '@mui/material';
import { useCart } from './CartContext';
import './cart.css'
import { Delete } from '@mui/icons-material';
import { useEffect } from 'react';

const CartItem = ({lastAddedProduct},{key}) => {

  const[quantity,setQuantity]= useState(lastAddedProduct.quantityOrdered)
 const {removeCart} = useCart()
 const{cart}= useCart()
 const {updateTotalQuantity}= useCart()
 const {updateTotalPrice}= useCart()

  function subtractquan(key)
  {  
      if (quantity<=1)
      {
        removeCart(key)
      }

      else
      {
        setQuantity(prevCount => prevCount-1);
      }
      cart.forEach((item) => {
      
        if (item.key===key)
        {
          item.quantityOrdered=quantity
        }
        
    });

      updateTotalQuantity()
      
  }


  

  function addquan(key)
  {
    //do not let it exceed av quantity for product variant. 
    setQuantity(prevCount => prevCount+1);
    cart.forEach((item) => {
      
      if (item.key===key)
      {
        item.quantityOrdered=quantity
      }
      
  });
    updateTotalQuantity()
  }

  useEffect(() => {
    // Update showButton state based on cart length
    
    updateTotalQuantity()
  }, [cart]);

  return (
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'200px'}}>
        <div style={{width:'100%' , height:'65%',display:'flex',flexDirection:'row',justifyContent:'space-around' }}>
          <div style={{height:'100%',width:'30%', justifyContent:'center'}}>
            <img src={lastAddedProduct.img} alt='' style={{maxHeight:'100%',maxWidth:'100%'}} ></img>
          </div>
          <div style={{height:"100%",width:'40%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
            <p class='item_details'>{lastAddedProduct.title} </p>
            <p class='item_details'>{lastAddedProduct.sizeOfOrder} </p>
            <Box sx={{display:'flex',flexDirection:'row',height:'40%',width:'60%',alignItems:'center'}}>
                  <button id='quanButton' onClick={() => subtractquan(lastAddedProduct.key)}> - </button>
                  <form style={{backgroundColor:'transparent'}}><input class='item_details' id='quanInput' type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value),10)} />
                
                  </form> 
                  <button id='quanButton' onClick={() => addquan(lastAddedProduct.key)}> + </button>
              </Box>
          </div>
          <div style={{height:"100%",width:'20%',display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}>
          <button id='delete' onClick={() => {removeCart(lastAddedProduct.key)}} style={{height:'15%',width:'50%',backgroundColor:'transparent',border:'0',display:'flex',flexDirection:'row',justifyContent:'row','&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'}}} >
            <Delete/>
          </button>


          </div>
        </div>
        <div style={{height:'25%',width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        <div style={{height:'100%',width:'30%',backgroundColor:'black', display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <p class='item_details' style={{color:'white'}}>Price: </p>
        <p class='item_details' style={{color:'white'}}>{`${25*quantity} $`}</p>
        </div>
        </div>
      </div>
    
  )
}

export default CartItem
