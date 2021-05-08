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
import RosterContextProvider from "../contexts/RosterContext";
import HomePage from "./HomePage/HomePage";
import RosterPage from './RosterPage/RosterPage'
import Header from "../components/Header/Header";
import ProfilePage from './ProfilePage/ProfilePage';

function App() {
  return (
        <div style={{
          backgroundColor: 'black'
        }}
        >
          <Router>
            <RosterContextProvider>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/roster" component={RosterPage} />
              </Switch>
            </AuthProvider>
            </RosterContextProvider>
          </Router>
        </div>
  );
}

export default App;