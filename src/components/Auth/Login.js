import axios from 'axios';
import React,{useState,useEffect} from 'react'
import  { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router';

export const Login = () => {

    
    const notifySuccess = (msg) =>  toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const notifyError = (msg) =>  toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const location = useLocation();
    useEffect(() => {        
        if(location.state != undefined){            
            if(location.state.status){
                notifySuccess(location.state.msg);
            }else{
                notifyError(location.state.msg);
            }                    
        }
    }, [])
    
    const history = useHistory();
    // const cookies = new Cookies()
    // if((cookies.get('user').passport.user)){
        //     history.push('/dashboard')
        // }
        
        const redirect = () => {
            history.push('/register');
        }
        
        // email & password
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        
        const [allEntry, setAllEntry] = useState([]);
        
        // sending req to back-end for verifying user
        const checkLogin = (e) =>{
            e.preventDefault();
            const newEntry = {email:email,password:password}
            setAllEntry([...allEntry,newEntry]);         
            axios.post("/auth/login",{            
                email,password 
            }).then((res)=>{   
                console.log(res);
                if(res.data.msg == 'done'){      
                // console.log('here')          
                var allData = {
                    'user' : res.data.msg,
                    'username' : res.data.userData,
                    'role':res.data.role,
                    'firstname' : res.data.fname,
                    'lastname':res.data.lname 
                }
                localStorage.setItem('dataKey', JSON.stringify(allData));
                localStorage.setItem('user', res.data.msg);
                history.push('/dashboard');
            }
            else notifyError("Login failed")
        }).catch((e)=>{
            console.log(e);
        });
    }

    return (
        <div>
            <div className="container iq-card">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-2 mt-5">                   
                    <div className="iq-card-body font-weight-bold">
                        <p style={{"textAlign": "center", "fontSize": "35px", "color": "#0b0b0b"}}>Login</p>
                        <form className="needs-validation" onSubmit={checkLogin} noValidate>
                            <div className="row">
                                <div className="col-md-12 mb-3 name">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter Email!
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4 name">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter Password!
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4" align="right">                                    
                                    <button className="btn btn-outline-primary" id="submit" name="login" type="submit">Login</button>
                                </div>

                                <div className="col-md-12 mb-4">                                    
                                    <button className="btn btn-outline-secondary" onClick={redirect}>Don't have an Account? Register</button>                                    
                                </div>

                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    />                                    
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
