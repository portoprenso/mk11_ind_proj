import React from 'react'
import SignUp from './SignUp'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import RosterContextProvider from "../contexts/RosterContext";
import HomePage from "./HomePage/HomePage";
import RosterPage from './RosterPage/RosterPage'
import ProfilePage from './ProfilePage/ProfilePage';
import ProductsContextProvider from '../contexts/ProductsContext';
import StorePage from './StoreBlock/StorePage/StorePage';
import ProductDetails from './StoreBlock/StorePage/ProductDetails';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Cart from './StoreBlock/Cart/Cart';
import EditProduct from './StoreBlock/StorePage/EditProduct';
import Chat from '../components/ChatBlock/Chat'
import CheckoutPage from './StoreBlock/Cart/CheckoutPage';
import Buy from './StoreBlock/Cart/Buy/Buy';
import Twitter from './ChatBlock/Twitter/Twitter';
import Gallery from './Gallery/Gallery';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fda90f'
    },
    secondary: {
      main: '#e30000'
    },
    warning: {
      main: '#e30000'
    }
  }
});







function App() {
  return (
        <div style={{
          backgroundColor: 'black'
        }}
        >
          <Router>
            <MuiThemeProvider theme={theme}>
            <RosterContextProvider>
            <AuthProvider>
            <ProductsContextProvider>
              <Switch>
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute exact path='/chat/' component={Chat}/>
                <PrivateRoute exact path='/buy/' component={Buy}/>
                <PrivateRoute exact path='/checkout/' component={CheckoutPage}/>
                <PrivateRoute exact path='/store/editproduct/:id' component={EditProduct}/>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/roster" component={RosterPage} />
                <Route exact path="/store" component={StorePage} />
                <Route exact path='/store/gamedetails/:id' component={ProductDetails}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/twitter' component={Twitter}/>
                <Route exact path='/gallery' component={Gallery}/>
                <Redirect exact to='/' />
              </Switch>
            </ProductsContextProvider>
            </AuthProvider>
            </RosterContextProvider>
            </MuiThemeProvider>
          </Router>
        </div>
  );
}

export default App;