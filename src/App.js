import React,{Component} from 'react';
import { Route } from "react-router-dom";
import { Admin_panel } from './components/navbar_components/admin_panel';
import { Dashboard } from './components/navbar_components/dashboard';
import { Active_members } from './components/navbar_components/Active_members'
import { NotPayment } from './components/navbar_components/notPayment'
import { Update_form } from './components/Update_form';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register'
import { Pending_Users } from './components/navbar_components/pending_users'
import { AddManually } from './components/AddManually';
import { Timetable } from './components/navbar_components/Timetable';
import { Currentbatch } from './components/navbar_components/Currentbatch';

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
                <Route exact path="/paymentpending"><NotPayment/></Route>
                <Route exact path="/addmanually"><AddManually/></Route>
                <Route exact path="/timetable"><Timetable/></Route>
                <Route exact path="/currentbatch"><Currentbatch/></Route>
            </>
        );
    }
}

export default App;
