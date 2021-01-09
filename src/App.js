import React from 'react';
import './App.css';

import { Route, Switch} from "react-router-dom";

import {Header} from "./components/header/header.component";
import {HomePage} from "./pages/hompeage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {SignInAndSignUpPage} from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div >
      <Header/>
    <Switch>
      <Route path="/signin" component={SignInAndSignUpPage}/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
