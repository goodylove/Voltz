import { AppBar,Stack,useTheme } from '@mui/material'
import React from 'react'
import MenuButton from '../Buttons/MenuButton'

export default function Footer() {
  const theme =  useTheme()
  return (
    <AppBar  elevation={0} sx={{bottom:0,top:"auto", position:"relative" ,bgcolor:"background.default",[theme.breakpoints.up('sm')]:{
      position:'fixed'
    }}}>
      <Stack  direction="row" alignItems="center"  justifyContent={{xs:"space-evenly",sm:"space-between"}}   sx={{px:3,py:0.3}}>
        {/* LEFT */}
        <Stack direction={{xs:"column",sm:"row"}}>
          <MenuButton>DISCORD</MenuButton>
          <MenuButton>TwITTER</MenuButton>
          <MenuButton>STUDIO</MenuButton>

        </Stack>
{/* RIGHT */}
        <Stack direction={{xs:"column",sm:"row"}}>
          <MenuButton>LITEPAPER</MenuButton>
          <MenuButton>T&CS</MenuButton>
          <MenuButton>JOBS</MenuButton>

        </Stack>
        </Stack>
    </AppBar >
  )
}
