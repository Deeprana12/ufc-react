import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Navbar} from './Navbar'

export const Update_form = () => { 

   const {id} = useParams();   

   const [user,setUser] = useState({// *
      firstname : '',
      middlename: '',
      lastname: '',
      nameofInstitute: '',
      nameofDepartment: '',
      studentIDEmployeeID: '',
      residentialAddress: '',
      city: '',
      zip: '',
      telephone: '',
      mobileno: '',
      email: '',
      dob:'',
      gender:'',
      emergencyContactPerson: '',
      relation: '',
      telephone1: '',
      mobileNo1: '',
      email1: ''

   });  

   let name,value;

   const handleinputs = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value})
   }

   //for fetching data
   useEffect(() => { 
      axios.get(`/userdata/getmember/${id}`, {                    
      }).then((res)=>{
         setUser({
            name : res.data[0].name,
            age : res.data[0].age,
            _id : res.data[0]._id,
            firstname  : res.data[0].firstname ,
            middlename : res.data[0].middlename,
            lastname : res.data[0].lastname,
            nameofInstitute : res.data[0].nameofInstitute,
            nameofDepartment : res.data[0].nameofDepartment,
            studentIDEmployeeID : res.data[0].studentIDEmployeeID,
            residentialAddress : res.data[0].residentalAddress,
            city : res.data[0].city,
            zip : res.data[0].zip,
            telephone : res.data[0].telephone,
            mobileno : res.data[0].mobileno,
            email : res.data[0].email,
            do : res.data[0].do,
            gende : res.data[0].gende,
            emergencyContactPerson : res.data[0].emergencyContactPerson,
            relation : res.data[0].relation,
            telephone1 : res.data[0].relephone1,
            mobileNo1 : res.data[0].mobileNo1,
            email : res.data[0].email1
         })
      }).catch((err) => {
         console.log(err);
      });                
   },[]);
   
   //for storing data
   const submitForm = async (e) =>{
      e.preventDefault();
      const {firstname,middlename,lastname,nameofInstitute,nameofDepartment,studentIDEmployeeID,residentialAddress,city,zip,telephone,mobileno,email,dob,gender,emergencyContactPerson,relation,telephone1,mobileNo1,email1} = user;      // *
      console.log(firstname+" "+middlename+" "+lastname+" "+nameofInstitute+" "+nameofDepartment+" "+studentIDEmployeeID+" "+residentialAddress+" "+city+" "+zip+" "+telephone+" "+mobileno+" "+email+" "+dob+" "+gender+" "+emergencyContactPerson+" "+relation+" "+telephone1+" "+mobileNo1+" "+email1); //
      // await axios.post(`/userdata/getmember/update/${id}`,{
      //    name,age
      // }).then((res)=>{
      //       console.log(res);
      //       alert('done');
      // }).catch((err) => {
      //    alert('err');
      //       console.log(err);
      // });
   }

    return (
      <>
         {/* onChange={handleinputs} */}
         <div>
         <div className="wrapper">
        <Navbar/>
         <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div className="iq-card ">

                        <div className="iq-card-body ">
                            <form novalidate="novalidate" action="#" className="needs-validation">
                                <div className="form-row">
                                    <div className="col-md-6 mb-3"><label for="validationCustom01">First name</label><input
                                        type="text" value={user.firstname}  id="firstname" name="firstname" required="required" onChange={handleinputs}  className="form-control" />
                                        <div className="valid-feedback"> Looks good! </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="validationCustom02">Middle name</label><input
                                        type="text" id="middlename" value={user.middlename} name="middlename" required="required" onChange={handleinputs} className="form-control" />
                                        <div className="valid-feedback"> Looks good! </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="lastname">Last name</label><input
                                        type="text" id="lastname" name="lastname" value={user.lastname} required="required" onChange={handleinputs}  className="form-control" />
                                        <div className="valid-feedback"> Looks good! </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="nameofInstitute">Name of institute</label><select
                                        id="nameofInstitute" name="nameofInstitute" value={user.nameofInstitute} required="required" onChange={handleinputs} className="form-control">
                                        <option selected="selected" disabled="disabled" value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                        <div className="invalid-feedback"> Please select a valid Name of institute.</div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="nameofDepartment">Name of department</label><select
                                        id="nameofDepartment" name="nameofDepartment" value={user.nameofDepartment} required="required" onChange={handleinputs} className="form-control">
                                        <option selected="selected" disabled="disabled" value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                        <div className="invalid-feedback"> Please select a valid Name of department </div>
                                    </div>

                                    <div className="col-md-6 mb-3"><label for="studentIDEmployeeID">Student ID/Employee
                                        ID</label><input type="text" id="studentIDEmployeeID" value={user.studentIDEmployeeID} name="studentIDEmployeeID" required="required" onChange={handleinputs}
                                            className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Student ID/Employee ID </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="residentialAddress">Residental Address</label>
                                    <textarea value={user.residentialAddress} className="form-control" onChange={handleinputs}></textarea>
                                        <div className="invalid-feedback"> Please enter a message in the textarea.</div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="city">City</label><input type="text"
                                        id="city" required="required"  onChange={handleinputs} value={user.city} name="city" className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid city.</div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="zip">Zip</label><input type="text"
                                        id="zip" name="zip" required="required" onChange={handleinputs}  value={user.zip} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid zip.</div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="telephone">Telephone(STD No)</label><input
                                        type="text" id="telephone" name="telephone"  value={user.telephone} required="required" onChange={handleinputs} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Telephone(STD No) </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="mobileno">Mobile</label><input type="text"
                                        id="mobileno" name="mobileno" required="required" onChange={handleinputs} value={user.mobileno} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Mobile </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="email">Email</label><input type="text"
                                        id="email" required="required"  onChange={handleinputs} name="email" value={user.email} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Email address.</div>
                                    </div>          

                                    <div className="col-md-6 mb-3">
                                        <div role="group" className="form-group" id="dob"><label for="exampleInputdate"
                                            className="d-block" id="dob">Date of birth</label>
                                            <div><input id="exampleInputdate" onChange={handleinputs} value={user.dob} type="date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                {/* remaining */}
                                    <div className="col-md-6 mb-3">
                                        <div className="iq-card-body">                                    
                                            <div role="group" className="form-group"><label for="exampleInputdate"
                                                className="d-block"  >Gender: </label>                                    
                                                <div className="radio d-inline-block mr-2">
                                                    <fieldset>
                                                        <label>
                                                            <input type="radio" name="gender" value="Male" onChange={handleinputs} checked={FormData.gender=="Male"}/>
                                                        </label>
                                                    </fieldset>
                                                    
                                                </div>

                                                <div className="radio d-inline-block mr-2">
                                                <fieldset>
                                                        <label>
                                                            <input type="radio" name="gender" value="Female" onChange={handleinputs} checked={FormData.gender=="Female"}/>
                                                        </label>
                                                    </fieldset>
                                                    
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                    
                                    <div className="col-md-6 mb-3"><label for="emergencyContactPerson">Emergency Contact Person</label><input
                                        type="text" id="emergencyContactPerson" value={user.emergencyContactPerson} name="emergencyContactPerson" required="required"   onChange={handleinputs}  className="form-control" />
                                        <div className="valid-feedback"> Looks good! </div>
                                    </div>

                                    <div className="col-md-6 mb-3"><label for="relation">Relation</label><input
                                        type="text" id="relation" name="relation" value={user.relation} required="required" onChange={handleinputs} className="form-control" />
                                        <div className="valid-feedback"> Looks good! </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="telephone1">Telephone(STD
                                        No)</label><input type="text" id="telephone1" value={user.telephone1} name="telephone1" onChange={handleinputs} required="required"
                                            className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Telephone(STD No) </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="mobileNo1">Mobile</label><input type="text"
                                        id="mobileNo1" required="required" onChange={handleinputs} value={user.mobileNo1} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Mobile </div>
                                    </div>
                                    <div className="col-md-6 mb-3"><label for="email1">Email</label><input type="text"
                                        id="email1" required="required" onChange={handleinputs} value={user.email1} className="form-control" />
                                        <div className="invalid-feedback"> Please provide a valid Email address.</div>
                                    </div>
                                    </div>
                                    
                                    {/* <div className="form-group">
                                        <div className="form-check"><input type="checkbox" value="" id="invalidCheck"
                                            required="required" className="form-check-input" /><label for="invalidCheck"
                                                className="form-check-label"> I hereby
                                                declare that the information given above is correct and that i will abide by the
                                                rules and
                                                regulations of the fitness center notified to me from time to time.</label>
                                            <div className="invalid-feedback"> You must agree before submitting.</div>
                                        </div>
                                    </div> */}
                                        <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
    </div>
        </div>
</div>         
      </>  
    )
}
