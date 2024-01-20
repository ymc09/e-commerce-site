
import React from 'react'
import { Container,Box,p } from '@mui/material'
import Nav from './Nav'
import FooterSm from './FooterSm'
import Footer from './Footer'
import { ShoppingBag } from '@mui/icons-material'
import './pp.css'
import { useState } from 'react'
import { useCart } from './CartContext'



const ProductPage = (props) => {
    
    const [quantity,setQuantity]= useState(1);
    const[size,setSize] = useState('M');
    const[mainImg,setMainImg] = useState(props.img1);
    const [selectedButton,setSelectedButton] = useState('medium');
    const{handleClick}=useCart()
    const handleButtonClick = (value) => {
        setSelectedButton(value);
        if (value=== 'medium')
        {
          setSize('M');
        }

         else if (value==='large')
        {
          setSize('L');
        }
    };
    

    function subtractquan()
    {  
        if (quantity<=1)
        {
          setQuantity(1);
        }

        else
        {
          setQuantity(prevCount => prevCount-1);
        }
    }

    function addquan()
    {
      //do not let it exceed av quantity for product variant. 
      setQuantity(prevCount => prevCount+1);
    }
    
    const productData=
    {
        title: props.title,
        sizeOfOrder: size,
        quantityOrdered: parseInt(quantity,10),
        price:parseInt(25*quantity,10),
        img: props.img1
    }

       
        
    const { addToCart } = useCart();
    
    const handleAddToCart= () =>
    {
      addToCart(productData)
      handleClick()
    }
  


  return (
    <Box>
    
    <Nav/>

    {/* big screen */}

    <Container sx={{display:{xs:'none',md:'flex'},flexDirection:'row',height:'900px',width:'100%',alignItems:'center'}}>

    <Box sx={{width:'100%',height:'60%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      
        <Box sx={{width:'50%',height:'100%',display:'flex',flexDirection:'column',alignItems:"start",justifyContent:'center'}}>
          <Box sx={{width:'100%',height:'90%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <img alt='' src= {mainImg} style={{maxHeight:'100%', maxWidth:'100%'}}/>
          </Box>
        
          <Box id="thumbnails" sx={{display:'flex',flexDirection:'row',height:'20%',paddingLeft:'20%',paddingTop:'3%',width:'50%',justifyContent:'center'}}>
            

            <Box sx={{height:'100%',width:'20%'}}>
                  <img src={props.img1} onClick={() => setMainImg(props.img1)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            <Box sx={{height:'100%',width:'20%'}}>
                  <img src={props.img2} onClick={() => setMainImg(props.img2)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            <Box sx={{height:'100%',width:'20%'}}>
                   <img src={props.img3} onClick={() => setMainImg(props.img3)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            
            
        </Box> 
        </Box>

        <Box sx={{width:'40%',height:'100%', display:'flex',flexDirection:'column',paddingRight:'2%'}}>
        <p  class="product_details" id="title"> {props.title} </p>
        <Box sx={{width:'100%',height:'15%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start'}}>
            <p id="price" class="product_details">{props.price}</p>
          </Box>
        <Box id="sizes">
            <p class="product_details">Size</p>
            <Box  sx={{display:'flex',flexDirection:'row',width:'25%',height:'50%',alignItems:'center'}}>
                <button class="ppbutton" onClick={() => handleButtonClick('medium')}
        className={selectedButton === 'medium' ? 'active' : 'inactive'}> M </button>
                <button class="ppbutton" onClick={() => handleButtonClick('large')}
        className={selectedButton === 'large' ? 'active' : 'inactive'}> L </button>
            </Box>
        </Box>

        <Box id="quantity">
            <p class="product_details" id="quanTitle">Quantity</p>
            <Box sx={{display:'flex',flexDirection:'row',height:'100%',width:'100%',alignItems:'center'}}>
                <button class="ppbutton" onClick={subtractquan}> - </button>
                <form id='quanform' style={{backgroundColor:'transparent'}}><input  id='quanInput' type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value),10)} />
              
                </form> 
                <button class="ppbutton" onClick={addquan}> + </button>
            </Box>
        </Box>

        <Box id="addToCartBox">
          <button id="addToCartButton" class="ppbutton" onClick={handleAddToCart}>
            <ShoppingBag sx={{paddingRight:'3%',fontSize:'25px'}}/>
            <p>ADD TO CART </p>
          </button>
         </Box>

        <Box class="product_details" id="shirt_details">
          <p>100% Heavycotton</p>
          <p>Enzyme Washed</p>
          <p>Top-Stitch Construction For Durability</p>
          <p>Made in Lebanon</p>
        </Box>

        </Box>





    </Box>

    </Container>

    {/* small screen */}

    <Container sx={{display:{xs:'flex',md:'none'},flexDirection:'column',height:'1500px',width:'100%',alignItems:'center',justifyContent:'center'}}>

    <Box sx={{width:'100%',height:'80%',display:'flex',flexDirection:'column',alignItems:'center'}}>
      
        <Box sx={{width:'90%',height:'40%',display:'flex',flexDirection:'column',alignItems:"start",justifyContent:'center'}}>
        <p  class="product_details" id="titleSmall"> {props.title} </p>
          <Box sx={{width:'100%',height:'70%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <img alt='' src= {mainImg} style={{maxHeight:'100%', maxWidth:'100%'}}/>
          </Box>
        
          <Box id="thumbnailsSmall">
            
          
            <Box sx={{height:'100%',width:'20%'}}>
                  <img src={props.img1} onClick={() => setMainImg(props.img1)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            <Box sx={{height:'100%',width:'20%'}}>
                  <img src={props.img2} onClick={() => setMainImg(props.img2)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            <Box sx={{height:'100%',width:'20%'}}>
                   <img src={props.img3} onClick={() => setMainImg(props.img3)} alt="" style={{maxHeight:'100%',maxWidth:'100%'}}/>
            </Box>

            
            
          </Box> 
       </Box>

        <Box sx={{width:'100%',height:'60%', display:'flex',flexDirection:'column',paddingLeft:'10%'}}>
          <Box sx={{width:'100%',height:'15%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start'}}>
            <p class='product_details' id="price">{props.price}</p>
          </Box>

        <Box id="sizesSmall">
            <p class='product_details'>Size</p>
            <Box  sx={{display:'flex',flexDirection:'row',width:'25%',height:'60%',alignItems:'center'}}>
                <button class="ppbutton"  onClick={() => handleButtonClick('medium')}
        className={selectedButton === 'medium' ? 'active' : 'inactive'}> M </button>
                <button class="ppbutton" onClick={() => handleButtonClick('large')}
        className={selectedButton === 'large' ? 'active' : 'inactive'}> L </button>
            </Box>
        </Box>

        <Box id='quantitySmall' sx={{width:'100%',height:'20%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start'}}>
            <p class='product_details' id="quanTitle">Quantity</p>
            <Box sx={{display:'flex',flexDirection:'row',height:'50%',width:'50%', alignItems:'center'}}>
                <button class="ppbutton" onClick={subtractquan}> - </button>
                <form id='quanform' style={{backgroundColor:'transparent'}}><input  id='quanInput' type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value),10)} />
              
                </form> 
                <button class="ppbutton" onClick={addquan}> + </button>
            </Box>
        </Box>

        <Box id="addToCartBoxSmall">
          <button id="addToCartButtonSmall" class="ppbutton" onClick={handleAddToCart}>
            <ShoppingBag sx={{paddingRight:'3%',height:'25%'}}/>
            ADD TO CART 
          </button>
         </Box>

        <Box class='product_details' id="shirt_detailsSmall" >
          <p>100% Heavycotton</p>
          <p>Enzyme Washed</p>
          <p>Top-Stitch Construction For Durability</p>
          <p>Made in Lebanon</p>
        </Box>

        </Box>





    </Box>

    
   

    </Container>

    <Footer/>
    <FooterSm/>
    </Box>
  )}

export default ProductPage
