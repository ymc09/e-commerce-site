import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [k, setKey] = useState(() => {
    const storedKey = localStorage.getItem('cartKey');
    return storedKey ? parseInt(storedKey, 10) : 0;
  });
  const [totalPrice,setTP]= useState(1500)
  const[totalQuantity,setTQ]= useState(0)
  const[isOpen, setIsOpen]= useState(false);
  const handleClick=()=> {setIsOpen(true)};
  const closeDrawer=()=>{setIsOpen(false)};


  const addToCart = (productData) => {

    let duplicate= false;

    cart.forEach((item) => {

      
      
      if (item.title===productData.title && item.sizeOfOrder===productData.sizeOfOrder)
      {
        item.quantityOrdered=productData.quantityOrdered+item.quantityOrdered
        duplicate=true
        
      }

      
  });

    if (duplicate===false)
    {
    
    productData.key= k;
    setKey((prevcount) => {
      const newKey = prevcount + 1;
      localStorage.setItem('cartKey', newKey);
      return newKey;
    });

    setCart([...cart, productData]);
      
    }
    updateTotalQuantity()
  };
  const updateTotalPrice = () => {
    setTP(totalQuantity*25)
  };

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem('cart'));
    
    if (savedCart) {
      setCart(savedCart);
    }

  }, []);

  useEffect(() => {
    updateTotalPrice(); 
  }, [totalQuantity]);

  useEffect(() => {
    updateTotalQuantity();
  }, [cart]);



  const updateTotalQuantity= () =>
  {
    let tq=0
    cart.forEach((item) => {
      
      tq+= (item.quantityOrdered)
      
  });
      let intTQ = parseInt(tq,10)
      setTQ(intTQ)
  };

  const updateCart = (savedCart) =>
  {
    setCart(savedCart);
  };

  const removeCart = (key) =>
  {
    
    const updatedCart = cart.filter((item) => item.key !== key);
    setCart(updatedCart);

  }

  const handleEmailNewsLetter= (email) =>
  {
    fetch(`/api/addEmail/${email}`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        console.log('Email added successfully');
      })
      .catch((error) => {
       
        console.error('There was a problem adding the email:', error);
      });
      

  }

  const handleCheckout = (email)=>
  {
    fetch(`/api/addOrder/${email}`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        console.log('Email added successfully');
      })
      .catch((error) => {
        
        console.error('There was a problem adding the email:', error);
      });
      
  }


  return (
    <CartContext.Provider value={{ cart, addToCart,updateCart,removeCart, totalPrice,updateTotalQuantity,totalQuantity,updateTotalPrice,isOpen,handleClick,closeDrawer,k,handleEmailNewsLetter,handleCheckout}}>
      {children}
    </CartContext.Provider>
  );

}
export function useCart() {
  return useContext(CartContext);
}