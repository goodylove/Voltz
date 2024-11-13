import theme from '@/src/config/theme'
import { Button } from '@mui/material'
import React from 'react'

function MenuButton({children}:{children:React.ReactNode}) {
  return (
    <Button sx={{
        fontSize: 16,
        color: 'text.secondary',
        letterSpacing: '3px',
        ":hover":{
            bgcolor:'',
            color:'text.secondary',
            filter: theme.custom.customShadow1
        
        
        },

    }}>
      {children}

    </Button>
  )
}

export default MenuButton
