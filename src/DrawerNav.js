import { Stack, Typography, IconButton,Box,Drawer,Link } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import logo from './log02.PNG'
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import { spacing } from '@mui/system';




const DrawerNav = () => {

    const[isOpen, setIsOpen]= useState(false);
    const handleClick=()=> {setIsOpen(true)}






  return (
    <Box sx={{display:{xs:'flex', sm:'none', height:'100%', width:'20%',justifyContent:'center'}}}>

    <IconButton size="large" variant="contained" onClick={handleClick} >

        <MenuIcon/>
    </IconButton>

    <Drawer sx={{color:'black'}} aria-label="muiDrawer" anchor="left" open={isOpen} onClose= {() => setIsOpen(false)}>

        <Stack spacing={2} sx={{width:'70vw', height:'100%' ,display:'flex',alignItems:'center', bgcolor:'#ffffed'}}>
              <Box sx={{display:'flex',flexDirection:'row',width:'100%',height:'30%',justifyContent:'center'}}>
                  <img src={logo} style={{}}/>
              </Box>

              <a class="navlinkdrawer" href="/home"><p>Home</p></a>
              <a class="navlinkdrawer" href="/apparel"><p>Apparel</p></a>

        </Stack>


    </Drawer>






    </Box>
  )
}

export default DrawerNav
