import React, { useState } from 'react'
import { Box,Container,Button } from "@mui/material";
import './Nav.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useCart } from './CartContext';


const FooterSm = () => {

  const {handleEmailNewsLetter}= useCart() 
  const[mail,setMail]=useState("")

  return (
    <Container disableGutters maxWidth={false} sx={{display:{xs:'flex',md:'none',lg:'none',xl:'none'},minWidth:'100%',flexDirection:'column',justifyContent:'space-around',paddingLeft:'5%',color:'white',height:'600px',backgroundColor:'#353935',overflow:'auto'}}>

    <Box class="footerboxsm" id="about_us_sm" >

    <p class="footerheadersm" >ABOUT US</p>
    <p>VRYL MEANS LIVE FOR MORE</p>


    </Box>

    <Box class="footerboxsm"  id="contact_us_sm" >
      <p class="footerheadersm" id="contactheadersm">CONTACT US</p>
      <Box id="contact_us_text_sm" >
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:'start',alignItems:'start', width:'80%',paddingBottom:'5%'}}>
        <EmailIcon sx={{display:'flex'}}/>
        <p style={{display:'flex',paddingLeft:'3%'}}>vrylbrand@gmail.com</p>
        
        </Box>

        <Box sx={{display:'flex', flexDirection:'row',justifyContent:'start',alignItems:'start', width:'80%'}}>
        <InstagramIcon />
        <p sx={{display:'flex',paddingLeft:'3%'}}>  @shopvryl </p>
        
        </Box>


       
      </Box>
    </Box>
   

    <Box  class="footerboxsm"  id="email_news_letter_sm" >
      <p class="footerheadersm" >SUBSCRIBE TO OUR NEWSLETTER FOR  UPDATES, DEALS, ETC.</p>
      
      <form action="/home" style={{width:'85%', height:'50px', backgroundColor:'#353935',display:'flex',flexDirection:'row',padding:'0',margin:'0'}} >

        <input type='email' required value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Your email"  style={{width:'67%',maxWidth:'100%',backgroundColor:'#161616',color:'white',outline:'none' ,border:'0',borderColor:'red',minHeight:'100%',padding:'0',paddingLeft:'20px',fontSize:'1rem'}}></input>
       <Button onClick={() => handleEmailNewsLetter(mail)} sx={{width:'10%',height:'100%',bgcolor:'gray',padding:'0',color:'#353935',border:'0',borderRadius:'0','&:hover':{opacity:0.6,bgcolor:'grey',transition: 'opacity .25s ease-in-out'}}}> <EmailIcon sx={{padding:'auto'}}/> </Button>
      </form>
      <Box sx={{width:'100%',height:'20%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start'}}>
      <p style={{lineHeight:'2',wordBreak:'break-word',display:'flex',width:'70%'}} >By subscribing, you agree to receive marketing 
      messages from VRYL@ and can unsubscribe at any time.</p>
      </Box>
    </Box>
        
    </Container>
  )
}

export default FooterSm
