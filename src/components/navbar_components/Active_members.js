import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import Modal from './UpdateForm';
import { Navbar } from '../Navbar';
import ReactPaginate from 'react-paginate';
import { Redirect, useHistory } from 'react-router';
import {RotateLoader} from 'react-spinners'

export const Active_members = () => {

    const [loading, setLoading] = useState(false)
    
    const override = ` 
        top: 250px;
        display: block;
        margin: 0 auto;        
    `;

    const addmanually = () => {
        history.push('/addmanually')
    }
     
    const history = useHistory()
    
    if(localStorage.getItem('user')!='done'){
        history.push('/');
    }

    const [user,setUser] = useState([]);    
    const [morning,setMorning] = useState(0);    
    const [evening,setEvening] = useState(0);    
    useEffect(() => {
        axios.get('/users/getactivemembers', {                    
        }).then((res)=>{
            setUser(res.data)
            setLoading(true)            
        }).catch((err) => {
            console.log(err); 
        });  
        axios.get('/users/getbatchcount', {                    
        }).then((res)=>{
            console.log(res);
            setMorning(res.data.morning);
            setEvening(res.data.evening);
        }).catch((err) => {
            console.log(err); 
        });               
    },[]);

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }
    
    let i=0;
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
                return(<>                                                 
                    <tr>
                        <td> {++i} </td>
                        <td> {user.firstname} </td>
                        <td> {user.middlename} </td>
                        <td> {user.email} </td>
                        <td> {user.studentIDEmployeeID} </td>
                        <td> {user.nameofinstitute} </td>
                        <td> {user.nameofDepartment} </td>
                        <td> {user.mobileno} </td>
                        <td>  <button className="btn btn-outline-primary mb-3" data-toggle="modal" 
                        data-target="#exampleModalScrollable" onClick={openModal}>View</button>
                            <Modal ref={modalRef} paymentstatus={user.paymentstatus} forId={user._id} fname={user.firstname}
                            lname={user.lastname} mname={user.middlename} noi={user.nameofinstitute}
                            nod={user.nameofDepartment} sid={user.studentIDEmployeeID} add={user.residentialAddress}
                            city={user.city} zip={user.zip} tel1={user.telephone} mob={user.mobileno} email={user.email}
                            dob={user.dob} gender={user.gender} ecp={user.emergencyContactPerson} relation={user.relation}
                            rele={user.telephone1} mob1={user.mobileno1} email1={user.email1} membership={user.membership} 
                            batchtiming={user.batchtiming} morningbatch={morning} eveningbatch={evening}>  
                            </Modal>
                        </td>
                    </tr>
                </>)
            })        
    
    const pageCount = Math.ceil(user.length / userPerPage)

    const changePage = ({selected}) => {
        setpageNumber(selected) // no need to worry about this React Paginate will handle it
    }

    return (
        <div>        
        <div className="wrapper">
        <Navbar/>
        <div id="content-page" class="content-page">
            <div class="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                    <p class="h3 card-title">List of members : </p>
                                    </div>
                                </div>

                                {loading ?                                
                                <div class="iq-card-body">
                                    <div class="table-responsive">
                                    <div class="row justify-content-between">
                                        <div class="col-sm-12 col-md-6">
                                            <div id="user_list_datatable_info" class="dataTables_filter">
                                                <form class="mr-3 position-relative">
                                                <div class="form-group mb-0">
                                                    <input type="search" class="form-control" id="exampleInputSearch" placeholder="Search...(ex.19ce001)" aria-controls="user-list-table"
                                                        onChange={(e)=> {setsearchTerm(e.target.value)}}
                                                    />
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="user-list-files d-flex float-right">
                                                <button class="btn btn-outline-primary" onClick={addmanually}>
                                                + ADD MEMBER
                                                </button>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <table id="user-list-table" class="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Student ID</th>
                                                <th>Institute</th>
                                                <th>Department</th>
                                                <th>Mobile No</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            { displayUsers }
                                                
                                        </tbody>
                                    </table>
                                    </div>
                                    <div class="row justify-content-between mt-3">
                                        <div id="user-list-page-info" class="col-md-6">
                                            <span>Showing 1 to 5 of 5 entries</span>
                                        </div>
                                        <div class="col-md-6">
                                            <ReactPaginate className="pagenavigation"
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount}
                                                onPageChange={changePage}   
                                                containerClassName="pagination justify-content-end"
                                                previousClassName="page-item"
                                                nextLinkClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextLinkClassName="page-link"                                                
                                                activeLinkClassName="page-link"
                                                activeClassName="page-item active"                                                
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                            />
                                        </div>                                    
                                    </div>
                                </div>
                            :<RotateLoader size={20} color='#9d7af3' css={override}  loading />}         
                            </div>
                        </div>
                    </div>                                            
                </div>
            </div>    
            </div>            
        </div>
    )
}
