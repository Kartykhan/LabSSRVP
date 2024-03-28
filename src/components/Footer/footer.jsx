import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1">Лукин В. А.</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;