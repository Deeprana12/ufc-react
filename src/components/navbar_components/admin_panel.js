import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import { Navbar } from '../Navbar';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router';
import {RotateLoader} from 'react-spinners'

export const Admin_panel = () => {

    const [loading, setLoading] = useState(false)
    
    const override = ` 
        top: 250px;
        display: block;
        margin: 0 auto;        
    `;

    const history = useHistory()
    
    if(localStorage.getItem('user') === null || localStorage.getItem('user') == 'null'){
        history.push('/');
    }

    const [user,setUser] = useState([]);    
    useEffect(() => {
        axios.get('/users/getusers', {                    
        }).then((res)=>{
            setLoading(true)
            console.log(res)
            setUser(res.data)
        }).catch((err) => {
            console.log(err);
        });                
    },[]); 

    // Function for changing the value for user

    const changeThisRole = (role,id) => {        
        axios.patch(`users/changeRole/${id}`,{role}).
        then((res)=>{
            if(res.data == 'done'){
                alert('Role changed successfully')
            }else{
                alert('Something went wrong!!') 
            }
        }).catch((er)=>{
            console.log(er)
        })
    }
    
    // Handling pagination    
    let i=0;
    const [searchTerm, setsearchTerm] = useState('')
    const [pageNumber, setpageNumber] = useState(0)
    
    const userPerPage = 5
    const pagesVisited = pageNumber * userPerPage

    const displayUsers = user.filter((user)=>{
        if(searchTerm == "")
            return user;
        else if(user.email.toLowerCase().includes(searchTerm.toLowerCase())){
            return user;
        }
    }).slice(pagesVisited,pagesVisited + userPerPage)
            .map((user)=>{
                return(<>                                                 
                    <tr>
                        <td>{++i}</td>                        
                        <td> {user.email} </td> 
                        <div class="form-group m-2">                            
                            <select class="form-control p-50" id="exampleFormControlSelect1" onChange={(e)=>changeThisRole(e.target.value,user._id)}>
                            {
                                (user.role == 'ADMIN' ? (<><option selected="" disabled="">ADMIN</option>
                                <option>MODARATOR</option>
                                <option>CLIENT</option></>):null)                                

                            }
                            {
                                (user.role == '' ? (<><option selected="" disabled="">MOD</option>
                                <option>ADMIN</option>
                            <option>CLIENT</option></>):null)
                            }
                            {
                                (user.role == 'CLIENT' ? (<><option selected="" disabled="">CLIENT</option>
                                <option>ADMIN</option>
                                <option>MODARATOR</option></>):null)
                            }   
                            
                            </select>
                        </div>
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
                        {loading ?
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                    <p class="h3 card-title">List of members : </p>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <div class="table-responsive">
                                    <div class="row justify-content-between">
                                        <div class="col-sm-12 col-md-6">
                                            <div id="user_list_datatable_info" class="dataTables_filter">
                                                <form class="mr-3 position-relative">
                                                <div class="form-group mb-0">
                                                    <input type="search" class="form-control" id="exampleInputSearch" placeholder="Search(ex.xyz@gmail.com)" aria-controls="user-list-table"
                                                        onChange={(e)=> {setsearchTerm(e.target.value)}}
                                                    />
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
                                    <table id="table" class="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
                                        <thead>
                                        <tr>
                                            <th className="col-2">No</th>
                                            <th className="col-7">Email</th>    
                                            <th className="col-3">Role</th>       
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
                        :<RotateLoader size={20} color='#9d7af3' css={override}  loading/>}
                        </div>
                    </div>                                            
                </div>
            </div>    
            </div>            
        </div>
    )
}
