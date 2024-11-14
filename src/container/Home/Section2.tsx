import MainButtons from '@/src/components/Buttons/MainButtons'
import useScrollPosition from '@/src/hook/useScrollPosition'
import { Box, BoxProps, Container, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const NeoBox:React.FC<BoxProps> =({sx={}}) =>{
  const theme = useTheme()
  return(
    <Box sx={{ 
       mt: 10,
      // transform:"",
      position: "absolute",
      height: 200,  
      width: 300,
      border: "3px solid #000",
      borderColor: "#004e95",
      boxShadow:
        "inset -1px -1px 20px 0 rgba(255,74,169,.3), 2px 2px 20px 0 rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px 0 rgba(0,78,149,.42)",
      borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
      transformStyle: "preserve-3d",
      willChange: "transform, opacity",
      transition: "all 0.3s ease",
      zIndex: -1,
      [theme.breakpoints.up("sm")]: {
        mt: 6,
        height: 300,
        width: 500,
      },
      [theme.breakpoints.up("md")]: {
        height: 300,
        width: 620,
      },
      [theme.breakpoints.up("lg")]: {
        mt: 8,
        height: 400,
        width: 700,
      },
      ...sx
    
      }}/>

  )
  
}



function Section2() {
  const theme = useTheme()
  const scrollPosition = useScrollPosition()
  return (
    <Container     sx={{height:"60vh", alignItems:'center',mb:20,[theme.breakpoints.up('sm')]:{
      height:'80vh',
      mb:30
    }}}>
      <Stack alignItems="center"  justifyContent="center" sx={{height:'100%'}}>
   <Image src="/logo-full.svg"  height={250} width={1000} alt='logo' objectFit='contain'/>
   <Typography variant='h5' sx={{mt:-10,mb:5}}>THE INTEREST RATE SWAP AMM</Typography>
   <MainButtons>PRESS FOR ALPHA</MainButtons>
      <NeoBox sx={{opacity:1-scrollPosition/600,
        transform:`translate3d(-32px,8px,0px) scale3d(${0.0065 *scrollPosition +1},${0.0065*scrollPosition +1} ,1) rotateX(0deg) rotateY(0deg) rotateZ(${-0.215 * scrollPosition -163}deg) skew(0deg,0deg)`
      }}/>
       <NeoBox sx={{opacity:1-scrollPosition/600,
        transform:`translate3d(16px,-8px,0px) scale3d(${0.0065 *scrollPosition +1},${0.0065*scrollPosition +1} ,1) rotateX(0deg) rotateY(0deg) rotateZ(${-0.18 * scrollPosition + 17}deg) skew(0deg,0deg)`
      }}/>
       <NeoBox sx={{opacity:1-scrollPosition/600,
        transform:`translate3d(-8px,0px,0px) scale3d(${0.0065 *scrollPosition +1},${0.0065*scrollPosition +1} ,1) rotateX(0deg) rotateY(0deg) rotateZ(${-0.18 * scrollPosition + 17}deg) skew(0deg,0deg)`,
        borderColor:"#ff4aa9",
        borderImage:'linear-gradient(to right,#3966FF,#FF599C,#FBC13A) 1'
      }}/>
      </Stack>

      {/* neo object */}
    </Container>
  )
}

export default Section2
