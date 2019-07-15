import React from 'react';
import { Link } from 'react-router-dom';
import { List as ListUi, ListItem, ListItemText } from '@material-ui/core';
import { ListContainer } from './List.style';

const ListItemLink = (props) => {
  return <ListItem button component={Link} {...props} />;
}

const List = ({ list }) => {
  return <ListContainer>
    <ListUi component="nav">
      {list.map(item => {
        return <ListItemLink key={item.path} to={item.path}>
          <ListItemText
            primary={item.name}
          />
        </ListItemLink>;
      })}
    </ListUi>
  </ListContainer>;
};

export default List;
