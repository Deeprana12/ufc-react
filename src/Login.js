import React from 'react'

export const Login = () => {

    // async function loginCheck() {
    //     let res = axios  
    // }

    return (
        <div>
            <div class="container">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-2 mt-5">                   
                    <div class="iq-card-body font-weight-bold">
                        <p style={{"text-align": "center", "font-size": "35px", "color": "#0b0b0b"}}>Login</p>
                        <form action="Database/loginPostMethod.php" class="validate" method="POST">

                            <div class="row">
                                <div class="col-md-12 mb-3 name">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control" name="username"/>
                                    <div class="invalid-feedback">
                                        Please enter a username!
                                    </div>
                                </div>

                                <div class="col-md-12 mb-4 name">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password"/>
                                    <div class="invalid-feedback">
                                        Please enter a Password!
                                    </div>
                                </div>

                                <div class="col-md-12 mb-4" align="right">                                    
                                    <button class="btn btn-primary" id="submit" name="login" type="submit">Login</button>
                                </div>

                                <div class="col-md-12 mb-4">
                                    {/* <a href="Views/register.php"> */}
                                        <button>Don't have an Account? Register</button>
                                    {/* </a> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
