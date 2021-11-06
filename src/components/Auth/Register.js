import React,{useState} from 'react'
import  { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    
    const history = useHistory();    

    const redirect = () => {
        history.push('/');
    }

    const [email,setEmail] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
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
    
    const notifyError = (msg) =>  toast.error(msg, {
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
        const newEntry = {firstname:fname,lastname:lname,email:email,password:password,password1:checkPass}
        setAllEntry([...allEntry,newEntry]);                         
            axios.post("/auth/register",{            
                fname,lname,email,password,checkPass
            }).then((res)=>{                
                if(res.data.err == false){
                    // notify('Registed successfully!!')                    
                    history.push({
                        pathname:'/',
                        state:{msg:'Registed successfully!!',
                        status:true}                                                    
                    })
                }else{                                        
                    // notifyError("Already Registered! Please try to Login")
                    history.push({
                        pathname:'/',                        
                        state:{msg:'Already Registered! Please try to Login',
                        status:false} 
                    })
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

                                <div className="col-md-6 mb-3 name">
                                    <label htmlFor="username" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="firstname"  value={fname} onChange={(e) => setFname(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter a First Name!
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3 name">
                                    <label htmlFor="username" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lastname"  value={lname} onChange={(e) => setLname(e.target.value)} required/>
                                    <div className="invalid-feedback">
                                        Please enter a Last Name!
                                    </div>
                                </div>

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
