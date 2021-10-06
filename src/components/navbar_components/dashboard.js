import React from 'react'
import { Navbar } from '../Navbar';

export const Dashboard = () => {
    return (
        <div>            
            {/*<!-- Dashboard --> */}
            <div className="wrapper">
            <Navbar/>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                <div class="row">                    
                <div className="col-12">
                    <div class="col-md-6 col-lg-3">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height" id="tbookings">
                        <a href="#users" class="iq-waves-effect nav-link" data-toggle="tab" aria-selected="false" id="li2a"><div class="iq-card-body">
                                <div class="text"><h5><span>Total bookings</span></h5><h5></h5></div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="value-box">
                                            <h2 class="mb-0"><span class="counter">80</span></h2>                                
                                        </div>
                                        <div class="iq-iconbox iq-bg-primary">
                                            <i class="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <div class="iq-progress-bar mt-5">
                                        <span class="bg-primary" data-percent="66" style={{transition:" width 2s ease 0s", width: "66%"}}></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                            <div class="iq-card-body">                    
                                <a href="#"><div class="text"><h5><span>Total queries</span></h5><h5></h5></div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="value-box">
                                            <h2 class="mb-0"><span class="counter">80</span></h2>                                
                                        </div>
                                        <div class="iq-iconbox iq-bg-success">
                                            <i class="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <div class="iq-progress-bar mt-5">
                                        <span class="bg-success" data-percent="66" style={{transition: "width 2s ease 0s", width: "66%"}}></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
