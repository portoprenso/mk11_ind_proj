import React from 'react'
import SignUp from './SignUp'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashBoard from './DashBoard';
import Login from './Login'
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import RoasterContextProvider from "../contexts/RoasterContext";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    >
        <div style={{
          backgroundColor: 'black'
        }}
        >
          <Router>
            <RoasterContextProvider>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/profile" component={DashBoard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
            </RoasterContextProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;