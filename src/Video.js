import React from 'react'
import vid  from './slideshow.mp4'
import { Box } from '@mui/material';


const Video = () => {
  
    return(  
          <video src={vid} loop autoPlay style={{objectFit:'cover',position:'absolute',left:0,bottom:0,zIndex:'-1',width:'100%',height:'100%',maxWidth:'100%',maxHeight:'100%'}}></video>
  );
  
}

export default Video

