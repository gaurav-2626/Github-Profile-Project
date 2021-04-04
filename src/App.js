import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"


//react router
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"


//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components
import Home from "./Pages/Home.js"
import Signin from "./Pages/Signin.js"
import Signup from "./Pages/Signup.js"
import PageNotFound from "./Pages/PageNotFound.js"
import { UserContext } from "./Context/UserContext";

//layout
import Footer from "./layout/Footer.js"
import Header from "./layout/Header.js"

//init firebase
import firebaseConfig from "./Config/firebaseConfig.js"
firebase.initializeApp(firebaseConfig)

const App = () => {

  const [user,setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>

        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;