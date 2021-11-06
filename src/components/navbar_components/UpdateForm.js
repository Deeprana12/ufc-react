import React,{useState,forwardRef,useRef,useImperativeHandle, useEffect} from 'react'
import ReactDom from 'react-dom';
import  { useHistory } from 'react-router-dom'
import Modal_ID from '../Id_card'
import axios from 'axios'
import {RotateLoader} from 'react-spinners'

const Modal = forwardRef((props,ref) => { 

  // alert(props.for)
  const [loading, setLoading] = useState(false)
    
  const override = ` 
      top: 250px;
      display: block;
      margin: 0 auto;        
  `;

  let tempID,tempUser
  if((localStorage.getItem('user')=='done')){
    tempUser = localStorage.getItem('dataKey');
    tempID = JSON.parse(tempUser).username
  }
  const [isAdmin, setIsAdmin] = useState()

  useEffect(() => {    
      if(localStorage.getItem('role')!='ADMIN'){
        setLoading(true)
        setIsAdmin('ADMIN')
      } 
  }, [])

  // useEffect(() => {  
  //     console.log(props);     
  //     axios.get(`/users/isAdmin/${tempID}`, {                    
  //     }).then((res)=>{                  
  //         setIsAdmin(res.data.role)
  //         setLoading(true)
  //         console.log(res.data.role)
  //     }).catch((err) => {
  //         console.log(err);
  //     });     
  // }, [])
  
  const history = useHistory();
  if(localStorage.getItem('user') === null || localStorage.getItem('user') == 'null'){
      history.push('/');
  }

  const modal2Ref = useRef();

  const openModal2 = () => {
      modal2Ref.current.openModal2()
  }

  const [display,setDisplay] = useState(false);
  
  useImperativeHandle(ref,()=>{
    return{
      openModal: async () => open(),
      close: () => close()
    }
  });  

  const redirect = (userID) => {
    history.push(`/Update_form/${userID}`);    
  }

  const deleteThis = (userID) => {
    if(window.confirm("Are you sure you want to delete this record permenently ?")){
        axios.post(`/users/deletemember/${userID}`,{}).
          then((res)=>{
            if(res=='done'){
              alert("Your record deleted successfully")
            }else{alert('Something went wrong')}
          })
    }
  }

  const makethisUserVerify =  (userID) => {
    if(window.confirm("Do you want to confirm the membership of this student ?") ){
       axios.patch(`/users/confirmmembership/${userID}`,{}).
        then((res)=>{
          console.log(res)
          if(res.data=='done'){
            alert("Verified successfully")
          }else{alert('Something went wrong')}
        })
    }
  }  

  const open = () => {
    setDisplay(true);
  }

  const close = () => {
    setDisplay(false);
  }

  if(display){
      return ReactDom.createPortal(
        <div class="modal fade show" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-modal="true" style={{"padding-right": "8px", "display": "block"}}>
        {loading ?
          <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">Information about : <strong> {props.sid}</strong></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body ">
                <div className="table-responsive">
                  <table id="user-list-table" class="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
                    <thead>
                        <tr>
                            <th className="col-4"></th>
                            <th className="col-8">Information</th>                            
                        </tr>
                    </thead>
                    <tbody>                      
                      <tr><td>First Name :</td> <td>{props.forId}</td></tr>
                      <tr><td>Middle Name:</td> <td>{props.mname}</td></tr>
                      <tr><td>Last Name:</td> <td>{props.lname}</td></tr>
                      <tr><td>Name of Institute:</td> <td>{props.noi}</td></tr>
                      <tr><td>Name of Department:</td> <td>{props.nod}</td></tr>
                      <tr><td>Student ID:</td> <td>{props.sid}</td></tr>
                      <tr><td>Mobile Number:</td> <td>{props.mob}</td></tr>
                      <tr><td>Email:</td> <td>{props.email}</td></tr>
                      <tr><td>Residental Address:</td> <td>{props.add}</td></tr>
                      <tr><td>City:</td> <td>{props.city}</td></tr>
                      <tr><td>Zip:</td> <td>{props.zip}</td></tr>
                      <tr><td>Telephone 1:</td> <td>{props.tel1}</td></tr>
                      <tr><td>Date of birth:</td> <td>{props.dob}</td></tr>
                      <tr><td>Gender:</td> <td>{props.gender}</td></tr>
                      <tr><td>Name of emergency Contact Person:</td> <td>{props.ecp}</td></tr>
                      <tr><td>Relation of emergency Contact Person:</td> <td>{props.relation}</td></tr>
                      <tr><td>Telephone 2:</td> <td>{props.rele}</td></tr>
                      <tr><td>Mobile Number 2:</td> <td>{props.mob1}</td></tr>
                      <tr><td>Email 2:</td> <td>{props.email1}</td></tr>
                    </tbody>
                  </table>
                </div>
                </div>
                <div class="modal-footer">
                    {
                      (props.paymentstatus == 'NotDone'?(isAdmin=='ADMIN'?<>
                      <p className="justify-content-left"><mark>If details are valid than click on Verify else Delete.</mark></p>
                      <button type="button" class="btn btn-outline-primary" data-dismiss="modal"
                      onClick={() => {makethisUserVerify(props.forId)}}>Verify</button>
                      <button type="button" class="btn btn-outline-danger" data-dismiss="modal"
                      id={props.forId} onClick={()=>deleteThis(props.forId)}>Delete</button>
                      </>:null):null)
                    }
                    {
                      (props.paymentstatus == 'StillDone'?<>
                      <button type="button" class="btn btn-outline-danger" data-dismiss="modal"
                      id={props.forId} onClick={()=>deleteThis(props.forId)}>Delete</button>
                      </>:null)
                    }
                    {
                      ((props.paymentstatus == 'Done')?<>
                      <button type="button" class="btn btn-outline-danger" data-dismiss="modal"
                      id={props.forId} onClick={()=>deleteThis(props.forId)}>Delete</button>  
                      <button type="button" class="btn btn-outline-primary" data-toggle="modal" 
                      data-target="#exampleModalCenteredScrollable"
                      onClick={()=>openModal2}>ID</button>
                      </>:null)
                    }
                    {
                      ((props.paymentstatus == 'Done'&&isAdmin=='ADMIN')?<>
                      <button type="button" class="btn btn-outline-primary" data-dismiss="modal" id={props.forId} onClick={()=>redirect(props.forId)}>Edit</button>
                      </>:null)
                    }
                    
                    {/*
                    {
                      (props.tab=='active')?(<><button type="button" class="btn btn-secondary" data-dismiss="modal" id={props.forId} onClick={()=>redirect(props.forId)}>Edit</button><button type="button" class="btn btn-danger" data-dismiss="modal" id={props.forId} onClick={()=>deleteThis(props.forId)}>Delete</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenteredScrollable" onClick={openModal2}>ID</button></>)
                      :null
                    } */}
                    {/* {(isAdmin == 'ADMIN') ? (props.membership ===  "NotVerified" ? <p className="justify-content-left"><mark>If details are valid than click on Verify else Delete.</mark></p> :null ):null}
                    {(isAdmin == 'ADMIN')?(
                      (props.membership ===  "NotVerified")? <button type="button" class="btn btn-primary" data-dismiss="modal"
                      onClick={() => {makethisUserVerify(props.forId)}}>Verify</button> : <button type="button" class="btn btn-secondary" data-dismiss="modal"
                    id={props.forId} onClick={()=>redirect(props.forId)}>Edit</button>):null
                    }                                                            
                    {(isAdmin == 'ADMIN') ? <button type="button" class="btn btn-danger" data-dismiss="modal"
                    id={props.forId} onClick={()=>deleteThis(props.forId)}>Delete</button>:null}
                    <button type="button" class="btn btn-primary" data-toggle="modal" 
                        data-target="#exampleModalCenteredScrollable"
                    onClick={openModal2}>ID</button> */}

                  <Modal_ID ref={modal2Ref} memberID={props.forId} membername={props.fname}
                    memberaddress={props.add} membercontactNo={props.mob} memberlastname={props.lname}
                  />
                </div>
              </div>                            
          </div>
          :<RotateLoader size={20} color='#9d7af3' css={override}  loading/>}
        </div>  
      ,document.getElementById("modal-root"))
  }
  return null;
});

export default Modal;