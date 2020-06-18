import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <>
    <h1>This is a simple react app!</h1>
    <Router>
      <Navbar/>
      <Switch>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
         <Signup/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App