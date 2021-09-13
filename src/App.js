import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from "./BestBooks"
import Login from "./Login"

import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    var  isAuthontecated =this.props.auth0.isAuthenticated;

    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />

            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, 
                if they are not, render the `Login` component */
                (isAuthontecated ?  <BestBooks/> : <Login/> )
             }
              </Route>

              <Route path="/Profile">
              {/* TODO: add a route with a path of '/profile' that
               renders a `Profile` component */}
               <Profile/>
               {/* // To render The Data */}
               
               </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0 (App);
