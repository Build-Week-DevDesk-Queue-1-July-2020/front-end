import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';

// Custom component imports
import Login from './Components/Login';
import Register from './Components/Register';
import TicketCreation from './Components/TicketCreation';
import TicketQueue from './Components/TicketQueue';
import PrivateRoute from './component/PrivateRoute';
import { AvMicNone } from 'material-ui/svg-icons';


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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "#000000"
  }
}));

function App() {
  const classes = useStyles();
  const [links, setLinks] = useState([
    {title:'Create Ticket', url: '/create-ticket', icon: <CreateIcon />},
    {title: 'View Tickets', url: '/ticket-queue', icon: <InboxIcon />},
  ]);



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
          <Link to="/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
      {/* Sidebar for navigation and/or ticket sorting purposes */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {links.map((link, index) => (
            <Link to={link.url} className={classes.link}>
              <ListItem button key={link.title}>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      {/* Switch for routing */}
      <Switch>
        <Route exact path='/'>
          <h1>Index page</h1>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/register'>
          <Register />
        </PrivateRoute>
        <PrivateRoute path='/create-ticket'>
          {/* //add ticket creation path */}
          <TicketCreation />
        </PrivateRoute>
        <PrivateRoute path='/ticket-queue'>
          {/* //add ticket queue path */}
          <TicketQueue />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
