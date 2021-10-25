import React,{Component} from 'react';
import { Route } from "react-router-dom";
import {Admin_panel} from './components/navbar_components/admin_panel';
import {Dashboard} from './components/navbar_components/dashboard';
import {Active_members} from './components/navbar_components/Active_members'
import {Module2} from './components/navbar_components/module2'
import { Update_form } from './components/Update_form';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register'
import {Pending_Users } from './components/navbar_components/pending_users'

class App extends Component {    
    render(){
        return (
            <>
                <Route exact path="/"><Login/></Route>
                <Route exact path="/register"><Register /></Route>
                <Route exact path="/dashboard"><Dashboard/></Route>              
                <Route exact path="/admin"><Pending_Users/></Route>              
                <Route exact path="/update_form/:id"><Update_form/></Route>
                <Route exact path="/total_users"><Admin_panel/></Route>
                <Route exact path="/active_members"><Active_members/></Route>
                <Route exact path="/m2"><Module2/></Route>
            </>
        );
    }
}

export default App;
