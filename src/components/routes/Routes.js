import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ProductsContextProvider from "../contexts/ProductsContext";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/HomePage/HomePage'
import AuthContextProvider from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoutes';
// import Login from '../components/Loginin/Login';
import Catalog1 from '../components/Products/Catalog1';
import SignIn from '../components/Authorization/SignIn'
import SignUp from '../components/Authorization/SignUp'
import ForgotPassword from '../components/Authorization/ForgotPassword'
import UpdateProfile from '../components/Authorization/UpdateProfile'
import DashBoard from '../components/Authorization/DashBoard'
// import GenresPages from '../components/GenresPages/GenresPages'
import Popular from '../components/Popular/Popular';
import GenresPages from '../components/GenresPages/GenresPages'
import Cart from '../components/Cart/Cart';
import ProductDetails from '../components/Products/ProductDetails';
import EditProduct from '../components/Products/EditProduct';
import Support from '../components/Support/Support';
import Card from '../components/Cart/Buy/Buy';
import CheckoutPage from '../components/Cart/CheckoutPage';
import Thank from '../components/Thank you/Thank';



const Routes = () => {
    return (
        <ProductsContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>

                    <PrivateRoute exact path="/" component={HomePage} />
                    {/* <PrivateRoute exact path="/" component={Popular}/>  */}
                    <PrivateRoute exact path="/profile" component={DashBoard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <Route exact path='/cart' component={Cart} />
                        <Route exact path="/homepage/" component={HomePage} />
                        <Route exact path="/">
                            <Redirect to="/homepage"/>
                        </Route>
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                        <Route exact path="/Thank" component={Thank}/>
                        <Route exact path='/signup' component={SignUp} />
                        <Route exact path='/login' component={SignIn}/>
                        <Route exact path='/update-profile' component={UpdateProfile}/>
                        <Route exact path='/catalogue' component={GenresPages}/>
                        <Route exact path='/catalogue/gamedetails/:id' component={ProductDetails}/>
                        <Route exact path='/catalogue/editproduct/:id' component={EditProduct}/>
                        <Route exact path='/support' component={Support}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                        <Route exact path="/buy" component={Card}/>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </ProductsContextProvider>
    );
};

export default Routes;