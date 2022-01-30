import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom'
import {RotateLoader} from 'react-spinners'
import {Doughnut} from 'react-chartjs-2';

export const Currentbatch = () => {    
    
    const [loading, setLoading] = useState(false)
    
    const override = ` 
        top: 350px;
        display: block;
        margin: 0 auto;
    `; 

    return (
        <>                            
            {/* {loading ?  
            <> */}
            <div className="wrapper">
            <Navbar/>
                <div id="content-page" className="content-page">
                    <div className="container-fluid">
                        <div className="row">                     

                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-success">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>Regular</h4>                                    
                                    </div>
                                    <p>Candidates who are coming in proper time</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-danger">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>Payment Due</h4>                                    
                                    </div>
                                    <p>Candidates whose fees are due in 7 days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-warning">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>Different batch</h4>                                    
                                    </div>
                                    <p>Candidates having different batch entry</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-primary">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>One Punch</h4>                        
                                    </div>
                                    <p>Candidates having single punch entry</p>
                                </div>
                            </div>
                        </div>

                            <div className="col-sm-6 col-md-6 col-lg-3"> 
                                <div class="list-group">                              
                                    <a href="#" class="list-group-item list-group-item-action">                                       
                                        <div class="card">
                                            <div class="row no-gutters flex-row-reverse">
                                                <div class="col-md-5 pr-2">
                                                    <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                        
                                                </div>
                                                <div class="col-md-7">
                                                        <div className="table-responsive">                                      
                                                        <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                        <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                        <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                    </div>
                                                </div>
                                                        <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                        <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                            <div className="col-sm-6 col-md-6 col-lg-3"> 
                                <a href="#" class="list-group-item list-group-item-action">                                    
                                    <div class="card">
                                        <div class="row no-gutters flex-row-reverse">
                                            <div class="col-md-5 pr-2">
                                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                    
                                            </div>
                                            <div class="col-md-7">
                                                    <div className="table-responsive">                                      
                                                    <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                    <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                    <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                </div>
                                            </div>
                                                    <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                    <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                        </div>
                                    </div>
                                </a> 
                                <a href="#" class="list-group-item list-group-item-action">                                                                        
                                    <div class="card">
                                        <div class="row no-gutters flex-row-reverse">
                                            <div class="col-md-5 pr-2">
                                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                    
                                            </div>
                                            <div class="col-md-7">
                                                    <div className="table-responsive">                                      
                                                    <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                    <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                    <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                </div>
                                            </div>
                                                    <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                    <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                        </div>
                                    </div>
                                </a> 
                                <a href="#" class="list-group-item list-group-item-action">                                    
                                    <div class="card">
                                        <div class="row no-gutters flex-row-reverse">
                                            <div class="col-md-5 pr-2">
                                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                    
                                            </div>
                                            <div class="col-md-7">
                                                    <div className="table-responsive">                                      
                                                    <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                    <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                    <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                </div>
                                            </div>
                                                    <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                    <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                        </div>
                                    </div>
                                </a> 
                                <a href="#" class="list-group-item list-group-item-action">                                    
                                    <div class="card">
                                        <div class="row no-gutters flex-row-reverse">
                                            <div class="col-md-5 pr-2">
                                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                    
                                            </div>
                                            <div class="col-md-7">
                                                    <div className="table-responsive">                                      
                                                    <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                    <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                    <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                </div>
                                            </div>
                                                    <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                    <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                        </div>
                                    </div>
                                </a>                                
                            </div>  
                            <div className="col-sm-6 col-md-6 col-lg-3"> 
                                <div class="list-group">                              
                                <a href="#" class="list-group-item list-group-item-action">                                       
                                        <div class="card">
                                            <div class="row no-gutters flex-row-reverse">
                                                <div class="col-md-5 pr-2">
                                                    <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                        
                                                </div>
                                                <div class="col-md-7">
                                                        <div className="table-responsive">                                      
                                                        <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                        <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                        <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                    </div>
                                                </div>
                                                        <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                        <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                            </div>
                                        </div>
                                    </a>                                   
                                </div>
                                
                            </div>  
                            <div className="col-sm-6 col-md-6 col-lg-3"> 
                                <div class="list-group">                              
                                <a href="#" class="list-group-item list-group-item-action">                                       
                                        <div class="card">
                                            <div class="row no-gutters flex-row-reverse">
                                                <div class="col-md-5 pr-2">
                                                    <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>                                                                                                            
                                                        
                                                </div>
                                                <div class="col-md-7">
                                                        <div className="table-responsive">                                      
                                                        <tr><strong>Name :&nbsp;</strong> <u>Jon snow</u></tr>
                                                        <tr><strong>Punch : &nbsp;</strong> <u>09:01:15</u></tr>
                                                        <tr><strong>Date : &nbsp;</strong> <br/><u>21/01/2022 - 21/02/2022</u></tr>
                                                    </div>
                                                </div>
                                                        <button type="button" class="btn btn-primary btn-sm m-1">Accept</button>
                                                        <button type="button" class="btn btn-danger btn-sm m-1">Remove</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
                {/* </>   : <RotateLoader size={20} color='#9d7af3' css={override} position='top-right' loading/>} */}
        </>        
    )
}