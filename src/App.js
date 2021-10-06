import React,{Component} from 'react';
import { Route } from "react-router-dom";
import {Active_user} from './components/navbar_components/active_user';
import {Admin_panel} from './components/navbar_components/admin_panel';
import {Dashboard} from './components/navbar_components/dashboard';
import {All_users} from './components/navbar_components/All_users'
import {Module2} from './components/navbar_components/module2'
import { Update_form } from './components/Update_form';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register'

class App extends Component {
    render(){
        return (
            <>
              <Route exact path="/"><Login/></Route>
              <Route exact path="/register"><Register /></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
              <Route exact path="/active_user"><Active_user/></Route>
              <Route exact path="/update_form/:id"><Update_form/></Route>
              <Route exact path="/admin"><Admin_panel/></Route>
              <Route exact path="/m1"><All_users/></Route>
              <Route exact path="/m2"><Module2/></Route>
            </>
        );
    }
}

export default App;
