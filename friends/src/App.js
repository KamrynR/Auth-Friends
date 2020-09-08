import React from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <PrivateRoute path='/friends' component={Friends} />
      </Switch>
    </>
  );
}

export default App;