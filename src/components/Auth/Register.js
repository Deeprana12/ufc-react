import React,{useState} from 'react'
import  { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
  

export const Register = () => {
    
    const history = useHistory();

    // const cookies = new Cookies()
    // if((cookies.get('user').passport.user)){
    //     history.push('/dashboard')
    // }

    const redirect = () => {
        history.push('/');
    }

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [checkPass,setCheckPass] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const notify = (msg) =>  toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const storeRegister = (e) =>{
        e.preventDefault();
        const newEntry = {email:email,password:password,password1:checkPass}
        setAllEntry([...allEntry,newEntry]);                         
            axios.post("/auth/register",{            
                email,password,checkPass
            }).then((res)=>{
                // console.log(res)
                if(res.data.err ==true){
                    history.push('/')
                }else{
                    // console.log(res.data.errors[0].msg)
                    if(res.data.errors[0].msg)
                        notify(res.data.errors[0].msg)                                    
                }
            }).catch((e)=>{
                console.log(e);
            });        
    }


    return (
        <div>
            <div className="container iq-card">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-2 mt-5">                                        
                    <div className="iq-card-body font-weight-bold">
                        <p style={{"textAlign": "center", "fontSize": "35px", "color": "#0b0b0b"}}>Registration</p>
                        <form className="needs-validation" onSubmit={storeRegister} noValidate>
                            <div className="row g-2"> 
                            <div className="col-md-12 mb-3 name">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter a email!
                                    </div>
                                </div>                              
                                                                
                                <div className="col-md-12 mb-4 name">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter a Password!
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4 name">
                                    <label htmlFor="password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" name="password1" value={checkPass} onChange={(e) => setCheckPass(e.target.value)}                                        
                                    required />
                                    <div className="invalid-feedback">
                                        Please enter a Password Again!
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4" align="right">
                                    <button className="btn btn-outline-primary" id="submit" onClick={notify} name="register" type="submit">Register</button>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <button className="btn btn-outline-secondary" onClick={redirect}>
                                        Already have an Account? Login
                                    </button>
                                    
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
