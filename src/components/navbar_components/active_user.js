import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import Modal from './UpdateForm';
import { Navbar } from '../Navbar';

export const Active_user = () => {

    const [data,setData] = useState([]);    
    useEffect(() => {
        axios.get('/userdata/getmember', {                    
        }).then((res)=>{
            console.log(res);
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        });                
    },[]);    
    
    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }
    let i=0;
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
                                    <h4 class="card-title">User List</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <div class="table-responsive">
                                    <div class="row justify-content-between">
                                        <div class="col-sm-12 col-md-6">
                                            <div id="user_list_datatable_info" class="dataTables_filter">
                                                <form class="mr-3 position-relative">
                                                <div class="form-group mb-0">
                                                    <input type="search" class="form-control" id="exampleInputSearch" placeholder="Search" aria-controls="user-list-table"/>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div class="user-list-files d-flex float-right">
                                                <a class="iq-bg-primary" href="javascript:void();">
                                                Print
                                                </a>
                                                <a class="iq-bg-primary" href="javascript:void();">
                                                Excel
                                                </a>
                                                <a class="iq-bg-primary" href="javascript:void();">
                                                Pdf
                                                </a>
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

                                            {
                                                    data.map((user)=>{
                                                        return(<>                                                 
                                                            <tr>
                                                                <td>i++</td>
                                                                <td > {user.firstname} </td>
                                                                <td > {user.middlename} </td>
                                                                <td> {user.email}</td>
                                                                <td> {user.studentIDEmployeeID}</td>
                                                                <td> {user.nameofInstitute}</td>
                                                                <td>{user.nameofDepartment}</td>
                                                                <td>{user.mobileno}</td>
                                                                <td>  <button className="btn btn-outline-primary mb-3" data-toggle="modal" 
                                                                data-target="#exampleModalScrollable" onClick={openModal}>Click</button>
                                                                    <Modal ref={modalRef} forId={user._id} fname={user.firstname}
                                                                    lname={user.lastname} mname={user.middlename} noi={user.nameofInstitute}
                                                                    nod={user.nameofDepartment} sid={user.studentIDEmployeeID} add={user.residentialAddress}
                                                                    city={user.city} zip={user.zip} tel1={user.telephone} mob={user.mobileno} email={user.email}
                                                                    dob={user.dob} gender={user.gender} ecp={user.emergencyContactPerson} relation={user.relation}
                                                                    rele={user.relephone1} mob1={user.mobileNo1} email1={user.email1}>  
                                                                    </Modal>
                                                                </td>
                                                            </tr>
                                                        </>)
                                                    })
                                                }
                                                {/* <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../Asserts/images/user/01.jpg" alt="profile"/></td>
                                                <td>Anna Sthesia</td>
                                                <td>(760) 756 7568</td>
                                                <td>annasthesia@gmail.com</td>
                                                <td>USA</td>
                                                <td><span class="badge iq-bg-primary">Active</span></td>
                                                <td>Acme Corporation</td>
                                                <td>2019/12/01</td>
                                                <td>
                                                <div class="flex align-items-center list-user-action">
                                                    <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a>
                                                    <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                                    <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                                </td> */}
                                        </tbody>
                                    </table>
                                    </div>
                                    <div class="row justify-content-between mt-3">
                                        <div id="user-list-page-info" class="col-md-6">
                                            <span>Showing 1 to 5 of 5 entries</span>
                                        </div>
                                        <div class="col-md-6">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination justify-content-end mb-0">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">Next</a>
                                                </li>
                                                </ul>
                                            </nav>
                                        </div>
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
