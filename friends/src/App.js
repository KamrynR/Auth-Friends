import React from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <div className='nav'>
        <div>
          <Link to='/'>Login</Link>
        </div>
        <div>
          <Link to='/friends'>Friends</Link>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <PrivateRoute path='/friends' component={Friends} />
      </Switch>
    </div>
  );
}

export default App;