import React from 'react'
import { Box,Link ,Container} from '@mui/material'
import logo from './log02.PNG'
import DrawerNav from './DrawerNav'

const CheckoutNav = () => {
  return (
    <div>

    {/* big screen */}

    <Container disableGutters maxWidth={false} sx={{ display:{xs:'none',md:'flex'}, flexDirection: 'row', alignItems: 'center', height: '100px', bgcolor: '#ffffed', width: '100%' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', width: '20%', height: '100%' }}>
          <Link href='/home' sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', '&:hover': { opacity: 0.6, transition: 'opacity .25s ease-in-out' } }}>
              <img alt="" src={logo} style={{ maxHeight: '100%', maxWidth: '100%', backgroundSize: 'cover' }}>
              </img>
          </Link>
      </Box>
      <Box sx={{width:'30%',height:'100%',display:{xs: 'none', sm:'flex'},paddingLeft:'3%',flexDirection:'row',alignItems:'center', justifyContent:'center',mx:'auto'}}>
        <a class="navlink" href='/home'> Home </a>
        <a class="navlink" href='/apparel' > Apparel</a>

      </Box>

      <Box sx={{display:'flex', height:'100%', width:'20%'}}></Box>
    
    </Container>

    {/* small screen */}

    <Container disableGutters maxWidth={false} sx={{ display:{xs:'flex',md:'none'}, flexDirection: 'row', alignItems: 'center', height: '100px', bgcolor: '#ffffed', width: '100%' }}>
    <DrawerNav/>

    <Link  href='/home' sx={{display: { xs: 'flex', sm: 'none' },'&:hover': {opacity:0.6,transition: 'opacity .25s ease-in-out'},justifyContent:'center',width:'20%',height:'100%', mx:'auto'}}>
      <img src= {logo} style={{maxHeight:'100%',maxWidth:'100%',}}/>
    </Link>

    <Box sx={{display:'flex', height:'100%', width:'20%'}}></Box>

   





    </Container>
    </div>
  )
}

export default CheckoutNav
