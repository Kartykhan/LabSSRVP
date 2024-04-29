import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from '../Theme/ToggleTheme';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Создаем тему с серым цветом для Header
const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e', // Серый цвет
    },
  },
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} width={300}>
            <List style={{ width: 300 }}>
              <ListItem button component={Link} to="/lab1" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 1" />
              </ListItem>
              <ListItem button component={Link} to="/lab2" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 2" />
              </ListItem>
              <ListItem button component={Link} to="/lab3" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 3" />
              </ListItem>
              <ListItem button component={Link} to="/lab4" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 4" />
              </ListItem>
              <ListItem button component={Link} to="/lab5" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 5" />
              </ListItem>
              <ListItem button component={Link} to="/lab6" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 6" />
              </ListItem>
              <ListItem button component={Link} to="/lab7" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 7" />
              </ListItem>
              <ListItem button component={Link} to="/lab8" style={{ textAlign: 'center' }}>
                <ListItemText primary="Лабораторная работа 8" />
              </ListItem>
              <ListItem button component={Link} to="/lab9" style={{ textAlign: 'center' }}з>
                <ListItemText primary="Лабораторная работа 9" />
              </ListItem>
              <div style={{ textAlign: 'center', marginTop: '450px' }}>
              <Button color="primary" size="small" href="mailto:example@example.com">Обратная связь</Button>
            </div>
              {/* Добавьте остальные элементы меню здесь */}
            </List>
          </Drawer>
          <Button color="primary" variant="outlined" component={Link} to="/" style={{ color: '#000' }}>Главная</Button>
          <Button color="primary" variant="outlined" component={Link} to="/about" style={{ color: '#000' }}>О себе</Button>
          <Typography variant="h6" component="div" style={{ flexGrow: 1, textAlign: 'center' }}>
            Материалы лабораторных работ
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <ThemeToggle />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
