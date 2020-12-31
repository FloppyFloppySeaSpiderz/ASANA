import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { AppContext } from "../components/ContextProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();

  const { setAccountIndex } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button onClick={() => setAccountIndex(0)}>
          <ListItemText primary='Plaid Gold Standard Checking' />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setAccountIndex(1)}>
          <ListItemText primary='Plaid Diamond Credit Card' />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setAccountIndex(2)}>
          <ListItemText primary='Plaid Bronze Standard CD' />
        </ListItem>
        <Divider />
        <ListItemLink onClick={() => setAccountIndex(3)}>
          <ListItemText primary='Plaid Diamond Credit Card' />
        </ListItemLink>
      </List>
    </div>
  );
}
