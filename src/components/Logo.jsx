import { Box, Typography } from '@mui/material'
import React from 'react'
import logoImg from 'assets/images/logo-black-mini.png'
import { Link as RouterLink } from 'react-router-dom'
//------------------------------------------------------------------------
export default function Logo() {

    const logo = (
      <Box sx={{display: 'flex', ml: 2}}>
        <Box component="img" src={logoImg} sx={{ width: 40, height: 65}} />
        <Typography sx={{
            textDecoration: 'none', 
            fontSize: '2rem', 
            background: 'linear-gradient(99.32deg, #d77768 7.91%, #000 88.96%)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            ml: '15px',
            mt: '8px'
        }}>
                Inside
        </Typography>
      </Box>
    )
    return <RouterLink to="/">{logo}</RouterLink>;
  }
