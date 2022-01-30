import {ResponsiveContainer,LineChart,Line} from 'recharts'
import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom'
import {RotateLoader} from 'react-spinners'
import {Doughnut} from 'react-chartjs-2';
export const Dashboard = () => {    
    
    const [pendingMember, setpendingMember] = useState('')
    const [paymentpending, setPaymentpending] = useState('')
    const [verificationpending, setVerificationpending] = useState('')
    const [members, setMembers] = useState('')
    
    const data = {
        labels:['Verified','Pending','Active'],
        datasets:[{
            data:[verificationpending,paymentpending,members],
            backgroundColor:[
                "#ffcd56","#ff6384","#36a2eb"
            ]
        }]    
    }

    const [loading, setLoading] = useState(false)
    
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

    const [users, setUsers] = useState('')

    useEffect(() => {       
        if(localStorage.getItem('user')!='done'){
            history.push('/');
            notifyError("You are not Authorized for this page!!")
        }else{
            if(localStorage.getItem('notify')=="once_done"){
            }else{
                const myTimeout = setTimeout(maketostify, 3000);
                function maketostify(){
                    notifySuccess("Welcome Admin!!")
                    localStorage.setItem('notify','once_done');
                }
            }         
        }
        axios.get('/users/getuserscount', {
        }).then((res)=>{
            setLoading(true)            
            setUsers(res.data)
        }).catch((err) => {
            console.log(err);
        }); 
        
        axios.get('/users/getmemberscount', {                    
        }).then((res)=>{            
            setMembers(res.data)
        }).catch((err) => {
            console.log(err);
        });

        axios.get('/users/verificationpending', {                    
        }).then((res)=>{                   
            console.log(res.data)    
            setVerificationpending(res.data)
        }).catch((err) => {
            console.log(err);
        });

        axios.get('/users/paymentpending', {                    
        }).then((res)=>{
            setPaymentpending(res.data)
        }).catch((err) => {
            console.log(err);
        });
        
    }, [])

    const history = useHistory();

    const gotoallusers = () =>{
        history.push('/total_users')
    }
    const gotoactivemembers = () =>{
        history.push('/active_members')
    }
    const gotopendingmembers = () =>{
        history.push('/admin')
    }
    const gotopaymentpending = () =>{
        history.push('/paymentpending')
    }
    const override = ` 
        top: 350px;
        display: block;
        margin: 0 auto;
    `;    
        
        return (
            <>            
                {/*<!-- Dashboard --> */}
                {loading ?  
                <>
                <div className="wrapper">
                <Navbar/>
                    <div id="content-page" className="content-page">
                        <div className="container-fluid">
                            <div className="row">                     
                                <div className="col-sm-6 col-md-6 col-lg-4"> 
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#" onClick={gotoallusers} className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
                                            <div className="text"><h5><span>Total Users</span><i className="fa fa-users ml-3" aria-hidden="true"></i></h5><h5></h5></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="value-box">
                                                        <h2 className="mb-0"><span className=" ">{users}</span></h2>                                
                                                    </div>
                                                    <div className="iq-iconbox iq-bg-primary">
                                                        <i className="ri-arrow-right-line"></i>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-5">
                                                    <span className="bg-primary" data-percent="66" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
                                                    <p className="m-2">Admin users.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>      

                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#" onClick={gotoactivemembers} className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
                                            <div className="text"><h5><span>Active members </span><i className="fa fa-users ml-3" aria-hidden="true"></i></h5><h5></h5></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="value-box">
                                                        <h2 className="mb-0"><span className="">{members}</span></h2>                                
                                                    </div>
                                                    <div className="iq-iconbox iq-bg-primary">
                                                        <i className="ri-arrow-right-line"></i>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-5">
                                                    <span className="bg-primary" data-percent="100" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
                                                    <p className="m-2">Details are verified and payment has done.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>                                                            
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-4"> 
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#" onClick={gotopendingmembers} className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
                                            <div className="text"><h5><span>Verification Pending</span><i className="fa fa-users ml-3" aria-hidden="true"></i></h5><h5></h5></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="value-box">
                                                        <h2 className="mb-0"><span className="">{verificationpending}</span></h2>                                
                                                    </div>
                                                    <div className="iq-iconbox iq-bg-primary">
                                                        <i className="ri-arrow-right-line"></i>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-5">
                                                    <span className="bg-primary" data-percent="66" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
                                                    <p className="m-2">Details are not verified as well as payment is remaining</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>      
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#" onClick={gotopaymentpending} className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
                                            <div className="text"><h5><span> Payment Remaining </span><i className="fa fa-users ml-3" aria-hidden="true"></i></h5><h5></h5></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="value-box">
                                                        <h2 className="mb-0"><span className="">{paymentpending}</span></h2>                                
                                                    </div>
                                                    <div className="iq-iconbox iq-bg-primary">
                                                        <i className="ri-arrow-right-line"></i>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-5">
                                                    <span className="bg-primary" data-percent="66" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
                                                    <p className="m-2">Details are verified but payment is still remaining.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>                                                            
                                </div>                                
    
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Total Progress of Members : </h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body" style={{position: "relative"}}>
                                            <div id="progress-chart-3" style={{"minHeight": "300px"}}>
                                                <div id="apexcharts905w1md3i" className='d-flex align-items-center justify-content-between text-center' 
                                                style={{"margin":"0 auto","width": "320px", "height": "300px"}}>                                            
                                                    <Doughnut data={data}/>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-3 text-center">
                                                <div className="title position-relative">
                                                    <h5>Total</h5>
                                                    <p className="mb-0 ml-2 mr-2">{members}</p>
                                                </div>
                                                <div className="title">
                                                    <h5>Pending</h5>
                                                    <p className="mb-0 ml-2 mr-2">{paymentpending}</p>
                                                </div>
                                                <div className="title">
                                                    <h5>Verified</h5>
                                                    <p className="mb-0 ml-2 mr-2">{verificationpending}</p>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="resize-triggers"><div className="expand-trigger"><div style={{"width": "421px", "height": "373px"}}></div></div><div className="contract-trigger"></div></div>
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
                            </div>      
                        </div>
                    </div>  
                </div>
                 </>   : <RotateLoader size={20} color='#9d7af3' css={override} position='top-right' loading/>}
            </>        
        )
    }
    
                      