import { Container, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import vid  from './slideshow.mp4';



const Body = () => {
  
  return( 
  
    <div style={{display:'flex',p:0,m:0,height:'70vh',width:'100%' ,bgcolor:'green'}}>


      <video autoPlay muted loop id="myVideo" style={{height: "100%" ,width:'100%', objectFit:'cover'}} src={vid}/>
      <div>

      </div>
      {/* <div style={{ position:'absolute', width:'100%', height:'100%', display:"flex", justifyContent: "center",alignItems:"center"}}>
        <Button  sx={{border: 1,borderColor:'blue' ,bgcolor:'transparent' , width:'35vw', height:'10%', fontSize:'100%', display: {sm: 'none' } }}> SHOP NOW </Button>
        <Button sx={{
    
      '&:hover': {
        color: 'black',
        backgroundColor: 'silver',
      } ,color:'gray',position:"relative",borderRadius:2,border: 1,borderColor:'gray' ,bgcolor:'transparent', width:'15vw', height:'12vh', fontSize:'100%', display: {xs:'none',sm: 'flex'}}}> SHOP NOW -></Button>
      </div> */}
      
      

    </div>);
}
 

export default Body
