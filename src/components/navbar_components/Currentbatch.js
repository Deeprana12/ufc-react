import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom'
import {RotateLoader} from 'react-spinners'
import {Doughnut} from 'react-chartjs-2';

export const Currentbatch = () => {    
    
    const [loading, setLoading] = useState(false)
    const [l1,setL1] = useState(false);
    const [l2,setL2] = useState(false);
    const [l3,setL3] = useState(false);
    const [l4,setL4] = useState(false);

    const override = ` 
        top: 350px;
        display: block;
        margin: 0 auto;
    `; 

    let flag = false;
    // function CompareDates(date){
    //     let nowDate = new Date();                
    //     var someDate = new Date('2022-2-17'); // put retrived date here
    //     someDate.setDate(someDate.getDate() + 7);                
    //     if(someDate >= nowDate)
    //         return true;
    //     return false;
    // }

    function renewFees(userId,date){
        axios.patch('/users/renewpayment',{
            id:userId,currentduedate:date
        }).then((res)=>{
            console.log(res);
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })                
    }

    function removeMember(userId){
        axios.post(`/users/removemember/${userId}`,{            
        }).then((res)=>{
            console.log(res)
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }

    const [user,setUser] = useState([]);
    const [activemembers,setActivemembers] = useState([]);
    const [onepunch,setOnepunch] = useState([]);
    const [regular,setRegular] = useState([]);
    const [diff,setDiff] = useState([]);
    
    function getdueMembers() {
        if(flag == false){
            getonePunchmembers();
        }
        axios.get('/users/getduemembers', {
        }).then((res)=>{
            setUser(res.data);           
            setL1(true);
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    function getonePunchmembers(){
        axios.get('/users/getcurrentbatch', {
        }).then((res)=>{
            // console.log(resj);            
            setOnepunch(res.data);
            setL2(true);
            setLoading(true);            
        }).catch((err) => {
            console.log(err); 
        });
    }    
    function fun1(){ 
        axios.get('/SwimAPI/get-users-data?key=4FZaNcfyAjG89NFdennu', {
        }).then((res)=>{
            console.log(res.data.user_entries);               
            storeInmongo(res.data.user_entries);   
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    // let theInterval;
    // const startScannig = () =>{    
    
    //     console.log('start');
    // }

    // const stopScannig = () =>{
    //     console.log('stop');
    //     clearInterval(theInterval);
    // }

    function storeInmongo(fdata){
        // const data = JSON.stringify(fdata);
        // console.log(fdata[0])
        const final_entry = fdata[0];
        axios.post('/users/batch1', {
            final_entry
        }).then((res)=>{
            if(res){
                // alert('done')
            }else alert('error');
            
            setL3(true);
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    function gotoRegular(fdata){
        axios.post('/users/savetoregular', {
            fdata
        }).then((res)=>{
            refreshAll();
            if(res){
                // alert('done')
            }else alert('error');
            setL4(true);
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    function gotoDiff(fdata){
        axios.post('/users/savetodiff', {
            fdata
        }).then((res)=>{
            refreshAll();
            if(res){
                // alert('done')
            }else alert('error');
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    function gotoDelete(id){
        axios.post('/users/deletethis', {
            id
        }).then((res)=>{
            refreshAll();
            if(res){
                // alert('done')
            }else alert('error');
        }).catch((err) => {
            console.log(err); 
        }); 
    }

    function getdiffBatch() {
        axios.get('/users/getdiffBatch', {
        }).then((res)=>{
            setDiff(res.data);            
        }).catch((err) => {
            console.log(err); 
        });
    }

    function getRegular() {
        axios.get('/users/getregular', {
        }).then((res)=>{
            setRegular(res.data);            
        }).catch((err) => {
            console.log(err); 
        });
    }
    // const [show,setShow] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            fun1();
          }, 1000);
          getdueMembers();
            getdiffBatch();
            getRegular();
          return () => clearInterval(interval);

    },[]);
    
    // if(l1==true && l2==true && l3==true && l4==true)
    //     setLoading(true);

    function refreshAll(){
        setLoading(false);
        getdueMembers();
        getdiffBatch();
        getRegular();
        getonePunchmembers();
        // fun1();
    }

    function refreshAllwithfun(){
        setLoading(false);
        getdueMembers();
        getdiffBatch();
        getRegular();
        getonePunchmembers();
        fun1();
    }

    // console.log(onepunch);
    // Fees Pending Section
    const [searchTerm, setsearchTerm] = useState('')
    const [pageNumber, setpageNumber] = useState(0)
    
    const userPerPage = 5
    const pagesVisited = pageNumber * userPerPage

    const displayUsers = user.filter((user)=>{
        if(searchTerm == "")
            return user;
        else if(user.studentIDEmployeeID.toLowerCase().includes(searchTerm.toLowerCase())){
            return user;
        }
        }).slice(pagesVisited,pagesVisited + userPerPage)
            .map((user)=>{
                return(
                <>            
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="card">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 pr-2">
                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>
                            </div>
                            <div class="col-md-7">
                                <div className="table-responsive">                                      
                                    <tr><strong>ID :&nbsp;</strong> <u>{user.studentIDEmployeeID}</u></tr>
                                    <tr><strong>Date: &nbsp;</strong> <u>{user.dueDate}</u></tr>
                                    <tr><strong>Punch Time : &nbsp;</strong> <br/><u>{user.time}</u></tr>
                                </div>
                            </div>
                                <button type="button" class="btn btn-primary btn-sm m-1" onClick={() => renewFees(user._id,user.dueDate)}>Accept</button>
                                <button type="button" class="btn btn-danger btn-sm m-1" onClick={() => removeMember(user._id)}>Remove</button>
                        </div>
                    </div>
                </a>
                </>)
            })        
    
    const pageCount = Math.ceil(user.length / userPerPage)

    const changePage = ({selected}) => {
        setpageNumber(selected) // no need to worry about this React Paginate will handle it
    }

    // one punch batch
    const [searchTerm2, setsearchTerm2] = useState('')
    const [pageNumber2, setpageNumber2] = useState(0)
    
    const userPerPage2 = 5
    const pagesVisited2 = pageNumber2 * userPerPage2

    const displayUsers2 = onepunch.filter((onepunch)=>{
        if(searchTerm2 == "")
            return onepunch;
        else if(onepunch.studentIDEmployeeID.toLowerCase().includes(searchTerm2.toLowerCase())){
            return onepunch;
        }
        }).slice(pagesVisited2,pagesVisited2 + userPerPage2)
            .map((onepunch)=>{
                return(
                <>            
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="card">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 pr-2">            
                                {onepunch.user_id=="19CE117"?<img src="../Asserts/images/user/01.jpg" class="card-img rounded-circle ml-3" alt="#"/>:<img src="../Asserts/images/user/02.jpg" class="card-img rounded-circle ml-3" alt="#"/>}                                                
                            </div>
                            <div class="col-md-7">
                                <div className="table-responsive">                                      
                                    <tr><strong>ID :&nbsp;</strong> <u>{onepunch.user_id}</u></tr>
                                    <tr><strong>Date : &nbsp;</strong> <u>{onepunch.date}</u></tr>
                                    <tr><strong>Punch Time : &nbsp;</strong> <br/><u>{onepunch.time}</u></tr>
                                    <tr><strong>Batch Time :  &nbsp;</strong> <br/><u>{onepunch.user_id==="19CE117"?"07:00:00":"16:00:00"}</u></tr>
                                </div>
                            </div>
                                <button type="button" class="btn btn-primary btn-sm m-1" onClick={() => gotoRegular(onepunch)}>Accept</button>
                                <button type="button" class="btn btn-info btn-sm m-1" onClick={() => gotoDiff(onepunch)}>Diff batch</button>
                                <button type="button" class="btn btn-danger btn-sm m-1" onClick={() => gotoDelete(onepunch._id)}>Remove</button>
                        </div>
                    </div>
                </a>
                </>)
            })
    
    const pageCount2 = Math.ceil(onepunch.length / userPerPage2)

    const changePage2 = ({selected}) => {
        setpageNumber2(selected) // no need to worry about this React Paginate will handle it
    }
    
    // diff batch
    const [searchTerm3, setsearchTerm3] = useState('')
    const [pageNumber3, setpageNumber3] = useState(0)
    
    const userPerPage3 = 5
    const pagesVisited3 = pageNumber3 * userPerPage3

    const displayUsers3 = diff.filter((diff)=>{
        if(searchTerm == "")
            return diff;
        else if(diff.studentIDEmployeeID.toLowerCase().includes(searchTerm.toLowerCase())){
            return diff;
        }
        }).slice(pagesVisited3,pagesVisited3 + userPerPage3)
            .map((diff)=>{
                return(
                <>            
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="card">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 pr-2">
                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>
                            </div>
                            <div class="col-md-7">
                                <div className="table-responsive">                                      
                                    <tr><strong>ID :&nbsp;</strong> <u>{diff.user_id}</u></tr>
                                    <tr><strong>Punch : &nbsp;</strong> <u>{diff.time}</u></tr>
                                    <tr><strong>Date : &nbsp;</strong> <br/><u>{diff.date}</u></tr>
                                </div>
                            </div>
                                {/* <button type="button" class="btn btn-primary btn-sm m-1" onClick={() => renewFees(user._id,user.dueDate)}>Accept</button>
                                <button type="button" class="btn btn-danger btn-sm m-1" onClick={() => removeMember(user._id)}>Remove</button> */}
                        </div>
                    </div>
                </a>
                </>)
            })        
    
    const pageCount3 = Math.ceil(regular.length / userPerPage3)

    const changePage3 = ({selected}) => {
        setpageNumber3(selected) // no need to worry about this React Paginate will handle it
    }

    // on punch

    const [searchTerm4, setsearchTerm4] = useState('')
    const [pageNumber4, setpageNumber4] = useState(0)
    
    const userPerPage4 = 5
    const pagesVisited4 = pageNumber4 * userPerPage4;

    const displayUsers4 = regular.filter((regular)=>{
        if(searchTerm == "")
            return regular;
        else if(regular.studentIDEmployeeID.toLowerCase().includes(searchTerm.toLowerCase())){
            return regular;
        }
        }).slice(pagesVisited4,pagesVisited4 + userPerPage4)
            .map((regular)=>{
                return(
                <>            
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="card">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 pr-2">
                                <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>
                            </div>
                            <div class="col-md-7">
                                <div className="table-responsive">                                      
                                    <tr><strong>ID :&nbsp;</strong> <u>{regular.user_id}</u></tr>
                                    <tr><strong>Punch : &nbsp;</strong> <u>{regular.time}</u></tr>
                                    <tr><strong>Date : &nbsp;</strong> <br/><u>{regular.date}</u></tr>
                                </div>
                            </div>
                                {/* <button type="button" class="btn btn-primary btn-sm m-1" onClick={() => renewFees(user._id,user.dueDate)}>Accept</button>
                                <button type="button" class="btn btn-danger btn-sm m-1" onClick={() => removeMember(user._id)}>Remove</button> */}
                        </div>
                    </div>
                </a>
                </>)
            })        
    
    const pageCount4 = Math.ceil(regular.length / userPerPage4)

    const changePage4 = ({selected}) => {
        setpageNumber4(selected) // no need to worry about this React Paginate will handle it
    }


    return (
        <>                                        
            <div className="wrapper">
            <Navbar/>
                <div id="content-page" className="content-page">
                    <div className="container-fluid">                        
                        {/* <button type="button" class="btn btn-outline-dark mb-3 btn"
                        onClick={()=>startScannig()}>Start</button>
                        <button type="button" class="btn btn-outline-dark mb-3 btn"
                        onClick={()=>stopScannig()}>Stop</button> */}
                        <div className="row">                     
                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-success">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>One punch</h4>                                    
                                    </div>
                                    <p>Candidates who are coming in proper time</p>
                                    {/* <button type="button" class="btn btn-outline-dark center">Refresh</button> */}
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
                                    {/* <button type="button" class="btn btn-outline-dark center">Refresh</button> */}
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
                                    {/* <button type="button" class="btn btn-outline-dark center">Refresh</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-primary">
                                <div class="iq-card-body">
                                    <div class="d-flex align-items-center justify-content-between"> 
                                    <h4>Regular batch</h4>                        
                                    </div>
                                    <p>Candidates having single punch entry</p>
                                    {/* <button type="button" class="btn btn-outline-dark center">Refresh</button> */}
                                </div>
                            </div>
                        </div>

                        {loading ?  <>
                        {/* one punch time */}
                        <div class="col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">                                     
                                <div class="iq-card-body">                             
                                    <div class="list-group">                                                                  
                                        {displayUsers2}                                                                                                                                   
                                    </div>
                                    <div class="row justify-content-between">                                    
                                        <div class="col-md-12">
                                            <ReactPaginate className="pagenavigation"
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount2}
                                                onPageChange={changePage2}
                                                containerClassName="pagination justify-content-end"
                                                previousClassName="page-item"
                                                nextLinkClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextLinkClassName="page-link"
                                                // disabledClassName="page-link"
                                                activeLinkClassName="page-link"
                                                activeClassName="page-item active"                                                
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* payment due */}
                        <div class="col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">                                     
                                <div class="iq-card-body">                             
                                    <div class="list-group">                                                                  
                                        {displayUsers}                                                                                                                                    
                                    </div>
                                    <div class="row justify-content-between">                                    
                                        <div class="col-md-12">
                                            <ReactPaginate className="pagenavigation"
                                                
                                                nextLabel={"Next"}
                                                pageCount={pageCount}
                                                onPageChange={changePage}
                                                containerClassName="pagination justify-content-end"
                                                previousClassName="page-item"
                                                nextLinkClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextLinkClassName="page-link"
                                                // disabledClassName="page-link"
                                                activeLinkClassName="page-link"
                                                activeClassName="page-item active"                                                
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                            />
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        {/* diffrent batch */}
                        <div class="col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">                                     
                                <div class="iq-card-body">                             
                                    <div class="list-group">                                                                  
                                        {displayUsers3}
                                    </div>
                                    <div class="row justify-content-between">                                    
                                        <div class="col-md-12">
                                            <ReactPaginate className="pagenavigation"
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount3}
                                                onPageChange={changePage3}   
                                                containerClassName="pagination justify-content-end"
                                                previousClassName="page-item"
                                                nextLinkClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextLinkClassName="page-link"
                                                // disabledClassName="page-link"
                                                activeLinkClassName="page-link"
                                                activeClassName="page-item active"                                                
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* regular batch */}
                        <div class="col-lg-3">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">     
                                <div class="iq-card-body">                             
                                    <div class="list-group">
                                        {displayUsers4}
                                    </div>
                                    <div class="row justify-content-between">                                    
                                        <div class="col-md-12">
                                            <ReactPaginate className="pagenavigation"
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount4}
                                                onPageChange={changePage4}   
                                                containerClassName="pagination justify-content-end"
                                                previousClassName="page-item"
                                                nextLinkClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextLinkClassName="page-link"
                                                // disabledClassName="page-link"
                                                activeLinkClassName="page-link"
                                                activeClassName="page-item active"                                                
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                            />
                                        </div>                                    
                                    </div>
                                </div>  
                            </div>
                        </div> 
                        </>   : <RotateLoader size={20} color='#9d7af3' css={override} position='top-right' loading/>}

                        </div>
                    </div>
                </div>
            </div>                 
        </>        
    )
}