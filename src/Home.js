import React from 'react'
import { Box,Button,Link } from '@mui/material'
import Video from './Video'
import Nav from './Nav'
import Footer from './Footer'
import FooterSm from './FooterSm'

const Home = () => {
  return (

    <Box sx={{width:'100%',height:'100%'}}>
    <Nav/>
      <Box sx={{bgcolor:'transparent', height:'85vh',position:'relative',display:'flex',justifyContent:'center',alignItems:'center',overflow: 'hidden'}}>
     
      {/* big screen */}
      <Link href='/apparel' sx={{width:'15%',height:'12%',display:{xs:'none',sm:'none',md:'flex'},textDecoration:'none',color:'silver',justifyContent:'center',alignItems:'center', fontSize:'20px', bgColor:'transparent', border:'2',borderColor:'black'}}>
       <Button sx={{'&:hover': {
    backgroundColor: '#353935',
    color:'white',
    boxShadow: 'none',borderColor:'#353935',transition:  'background-color .25s ease-in-out , color .25s ease-in-out'
  },width:'100%',maxWidth:'100%',height:'100%' ,color:'#353935',fontWeight:'1000',fontfamily: "With My Woes",fontSize:'1.2rem', bgColor:'transparent', border:'solid 1px',borderColor:'#353935'}}><p style={{fontFamily:"With My Woes"}}>SHOP NOW </p></Button> 
        </Link>

    {/* small screen */}

        <Link href='/apparel' sx={{width:'35%',height:'12%',display:{xs:'flex',md:'none'},textDecoration:'none',color:'silver',justifyContent:'center',alignItems:'center', fontSize:'20px', bgColor:'transparent', border:'2',borderColor:'black'}}>
       <Button sx={{'&:hover': {
    backgroundColor: '#353935',
    color:'white',
    boxShadow: 'none',borderColor:'#353935',transition:  'background-color .25s ease-in-out , color .25s ease-in-out'
  },width:'100%',maxWidth:'100%',height:'100%' ,color:'#353935',fontWeight:'1000',fontfamily: "With My Woes",fontSize:'1.2rem', bgColor:'transparent', border:'solid 1px',borderColor:'#353935'}}><p style={{fontFamily:"With My Woes"}}>SHOP NOW </p></Button> 
        </Link>
        <Video/>
        
      </Box>

      <Footer/>
      <FooterSm/>
    

    </Box>
  )
}



export default Home
