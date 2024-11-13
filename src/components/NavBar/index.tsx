import { AppBar, keyframes, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Circle from '@mui/icons-material/Circle'
import  KeyboardArrowDown  from '@mui/icons-material/KeyboardArrowDown'
import MenuButton from '../Buttons/MenuButton'
import MainButtons from '../Buttons/MainButtons'
import  Menu  from '@mui/icons-material/Menu'
import Hidden from '@mui/material/Hidden';


const resourceKeyFrame = keyframes`
0%{
opacity: 1
},
50%{
opacity: 0.4
}
100%{
opacity: 1}
`

function NavBar() {
  return (
    <AppBar 
    elevation={0}
     position='sticky' 
     sx={{
      px:3,
      py:2.5,
      bgcolor:"transparent",
      backdropFilter:"blur(8px)"
      }}>
      <Stack sx={{height:'100%'}} direction="row" alignItems="center" justifyContent="space-between" >
        {/* left side */}
        {/* logo */}
       <Stack direction="row" alignItems="center"  spacing={{xs:2,md:5}}>
       <Image src="/logo.svg" width={30} height={30} alt="" objectFit='contain'/>


{/* pulse tet */}
<Stack direction="row" alignItems="center" spacing={2} sx={{color:'primary.light', animation:`${resourceKeyFrame} 3s infinite ease`,cursor:'pointer'}} >
  <Circle sx={{fontSize:6}} />
  <Typography variant='body2' sx={{letterSpacing:'3px'}}>RESOURCE CENTER</Typography>
</Stack>
</Stack>

<Hidden mdDown >
<Stack direction='row' alignItems="center" spacing={3}>

<MenuButton>MARKET</MenuButton>

<MenuButton>PLAYER</MenuButton>
<MenuButton>
  <Stack direction="row" alignItems="center"> 
    <Typography>DEVELOPER</Typography>
    <KeyboardArrowDown  fontSize='small' />
  </Stack>
</MenuButton>
<MenuButton>BACKER</MenuButton>
<MainButtons sx={{height:32}}>TRADE</MainButtons>
</Stack>
</Hidden>

<Hidden mdUp>
  <Stack direction="row" spacing={2} alignItems="center">
<Typography>MENU</Typography>
  <Menu />
  </Stack>
</Hidden>
        
      </Stack>
    </AppBar>
  )
}

export default NavBar
