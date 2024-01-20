
import {React,useState} from 'react'
import { Box } from '@mui/material';
import { useCart } from './CartContext';
import './cart.css'
import { Delete } from '@mui/icons-material';

const CheckoutCartItem = ({lastAddedProduct},{key}) => {
    const[quantity,setQuantity]= useState(lastAddedProduct.quantityOrdered)
    const {removeCart} = useCart()
    const{cart}= useCart()
    const {updateTotalQuantity}= useCart()
   
     function subtractquan(key)
     {  
         if (quantity<=1)
         {
           setQuantity(1);
         }
   
         else
         {
           setQuantity(prevCount => prevCount-1);
         }
         cart.forEach((item) => {
         
           if (item.key==key)
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
         
         if (item.key==key)
         {
           item.quantityOrdered=quantity
         }
         
     });
       updateTotalQuantity()
     }
   
     return (
           <div style={{display:'flex',flexDirection:'column',width:'100%',height:'20vh'}}>
           <div style={{width:'100%' , height:'100%',display:'flex',flexirection:'row',justifyContent:'space-around' }}>
             <div style={{height:'100%',width:'30%', justifyContent:'center'}}>
               <img src={lastAddedProduct.img} alt='' style={{maxHeight:'100%',maxWidth:'100%'}} ></img>
             </div>
             <div style={{height:"80%",width:'40%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
               <Box sx={{height:'60%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
               <p class='checkout_item_details'> {lastAddedProduct.title} </p>
               <p class='checkout_item_details'>{lastAddedProduct.sizeOfOrder} </p>
               </Box>
               <Box sx={{display:'flex',flexDirection:'row',height:'20%',width:'60%',alignItems:'start'}}>
                     <p class='checkout_item_details'>Quantity : {quantity } </p>
                 </Box>
             </div>
             <div style={{height:"100%",width:'20%',display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}>
             </div>
           </div>

         </div>
       
     )
   
}

export default CheckoutCartItem
