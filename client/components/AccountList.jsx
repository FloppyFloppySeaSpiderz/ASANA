import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// const AccountList = () => {
//   return (
//     <div className = "accountList">
//       <h3>Current accounts</h3>
//         <Account />
//     </div>
//   )
// };

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

  console.log(props);

  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button>
          <ListItemText primary='Plaid Gold Standard Checking' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Plaid Diamond Credit Card' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Plaid Bronze Standard CD' />
        </ListItem>
        <Divider />
        <ListItemLink>
          <ListItemText primary='Plaid Diamond Credit Card' />
        </ListItemLink>
      </List>
    </div>
  );
}
