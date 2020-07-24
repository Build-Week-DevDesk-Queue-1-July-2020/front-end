import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Material-UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

// Custom component imports
import Login from './Components/Login';
import Register from './Components/Register';
import TicketCreation from './Components/TicketCreation';
import TicketQueue from './Components/TicketQueue';
import CreateTicket from './Components/TicketCreation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0077B6"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Create A Ticket
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/'>
          <h1>Index page</h1>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/create-ticket'>
          <CreateTicket />
        </Route>
        <Route path='/ticket-queue'>
          <TicketQueue />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
