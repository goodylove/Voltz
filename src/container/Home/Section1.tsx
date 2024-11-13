import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
const Endpoint = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"

function Section1() {
  const [coins,setCoins] = useState([])

  useEffect(()=>{
    fetch(Endpoint).then((res)=> res.ok && res.json()).then((data)=> {
      const result = data.slice(0,20) ||[]
      setCoins(result)
    })

  },[])

  return (
    <Paper  >
      <Marquee gradient={false} speed={40}>{coins.map((items:any)=>(
        <Stack key={items.id} sx={{mx:1.5,py:0.5}} direction='row' alignItems="center" spacing={1}>
<Avatar src={items.image} sx={{height:20,width:20}}/>
<Typography>{items.name}</Typography>
<Typography color='info.light'>${items.current_price}</Typography>
<Typography sx={{color:items.price_change_percentage_24h >=0 ? "success.light ": "error.light"}}

>${items.price_change_percentage_24h.toFixed(2)}%</Typography>
        </Stack>
      ))}</Marquee>
    </Paper >
  )
}

export default Section1
