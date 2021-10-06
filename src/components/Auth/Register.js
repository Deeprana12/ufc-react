import React,{useState} from 'react'
import  { useHistory } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
    
    const history = useHistory();
    const redirect = () => {
        history.push('/register');
    }


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [checkPass,setCheckPass] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const storeRegister = (e) =>{
        e.preventDefault();
        const newEntry = {email:email,password:password}
        setAllEntry([...allEntry,newEntry]);         
        if(password === checkPass){           
            axios.post("api/register",{            
                email,password
            }).then((res)=>{
                history.push('/');
            }).catch((e)=>{
                console.log(e);
            });
        }
    }

    return (
        <div>
            <div class="container">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-2 mt-5">                                        
                    <div class="iq-card-body font-weight-bold">
                        <p style={{"text-align": "center", "font-size": "35px", "color": "#0b0b0b"}}>Registration</p>
                        <form class="validate" onSubmit={storeRegister} method="POST">
                            <div class="row g-2"> 
                            <div class="col-md-12 mb-3 name">
                                    <label for="username" class="form-label">Email</label>
                                    <input type="text" class="form-control" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <div class="invalid-feedback">
                                        Please enter a username!
                                    </div>
                                </div>                              
                                                                
                                <div class="col-md-12 mb-4 name">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <div class="invalid-feedback">
                                        Please enter a Password!
                                    </div>
                                </div>

                                <div class="col-md-12 mb-4 name">
                                    <label for="password" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" name="password" value={checkPass} onChange={(e) => setCheckPass(e.target.value)}                                        
                                    />
                                    <div class="invalid-feedback">
                                        Please enter a Password!
                                    </div>
                                </div>

                                <div class="col-md-12 mb-4" align="right">
                                    <button class="btn btn-primary" id="submit" name="register" type="submit">Register</button>
                                </div>
                                <div class="col-md-12 mb-4">
                                    <button onClick={redirect}>
                                        Already have an Account? Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
