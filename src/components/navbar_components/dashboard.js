import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom'


export const Dashboard = () => {
    
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

    const [users, setUsers] = useState('')
    const [members, setMembers] = useState('')
    const [pendingMember, setpendingMember] = useState('')

    useEffect(() => {       
        if(localStorage.getItem('user')!='done'){
            history.push('/');
            notifyError("You are not Authorized for this page!!")
        }else{
            notify("🦄 Welcome Admin!!")
        }
        axios.get('/users/getuserscount', {                    
        }).then((res)=>{
            //console.log(res)
            setUsers(res.data)
        }).catch((err) => {
            //console.log(err);
        }); 
        
        axios.get('/users/getmemberscount', {                    
        }).then((res)=>{
            //console.log(res)
            setMembers(res.data)
        }).catch((err) => {
            //console.log(err);
        });

        axios.get('/users/getmemberscountpending', {                    
        }).then((res)=>{
            //console.log(res)
            setpendingMember(res.data)
        }).catch((err) => {
            //console.log(err);
        });
        
    }, [])
    const history = useHistory();
    
    // if(localStorage.getItem('user') === null || localStorage.getItem('user') == 'null'){
    //     history.push('/signin');
    // } else {
        return (
            <>            
                {/*<!-- Dashboard --> */}
                <div className="wrapper">
                <Navbar/>
                    <div id="content-page" className="content-page">
                        <div className="container-fluid">
                            <div className="row">                                                                                     
                                <div className="col-sm-6 col-md-6 col-lg-4"> 
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#users" className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
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
                                                </div>
                                            </div>
                                        </a>
                                    </div>      
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" id="tbookings">
                                        <a href="#users" className="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div className="iq-card-body">
                                            <div className="text"><h5><span>Total members </span><i className="fa fa-users ml-3" aria-hidden="true"></i></h5><h5></h5></div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="value-box">
                                                        <h2 className="mb-0"><span className="">{members}</span></h2>                                
                                                    </div>
                                                    <div className="iq-iconbox iq-bg-primary">
                                                        <i className="ri-arrow-right-line"></i>
                                                    </div>
                                                </div>
                                                <div className="iq-progress-bar mt-5">
                                                    <span className="bg-primary" data-percent="66" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
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
                                            <div id="progress-chart-3" style={{"minHeight": "266.537px"}}><div id="apexcharts905w1md3i" className="apexcharts-canvas apexcharts905w1md3i light" style={{"width": "380px", "height": "266.537px"}}><svg id="SvgjsSvg1632" width="380" height="266.5365853658537" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlnsdata="ApexChartsNS" transform="translate(0, 0)" style={{"background":"transparent"}}><g id="SvgjsG1634" className="apexcharts-inner apexcharts-graphical" transform="translate(69.5, 0)"><defs id="SvgjsDefs1633"><clipPath id="gridRectMask905w1md3i"><rect id="SvgjsRect1635" width="245" height="267" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0"></rect></clipPath><clipPath id="gridRectMarkerMask905w1md3i"><rect id="SvgjsRect1636" width="245" height="267" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0"></rect></clipPath></defs><g id="SvgjsG1638" className="apexcharts-radialbar"><g id="SvgjsG1639"><g id="SvgjsG1640" className="apexcharts-tracks"><g id="SvgjsG1641" className="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 121.5 38.71219512195121 A 93.78780487804879 93.78780487804879 0 1 1 121.4836309401497 38.712196550421154" fill="none" fillOpacity="1" stroke="rgba(225,229,255,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="1.4480487804878053" strokeDasharray="0" className="apexcharts-radialbar-area" datapathorig="M 121.5 38.71219512195121 A 93.78780487804879 93.78780487804879 0 1 1 121.4836309401497 38.712196550421154"></path></g><g id="SvgjsG1643" className="apexcharts-radialbar-track apexcharts-track" rel="2"><path id="apexcharts-radialbarTrack-1" d="M 121.5 63.36585365853658 A 69.13414634146342 69.13414634146342 0 1 1 121.4879338152691 63.36585471150984" fill="none" fillOpacity="1" stroke="rgba(225,229,255,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="1.4480487804878053" strokeDasharray="0" className="apexcharts-radialbar-area" datapathorig="M 121.5 63.36585365853658 A 69.13414634146342 69.13414634146342 0 1 1 121.4879338152691 63.36585471150984"></path></g><g id="SvgjsG1645" className="apexcharts-radialbar-track apexcharts-track" rel="3"><path id="apexcharts-radialbarTrack-2" d="M 121.5 88.01951219512195 A 44.48048780487805 44.48048780487805 0 1 1 121.49223669038852 88.01951287259851" fill="none" fillOpacity="1" stroke="rgba(225,229,255,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="1.4480487804878053" strokeDasharray="0" className="apexcharts-radialbar-area" datapathorig="M 121.5 88.01951219512195 A 44.48048780487805 44.48048780487805 0 1 1 121.49223669038852 88.01951287259851"></path></g></g><g id="SvgjsG1647"><g id="SvgjsG1652" className="apexcharts-series apexcharts-radial-series" seriesname="Total" rel="1" datarealindex="0"><path id="SvgjsPath1653" d="M 121.5 38.71219512195121 A 93.78780487804879 93.78780487804879 0 1 1 27.71219512195121 132.5" fill="none" fillOpacity="1" stroke="rgba(130,122,243,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="9.653658536585368" strokeDasharray="0" className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" dataangle="270" datavalue={100} index="0" j="0" datapathorig="M 121.5 38.71219512195121 A 93.78780487804879 93.78780487804879 0 1 1 27.71219512195121 132.5"></path></g><g id="SvgjsG1654" className="apexcharts-series apexcharts-radial-series" seriesname="Panding" rel="2" datarealindex="1"><path id="SvgjsPath1655" d="M 121.5 63.36585365853658 A 69.13414634146342 69.13414634146342 0 1 1 55.749519623448464 153.8636261111168" fill="none" fillOpacity="1" stroke="rgba(39,179,69,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="9.653658536585368" strokeDasharray="0" className="apexcharts-radialbar-area apexcharts-radialbar-slice-1" dataangle="252" datavalue="70" index="0" j="1" datapathorig="M 121.5 63.36585365853658 A 69.13414634146342 69.13414634146342 0 1 1 55.749519623448464 153.8636261111168"></path></g><g id="SvgjsG1656" className="apexcharts-series apexcharts-radial-series" seriesname="Success" rel="3" datarealindex="2"><path id="SvgjsPath1657" d="M 121.5 88.01951219512195 A 44.48048780487805 44.48048780487805 0 1 1 77.8367440377194 140.98727719190745" fill="none" fillOpacity="1" stroke="rgba(108,230,244,1)" strokeOpacity="1" strokeLinecap="butt" strokeWidth="9.653658536585368" strokeDasharray="0" className="apexcharts-radialbar-area apexcharts-radialbar-slice-2" dataangle="259" datavalue="72" index="0" j="2" datapathorig="M 121.5 88.01951219512195 A 44.48048780487805 44.48048780487805 0 1 1 77.8367440377194 140.98727719190745"></path></g><circle id="SvgjsCircle1648" r="43.75646341463415" cx="121.5" cy="132.5" className="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1649" className="apexcharts-datalabels-group" transform="translate(0, 0)" style={{"opacity": "0"}}><text id="SvgjsText1650" fontFamily="Helvetica, Arial, sans-serif" x="121.5" y="132.5" textAnchor="middle" dominantBaseline="auto" fontSize="16px" fontWeight="regular" fill="#827af3" className="apexcharts-datalabel-label" style={{"fontFamily": "Helvetica, Arial, sans-serif"}}></text><text id="SvgjsText1651" fontFamily="Helvetica, Arial, sans-serif" x="121.5" y="164.5" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight="regular" fill="#373d3f" className="apexcharts-datalabel-value" style={{"fontFamily": "Helvetica, Arial, sans-serif"}}></text></g></g></g></g><line id="SvgjsLine1658" x1="0" y1="0" x2="243" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1659" x1="0" y1="0" x2="243" y2="0" strokeDasharray="0" strokeWidth="0" className="apexcharts-ycrosshairs-hidden"></line></g></svg><div className="apexcharts-legend"></div></div></div>
                                            <div className="d-flex align-items-center justify-content-between mt-3 text-center">
                                                <div className="title position-relative">
                                                    <h5>Total</h5>
                                                    <p className="mb-0 ml-2 mr-2">{members}</p>
                                                </div>
                                                <div className="title">
                                                    <h5>Pending</h5>
                                                    <p className="mb-0 ml-2 mr-2">{pendingMember}</p>
                                                </div>
                                                <div className="title">
                                                    <h5>Verified</h5>
                                                    <p className="mb-0 ml-2 mr-2">{members - pendingMember}</p>
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
            </>        
        )
    }

                      