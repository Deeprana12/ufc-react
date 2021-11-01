import React from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Navbar} from './Navbar'
import {RotateLoader} from 'react-spinners'

export const Update_form = () => { 

    const [loading, setLoading] = useState(false)
    
    const override = ` 
        top: 250px;
        display: block;
        margin: 0 auto;        
    `;

    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
        setInstitute(event.target.value);
    };

    const Cspit = ["BTECH(CE)","BTECH(CL)","BTECH(CS)","BTECH(EC)","BTECH(EE)","BTECH(IT)","BTECH(ME)","DRCE","DRCL","DREC","DREE","DRME","MTECH(AMT)","MTECH(CE)","MTECH(CL)","MTECH(CSE)","MTECH(EC)","MTECH(EE)","MTECH(EVD)","MTECH(ICT)","MTECH(IT)","MTECH(ME)","MTECH(PE)","MTECH(TE)","MTM","PGDCS"];
    const Depstar = ["BTECH(CE)","BTECH(CS)","BTECH(IT)","DRCE"];
    const Rpcp = ["B.Pharm","CPCT","CPPAT","CPPT","CPPV","DRFPH","DRPC","DRPHC","DRPHCOG","DRPHCOL","DRPHT","M.PHARM(CT)","M.PHARM(DRA)","M.PHARM(CP)","M.PHARM(PT)","M.PHARM(QA)","MPHPCL","MPHPPP","MPHPQA","MPHRGA","MPHTCH","MPM","PGDCT","PGDPT"];
    const Cmpica = ["B.Sc(IT)","BCA","DRMCA","M.Sc(IT)","MCA","MCAL","PGDCA"];
    const I2im = ["BBA","DRLSC","DRMBA","MBA-CH","PGDM"];
    const Pdpias = ["B.SC","BSC(CHEM)","BSCPHY","DRBC","DRBIO","DRCHEM","DRCSMCRI","DRMTH","DRNST","DRPHY","M.Phil","M.Sc(AOC)","M.Sc(BC)","M.Sc(BT)","M.Sc(MI)","M.Sc(MTH)","M.Sc(NST)","M.Sc(PHY)"];
    const Arip = ["BPT","CCAPT","DRPT","MPT(CS)","MPT(MS)","MPT(NS)","MPT(PA)","MPT(RE)","MPT(SS)","MPT(WH)"];
    const Mtin = ["BSC.Nursing","DNR","GNM","MNCH","MNMH","MNMS","MNOG","MNPN"];
    const Cips = ["BMIT","BOP","BOTAT","BSMT","DRMLT","DROTAT","M.Sc.MIT","MSMLT","PGDCH","PGDHAT","PGDMLT"];
            
    const [gender, setGender] = useState('');    
    const [institute, setInstitute] = useState('')
    const [department, setDepartment] = useState('')
    const history = useHistory()            

    const {id} = useParams();   

