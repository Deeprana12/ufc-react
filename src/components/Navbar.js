import React,{useRef,useEffect,useState,Link} from 'react'
import {NavLink} from "react-router-dom";
require("../Asserts/js/index");

export const Navbar = () => {
   
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
                        <li className="nav-item active" id="li1">
                            <NavLink className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="true" id="li1a" to="/dashboard"><i className="ri-home-4-line"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li className="nav-item" id="li3" aria-expanded="true">
                            <NavLink  className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li3a" to="/admin"><i className="ri-home-8-line"></i><span>Admin Panel</span></NavLink>
                        </li>
                        <li className="nav-item" id="li2">
                            <NavLink  className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a" to="/active_user"><i className="ri-user-3-line"></i><span>Active User</span></NavLink>
                        </li>
                        <li className="nav-item" id="li4">
                            <NavLink className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li4a" to="/m1"><i className="ri-home-8-line"></i><span>Module - 1</span></NavLink>
                        </li>
                        <li className="nav-item" id="li5">
                            <NavLink className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li5a" to="/m2"><i className="ri-home-8-line"></i><span>Module - 2</span></NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="p-3"></div>
                </div><div className="scrollbar-track scrollbar-track-x" style={{display: "none"}}><div className="scrollbar-thumb scrollbar-thumb-x" style={{width: "260px", transform: "translate3d(0px, 0px, 0px)"}}></div></div><div className="scrollbar-track scrollbar-track-y" style={{display: "none"}}><div className="scrollbar-thumb scrollbar-thumb-y" style={{height: "1555px", transform: "translate3d(0px, 0px, 0px)"}}></div></div></div>
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
                                                    <h6 className="mb-0 line-height text-white">Mr.admin </h6>
                                                    <span className="font-size-12 text-white">Available</span>
                                                </div>
                                            </a>
                                            <div className="iq-sub-dropdown iq-user-dropdown">
                                                <div className="iq-card shadow-none m-0">
                                                    <div className="iq-card-body p-0 ">
                                                        <div className="bg-primary p-3">
                                                            <h5 className="mb-0 text-white line-height">Hello Mr.admin </h5>
                                                            <span className="text-white font-size-12">Available</span>
                                                        </div>
                                                        <a Link="profile.php" className="iq-sub-card iq-bg-primary-hover">
                                                            <div className="media align-items-center">
                                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                                    <i className="ri-file-user-line"></i>
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <h6 className="mb-0 ">My Profile</h6>
                                                                    <p className="mb-0 font-size-12">View personal profile details.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a Link="profile-edit.php" className="iq-sub-card iq-bg-primary-hover">
                                                            <div className="media align-items-center">
                                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                                    <i className="ri-profile-line"></i>
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <h6 className="mb-0 ">Edit Profile</h6>
                                                                    <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a Link="account-setting.php" className="iq-sub-card iq-bg-primary-hover">
                                                            <div className="media align-items-center">
                                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                                    <i className="ri-account-box-line"></i>
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <h6 className="mb-0 ">Account settings</h6>
                                                                    <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a Link="privacy-setting.php" className="iq-sub-card iq-bg-primary-hover">
                                                            <div className="media align-items-center">
                                                                <div className="rounded iq-card-icon iq-bg-primary">
                                                                    <i className="ri-lock-line"></i>
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <h6 className="mb-0 ">Privacy Settings</h6>
                                                                    <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="d-inline-block w-100 text-center p-3">
                                                            <form action="../Database/loginPostMethod.php" method="post">
                                                                <button className="bg-primary iq-sign-btn" name="logout" type="submit" role="button">Sign out<i className="ri-login-box-line ml-2"></i></button>
                                                            </form>
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