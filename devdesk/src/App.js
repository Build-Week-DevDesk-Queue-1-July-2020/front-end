import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Material-UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';


// Custom component imports
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import Logoff from './Components/Logoff'
import Register from './Components/Register';
import TicketCreation from './Components/TicketCreation';
import TicketQueue from './Components/TicketQueue';
import TicketView from './Components/TicketView';
import PrivateRoute from './Components/PrivateRoute';
import ProtectedRoute from './Components/PrivateRoute';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0077B6"
  },
  title: {
    flexGrow: 1,
  },
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

function App(props) {
  const classes = useStyles();
  const links = [
    {title:'Create Ticket', url: '/create-ticket', icon: <CreateIcon />},
    {title: 'View Tickets', url: `/helpers/${localStorage.getItem('helper_id')}/tickets/`, icon: <InboxIcon />},
  ];
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  // set the page title based on the URL path
  useEffect( () => {
    const path = location.pathname.split('/')
    switch(path[1]) {
      case 'login':
        setPageTitle('Login');
        break;
      case 'register':
          setPageTitle('Register');
          break;
      case 'students':
      case 'helpers':
        setPageTitle('My Queue');
        break;
      case'create-ticket':
        setPageTitle('Create Ticket');
        break;
      default:
        setPageTitle('Home');
    }
  }, [location]);


  return (
    <div className="App">
      {/* Top navigation bar */}
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {pageTitle}
          </Typography>
          <Link to="/login"><Button color="inherit">Login</Button></Link>
          <Link to="/logoff"><Button>Logoff</Button></Link>
        </Toolbar>
      </AppBar>
      {/* Switch for routing */}
      <Switch>
        <Route exact path='/' render={() => (window.location = "https://devdeskmarketing.vercel.app/index.html")} >

        </Route>
        <Route path='/login' >
          <Login history={props.history}/>
        </Route>
        <ProtectedRoute exact path="/logout" component={Logoff} />
        <PrivateRoute path='/register'>
          <Register />
        </PrivateRoute>
        <PrivateRoute exact path='/create-ticket'>
          <Sidebar links={links} />
          {/* //add ticket creation path */}
          <TicketCreation />
        </PrivateRoute>
        <PrivateRoute exact path='/students/:id/tickets/'>
          <Sidebar links={links} />
          {/* //add ticket queue path */}
          <TicketQueue />
        </PrivateRoute>
        <PrivateRoute exact path='/helpers/:id/tickets/'>
          <Sidebar links={links} />
          {/* //add ticket queue path */}
          <TicketQueue />
        </PrivateRoute>
        <PrivateRoute exact path='/helpers/ticket/:id'>
          <Sidebar links={links} />
          {/* //add ticket queue path */}
          <TicketView />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
