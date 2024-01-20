import React from 'react'
import { Container,Box,Button,Typography, Link } from '@mui/material'
import Nav from './Nav'
import FooterSm from './FooterSm'
import Footer from './Footer'

import {data} from './data'
import { ShoppingBag } from '@mui/icons-material'
import './pp.css'
import { useState } from 'react'
import { useRef } from 'react'
import ProductPage from './ProductPage'
import basquiMain from './realbasquicream.png'
import vinzMain from './vinzSHIRT.png'

const BasquiPP = () => {

   return(

      <ProductPage title="BASQUIAT"  price='25.00$'  img1={basquiMain} img2={basquiMain} img3={vinzMain} />

   )




}


export default BasquiPP
