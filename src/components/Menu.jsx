import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Menu = ({ labList, onSelectLab }) => {
  return (
    <List component="nav">
      {labList.map((lab, index) => (
        <ListItem button key={index} onClick={() => onSelectLab(index)}>
          <ListItemText primary={lab.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;