//    clearing the form
   const [user,setUser] = useState({// *
      firstname : '',
      middlename: '',
      lastname: '',
      nameofinstitute: '',
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
    // handling the values that are changed
   const handleinputs = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value})
    }
    
    // for fetching data
    useEffect(() => { 

        if(localStorage.getItem('user') === null || localStorage.getItem('user') == 'null'){
            history.push('/');
        }
        axios.get(`/users/fetchmember/${id}`, {                    
        }).then((res)=>{
          setLoading(true)
          console.log(res)                            
        //   console.log(res.data.dob.slice(0,10))
          setUser({    
              _id : res.data._id,
            firstname  : res.data.firstname ,
            middlename : res.data.middlename,
            lastname : res.data.lastname,
            nameofinstitute : res.data.nameofinstitute,
            nameofDepartment : res.data.nameofDepartment,
            studentIDEmployeeID : res.data.studentIDEmployeeID,
            residentialAddress : res.data.residentialAddress,
            city : res.data.city,
            zip : res.data.zip,
            telephone : res.data.telephone,
            mobileno : res.data.mobileno,
            email : res.data.email,
            dob : res.data.dob,
            gender : res.data.gender,
            emergencyContactPerson : res.data.emergencyContactPerson,
            relation : res.data.relation,
            telephone1 : res.data.telephone1,
            mobileNo1 : res.data.mobileno1,
            email1 : res.data.email1
        })
        setGender(res.data.gender);            
        setInstitute(res.data.nameofinstitute)
        setDepartment(res.data.nameofDepartment)        
    }).catch((err) => {
         console.log(err);
      });                
   },[]);
   

   //for storing data
   const submitForm = async (e) =>{
      e.preventDefault();
      const {firstname,middlename,lastname,nameofinstitute,nameofDepartment,studentIDEmployeeID,residentialAddress,city,zip,telephone,mobileno,email,dob,emergencyContactPerson,relation,telephone1,mobileNo1,email1} = user;      // *
      console.log(firstname+" "+middlename+" "+lastname+" "+institute+" "+department+" "+studentIDEmployeeID+" "+residentialAddress+" "+city+" "+zip+" "+telephone+" "+mobileno+" "+email+" "+dob+" "+gender+" "+emergencyContactPerson+" "+relation+" "+telephone1+" "+mobileNo1+" "+email1); //
      await axios.patch(`/users/updatemember/${id}`,{
        firstname,middlename,lastname,nameofinstitute : institute,nameofDepartment : department, studentIDEmployeeID,residentialAddress,city,zip,telephone,mobileno,email,dob,gender:gender,emergencyContactPerson,relation,telephone1,mobileNo1,email1
      }).then((res)=>{
            console.log(res);
            alert('done');
      }).catch((err) => {
            alert('err');
            console.log(err);
      });
   }

   const radioValues = ["male,female"] 
   const [radval, setRadval] = useState(user.gender)

    return (
      <>
         {/* onChange={handleinputs} */}
         <div>
         <div className="wrapper">
        <Navbar/>
         <div id="content-page" class="content-page">
                <div class="container-fluid">
                        <p className="h3 ml-3 mb-3">Update the information of <mark>{user.firstname}</mark> below :</p>
                    <div className="iq-card ">
                    {loading ?
                        <div className="iq-card-body ">
                            <form noValidate="novalidate" action="#" onSubmit={submitForm} className="needs-validation">
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
                                    <div className="col-md-6 mb-3"><label for="nameofinstitute">Name of institute</label>
                                        <select
                                            id="validationCustom04" required="required" className="form-control" onChange={changeSelectOptionHandler}>
                                            {/* <option selected="selected" disabled="disabled" value="">Choose...</option> */}
                                            <option value="cspit" selected={institute === "cspit"}>CSPIT</option>
                                            <option value="depstar" selected={institute === "depstar"}>DEPSTAR</option>
                                            <option value="rpcp" selected={institute === "rpcp"}>RPCP</option>
                                            <option value="cmpica" selected={institute === "cmpica"}>CMPICA</option>
                                            <option value="i2im" selected={institute === "i2im"}>I2IM</option>
                                            <option value="pdpias" selected={institute === "pdpias"}>PDPIAS</option>
                                            <option value="arip" selected={institute === "arip"}>ARIP</option>
                                            <option value="mtin" selected={institute === "mtin"}>MTIN</option>
                                            <option value="cips" selected={institute === "cips"}>CIPS</option>

                                        </select>
                                        <div className="invalid-feedback"> Please select a valid Name of institute.</div>
                                    </div>

                                    <div className="col-md-6 mb-3"><label for="nameofDepartment">Name of department</label>
                                        <select
                                            id="validationCustom05" required="required"  className="form-control" onChange={(e) => {setDepartment(e.target.value)}}>
                                            {
                                                institute === "cspit" ? Cspit.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "depstar" ? Depstar.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "cmpica" ? Cmpica.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "rpcp" ? Rpcp.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "i2im" ? I2im.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "pdpias" ? Pdpias.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "arip" ? Arip.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "mtin" ? Mtin.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
                                            {
                                                institute === "cips" ? Cips.map((dept) => {
                                                    return <option value={dept} selected={
                                                        department === dept
                                                    }>{dept}</option>
                                                }) : null
                                            }
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

                                    <div className="col-md-6 mb-3">
                                            <label>Choose gender : </label>  
                                                <div className="radio d-inline-block ml-2">                                                    
                                                    <input
                                                        value="male"
                                                        type="radio"
                                                        name="gender"
                                                        checked={gender === "male"}                                              onChange={(e) => {setGender(e.target.value)}}
                                                    />
                                                    <label>&nbsp;Male</label>
                                                </div>                         

                                                <div className="radio d-inline-block ml-2">
                                                    <input
                                                        value="female"
                                                        checked={gender === "female"}
                                                        name="gender"
                                                        type="radio"                                        onChange={(e) => {setGender(e.target.value)}}
                                                    />
                                                    <label>&nbsp;Female</label>
                                                </div>                                            
                                            <div className="invalid-feedback">Choose gender</div>
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
                                            <div><input id="exampleInputdate" value={user.dob.slice(0,10)} 
                                            name="dob" onChange={handleinputs} type="date" className="form-control" />
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
                        :<RotateLoader size={20} color='#9d7af3' css={override}  loading/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>  
    )
}
