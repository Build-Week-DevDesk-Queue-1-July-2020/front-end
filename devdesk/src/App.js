import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/create-ticket'>
          <TicketCreation />
        </Route>
        <Route path='/ticket-queue'>
          <TicketQueue />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
