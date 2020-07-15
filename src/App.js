import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useStateValue();

  // please of code which run on given condition 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user loggedin 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // loggedout 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // any cleanup operation will go here 
      unsubscribe();
    }
  }, [])

  console.log("usefjwe",user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
