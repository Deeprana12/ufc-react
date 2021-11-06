import React,{useState,useEffect} from 'react'
import {NavLink,useHistory} from "react-router-dom";
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
require("../Asserts/js/index");

export const Navbar = () => {

    const history = useHistory()
        
    if(localStorage.getItem('user')!='done'){
        history.push('/signin');
    }        

    const [isAdmin, setIsAdmin] = useState(false)

    // if(localStorage.getItem('role')!='ADMIN'){
    //     setIsAdmin('ADMIN')
    // } 
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [role, setRole] = useState('')
    const location = useLocation();

    useEffect(() => {
        if(localStorage.getItem('role')=='ADMIN'){
            setIsAdmin(true)
        }         
        let obj = (localStorage.getItem('dataKey'))
        let i2 = JSON.parse(obj)
        console.log(i2)       
        setFirst(i2.firstname)
        setLast(i2.lastname)
        setRole(i2.role)
        console.log(location.pathname);
    }, [])

    const logitOut = () => {        
        localStorage.setItem('user',null)
        localStorage.setItem('dataKey',null)
        history.push('/');                  
    }   
   
    return (
      <>                 
         <div className="iq-sidebar">
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <a Link="#">
                    <img src="../Asserts/images/logo.gif" className="img-fluid" alt=""/>
                    <span>UFC</span>
                </a>
                <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="ri-arrow-left-s-line"></i></div>
                            <div className="hover-circle"><i className="ri-arrow-right-s-line"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="sidebar-scrollbar" data-scrollbar="true" tabIndex="-1" style={{overflow: "hidden", outline: "none"}}><div className="scroll-content">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu nav nav-tabs nav-fill">
                        <li className="iq-menu-title"><i className="ri-subtract-line"></i><span>Dashboard</span></li>
                        <li className={clsx({'nav-item' : true, 'active': location.pathname === '/dashboard' })} id="li1">
                            <NavLink data-toggle="tab" aria-selected="true" id="li1a" to="/dashboard"><i className="ri-home-4-line"></i><span>Dashboard</span></NavLink>
                        </li>
                        
                        <li className={clsx({'nav-item' : true,'active': location.pathname === '/admin'})} id="li3">
                            <NavLink  data-toggle="tab" aria-selected="false" id="li3a" to="/admin"><i className="ri-home-8-line"></i><span>Pending Members</span></NavLink>
                        </li>

                        <li className={clsx({'nav-item' : true,'active': location.pathname === '/paymentpending'})} id="li5">
                            <NavLink data-toggle="tab" aria-selected="false" id="li5a" to="/paymentpending"><i className="ri-home-8-line"></i><span>Payment Remaining</span></NavLink>
                        </li>

                        <li className={clsx({'nav-item' : true,'active': location.pathname === '/active_members'})} id="li2">
                            <NavLink  data-toggle="tab" aria-selected="false" id="li2a" to="/active_members"><i className="ri-user-3-line"></i><span>Active Members</span></NavLink>
                        </li> 
                        
                        {
                            ((!isAdmin)?<li className={clsx({'nav-item' : true,'active': location.pathname === '/total_users'})} id="li4">
                                <NavLink data-toggle="tab" aria-selected="false" id="li4a" to="/total_users"><i className="ri-home-8-line"></i><span>Total Users</span></NavLink>
                            </li>:null)
                        }
                        
                    </ul>
                </nav>
                <div className="p-3"></div>
                </div><div className="scrollbar-track scrollbar-track-x" style={{display: "none"}}><div className="scrollbar-thumb scrollbar-thumb-x" style={{width: "260px", transform: "translate3d(0px, 0px, 0px)"}}></div></div>                
                <div className="scrollbar-track scrollbar-track-y" style={{display: "none"}}><div className="scrollbar-thumb scrollbar-thumb-y" style={{height: "1555px", transform: "translate3d(0px, 0px, 0px)"}}></div></div></div>
            </div>                    
                    <div className="iq-top-navbar">
                        <div className="iq-navbar-custom">
                        <div className="iq-sidebar-logo">
                            <div className="top-logo">
                                <a Link="index.html" className="logo">
                                <img src="../Asserts/images/logo.gif" className="img-fluid" alt=""/>
                                <span>vito</span>
                                </a>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                                    <div className="navbar-left">
                                        <h3 className="ml-3" ><strong> University Fitess Center</strong></h3>                                
                                    </div>
                                    
                                    
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                                    </div>
                                    
                                    <ul className="navbar-list">
                                        <li>
                                            <a Link="#" className="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                                                <img src="../Asserts/images/user/1.jpg" className="img-fluid rounded mr-3" alt="user"/>
                                                <div className="caption">
                                                    <h6 className="mb-0 line-height text-white">{first} </h6>   
                                                    <span className="font-size-12 text-white">{role}</span>
                                                </div>
                                            </a>
                                            <div className="iq-sub-dropdown iq-user-dropdown">
                                                <div className="iq-card shadow-none m-0">
                                                    <div className="iq-card-body p-0 ">
                                                        <div className="bg-primary p-3">
                                                            <h5 className="mb-0 text-white line-height">Hello, {first} </h5>
                                                            {/* <span className="text-white font-size-12">Available</span> */}
                                                        </div>                                                        
                                                        <div className="d-inline-block w-100 text-center p-3">                                                            
                                                            <button className="bg-primary iq-sign-btn" name="logout" onClick={logitOut} type="submit" role="button">Sign out<i className="ri-login-box-line ml-2"></i></button>                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                            </nav>                                
                </div>
            </div>           
                       
      </>
    )
}
