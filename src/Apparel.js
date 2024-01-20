import Nav from './Nav'
import './apparel.css'
import tyson from './tysonSHIRT.png'
import vinz from './vinzSHIRT.png'
import basqui from './realbasquicream.png'
import { Container,Box,p,Link } from '@mui/material'
import Footer from './Footer'
import FooterSm from './FooterSm'

const Apparel = () => {
  return (
    <Box>
        <Nav/>
        <Container disableGutters maxWidth={false} sx={{color:'black',fontSize:'40px',fontWeight:'400',fontFamily: "With My Woes",display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'#5b5a5a',height:'120px',position:'relative'}}>
          <a id="catalog" href='/apparel' >CATALOG</a>
        </Container>


        

        {/* big screen */}

        <Container disableGutters maxWidth={false} sx={{bgColor:'black',fontSize:'40px',fontWeight:'400',display:{xs:'none',sm:'none',md:'flex'},flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',height:'1200px',width:'100%'}}>
        <Box sx={{width:'100%',height:'80%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'}}>
        <Box class="product_box" id="basqui">
            <Link class="product_link" href="basqui">
              <img class="product_image" src={basqui} alt=""/>
              
              <p class="product_title">"BASQUIAT" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box" id="vinz">
        <Link class="product_link" href="vinz">
            <img class="product_image" src={vinz} alt=""/>
            
            <p class="product_title" >"VINZ" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box" id="tyson">
        <Link class="product_link" id ='tysonlink' href="tyson">
            <img class="product_image" src={tyson} alt="" ></img>
            
           
            <p class="product_title" >"EVEN THE ODDS" GRAPHIC SHIRT</p>
          
            </Link>
        </Box>

        <Box class="product_box" id="tyson">
            
          
        </Box>

        </Box>
        </Container>

        {/* small screen */}

        <Container disableGutters maxWidth={false} sx={{fontSize:'40px',fontWeight:'400',display:{xs:'none',sm:'flex',md:'none'},flexDirection:'column',alignItems:'center',flexWrap:'wrap',height:'2000px',width:'100%'}}>
        <Box class="product_box_sm" id="basqui">
            <Link class="product_link_sm" href="basqui">
              <img class="product_image" src={basqui} alt=""/>
              
              <p class="product_title_sm">"BASQUIAT" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box_sm" id="vinz">
        <Link class="product_link_sm" href="vinz">
            <img class="product_image" src={vinz} alt=""/>
            
            <p class="product_title_sm" >"VINZ" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box_sm" id="tysonsm">
        <Link class="product_link_sm" id ='tysonlink' href="tyson">
            <img class="product_image" src={tyson} alt="" ></img>
            
           
            <p class="product_title_sm" >"EVEN THE ODDS" GRAPHIC SHIRT</p>
          
            </Link>
        </Box>

       

     
        </Container>


        {/* x-small screen */}

        <Container disableGutters maxWidth={false} sx={{fontSize:'40px',fontWeight:'400',display:{xs:'flex',sm:'none'},flexDirection:'column',alignItems:'center',justifyContent:'space-around',flexWrap:'wrap',height:'1600px',width:'100%'}}>
        <Box class="product_box_xs" id="basqui">
            <Link class="product_link_xs" href="basqui">
              <img class="product_image" src={basqui} alt=""/>
              
              <p class="product_title_xs">"BASQUIAT" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box_xs" id="vinz">
        <Link class="product_link_xs" href="vinz">
            <img class="product_image" src={vinz} alt=""/>
            
            <p class="product_title_xs" >"VINZ" GRAPHIC SHIRT</p>
            
            </Link>
        </Box>

        <Box class="product_box_xs" id="tysonxs">
        <Link class="product_link_xs" id ='tysonlink' href="tyson">
            <img class="product_image" src={tyson} alt="" ></img>
            
           
            <p class="product_title_xs" >"EVEN THE ODDS" GRAPHIC SHIRT</p>
          
            </Link>
        </Box>

       

     
        </Container>




        <Footer/>
    <FooterSm/>
    
    </Box>

   
    
  );
}

export default Apparel
