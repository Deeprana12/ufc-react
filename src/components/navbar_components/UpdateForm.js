import React,{useState,forwardRef,useImperativeHandle, Component} from 'react'
import ReactDom from 'react-dom';
import  { useHistory } from 'react-router-dom'
import { Update_form } from '../Update_form';

const UpdateForm = forwardRef((props,ref) => {
  const history = useHistory();
  const [display,setDisplay] = useState(false);

  useImperativeHandle(ref,()=>{
    return{
      openModal: () => open(),
      close: () => close()
    }
  });  

  const redirect = (userID) => {
    history.push(`/Update_form/${userID}`);
    // console.log(userID);
  }

  const open = () => {
    setDisplay(true);
  }

  const close = () => {
    setDisplay(false);
  }

  if(display){
      return ReactDom.createPortal(
        <div class="modal fade show" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-modal="true" style={{"padding-right": "8px", "display": "block"}}>
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
                            <th scope="col"></th>
                            <th scope="col">Information</th>                            
                        </tr>
                    </thead>
                    <tbody>                      
                      <tr><td>First Name :</td> <td>{props.fname}</td></tr>
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
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"
                    id={props.forId} onClick={()=>redirect(props.forId)}>Edit</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
          </div>
        </div>  
      ,document.getElementById("modal-root"))
  }
  return null;
});

export default UpdateForm;