import React from "react";
import {Box, Typography} from "@mui/material";

const Header: React.FC = () => {
  return (
      <Box sx={{
        width: '100%',
        height: '10rem',
        backgroundColor: '#00adb5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img style={{height: '9rem'}} src={'/logo_transparent.png'} alt={'logo'}/>
        <Typography variant={'h1'} color={'white'} fontWeight={600}>Stockify</Typography>
      </Box>
  )
};

export default Header;
