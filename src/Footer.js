import { Box,Container,Button } from "@mui/material";
import './Nav.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useCart} from "./CartContext";
import { useState } from "react";

const Footer = () => {

  const {handleEmailNewsLetter}= useCart() 
  const[mail,setMail]=useState("")

  return (
    <Container disableGutters maxWidth={false} sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'},flexDirection:'row',justifyContent:'center',alignItems:'center',minWidth:'100%',color:'white',height:'300px',backgroundColor:'#353935',position:'relative'}}>

    <Box sx={{display:'flex',flexDirection:'row',height:'200px',width:'100%'}}>

    <Box class="footerbox" id="about_us" >

    <p class="footerheader" >ABOUT US</p>
    <p>VRYL MEANS LIVE FOR MORE</p>


    </Box>

    <Box class="footerbox"  id="contact_us" >
      <p class="footerheader">CONTACT US</p>
      <Box id="contact_us_text" >
        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'start', width:'15%'}}>
        <EmailIcon sx={{display:'flex',paddingBottom:'22%'}}/>
        <InstagramIcon />
        </Box>

        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'start', width:'80%'}}>
        <p style={{display:'flex',paddingBottom:'7%',paddingLeft:'2%',fontSize:'14px'}}>vrylbrand@gmail.com</p>
        <p style={{display:'flex',paddingLeft:'2%',textAlign:'center',fontSize:'14px'}}>  @shopvryl </p>
        
        </Box>

        
       
    </Box>
    </Box>
   

    <Box  class="footerbox"  id="email_news_letter" >
      <p class="footerheader" id="subtitle" >SUBSCRIBE TO OUR NEWSLETTER FOR  UPDATES, DEALS, ETC.</p>
      
      <form action="/home"  style={{width:'75%', height:'35%', backgroundColor:'#161616',display:'flex',flexDirection:'row'}} >

       <input type='email' required value={mail}  onChange={(e) => setMail(e.target.value)} placeholder="Your email" style={{height:'100%',width:'100%',maxWidth:'100%',outline:'none',fontSize:'1rem' ,border:'0',borderColor:'red',minHeight:'100%',padding:'0',marginLeft:'10px',backgroundColor:'#161616',color:'white','&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'}}}></input>
       <Button onClick={() => handleEmailNewsLetter(mail)}  sx={{width:'15%',height:'100%',bgcolor:'gray',color:'#353935',border:'0',borderRadius:'0','&:hover':{opacity:0.6,bgcolor:'grey',transition: 'opacity .25s ease-in-out'}}}> <EmailIcon sx={{}}/> </Button>
      </form>
      <p style={{lineHeight:'2',wordBreak:'break-word',display:'flex',paddingTop:'2%',width:'80%',height:'40%',justifyContent:'end'}} >By subscribing, you agree to receive marketing 
      messages from VRYL@ and can unsubscribe at any time.</p>
    </Box> 
    </Box>        
    </Container>
  )
}

export default Footer
