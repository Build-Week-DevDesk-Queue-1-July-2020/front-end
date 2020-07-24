import React from 'react';
import { Switch, Route, PrivateRoute } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import TicketCreation from './Components/TicketCreation';
import TicketQueue from './Components/TicketQueue';

function App() {
  return (
    <div className="App">
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
          <TicketCreation />
        </PrivateRoute>
        <PrivateRoute path='/ticket-queue'>
          <TicketQueue />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
