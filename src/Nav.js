import React from 'react'
import { Container } from '@mui/material';
import {IconButton} from '@mui/material';
import  {ShoppingBag}  from '@mui/icons-material';
import {Box} from '@mui/material';
import { spacing } from '@mui/system';
import {Link} from '@mui/material';
import './Nav.css';
import { Router } from '@mui/icons-material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import logo from './log02.PNG'
import DrawerNav from './DrawerNav';
import CartDrawer from './CartDrawer';


const Nav = () => {
// const audio= new Audio('./effect.mp3');
// function playAudio(){audio.play();}


  return (
    
    <Container disableGutters maxWidth={false} sx={{display:'flex',flexDirection:'row',alignItems:'center',height:'100px',bgcolor:'#ffffed',width:'100%'}}>

     {/* big screen */}
     
     <Box sx={{display: { xs: 'none', sm: 'flex' },justifyContent:'center',alignItems:'center',width:'20%',height:'100%'}}>
     <Link href='/home' sx={{height:'100%',width:'50%', display:'flex',flexDirection:'row',justifyContent:'center','&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'}}}>
        <img src={logo} style={{maxHeight:'100%',maxWidth:'100%',backgroundSize:'cover'}}> 
        </img>
        </Link>
    </Box>

    <Box sx={{width:'30%',height:'100%',display:{xs: 'none', sm:'flex'},paddingLeft:'3%',flexDirection:'row',alignItems:'center', justifyContent:'center',mx:'auto'}}>
    <a class="navlink" href='/home'> Home </a>
    <a class="navlink" href='/apparel' > Apparel</a>

    </Box>



    {/* small screen */}


    <DrawerNav/>

    <Link  href='/home' sx={{display: { xs: 'flex', sm: 'none' },'&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'},justifyContent:'center',width:'20%',height:'100%', mx:'auto'}}>
      <img src= {logo} style={{maxHeight:'100%',maxWidth:'100%',}}/>
    </Link>

   

    
    
    <CartDrawer/>
    
  



    </Container>
  )
}

export default Nav
