//import styled components
import {StyledContainer} from './components/Styles.js'

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// auth & redux
import AuthRoute from './components/AuthRoute.js';
import BasicRoute from './components/BasicRoute.js';
import {connect} from 'react-redux';

function App({checked}) {
  return (
    <Router>
      {checked &&
      <StyledContainer>
        <Switch>
          <BasicRoute exact path="/signup" component={Signup}/>
          <BasicRoute exact path="/login" component={Login}/>
          <AuthRoute exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </StyledContainer>
      }
    </Router>
  );
}

const mapStateToProps = ({session}) =>({
  checked: session.checked
})

export default connect(mapStateToProps)(App);
