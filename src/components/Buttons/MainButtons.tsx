import theme from '@/src/config/theme'
import { Button, ButtonProps } from '@mui/material'
import React from 'react'

const  MainButtons:React.FC<ButtonProps> = ({ children, size="normal",sx={} })=> {
  return (
    <Button sx={theme =>({bgcolor:"secondary.dark",border:`1px solid ${theme.palette.secondary.dark}`,borderRadius:2,px:'20px',py:'6px',
    
    fontSize:size ==="small" ?14:16,
    fontWeight:"bold",

    
    })}>
      {children}
    </Button>
  )
}

export default MainButtons
