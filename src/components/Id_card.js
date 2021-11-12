import React,{useState,forwardRef,useImperativeHandle,useRef} from 'react'
import ReactDom from 'react-dom';
import charu_logo from '../Asserts/images/page-img/charusat_logo.png'
import ReactToPrint from 'react-to-print';
import ComponentToPrint from 'react-to-print'
import { useReactToPrint } from 'react-to-print';
import Pdf from 'react-to-pdf'

const ref2 = React.createRef()
const Id_card = forwardRef((props,ref) => {

    const [display,setDisplay] = useState(false);
  
    useImperativeHandle(ref,()=>{
        return{
            openModal2: async () => open(),
            close2: () => close()
        }
    }); 

    const open = () => {
        setDisplay(true);
    }

    const close = () => {
        setDisplay(false);
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    if(display){
        return ReactDom.createPortal(                  
            <div id="exampleModalCenteredScrollable" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" aria-modal="true" style={{"padding-right": "8px", display: "block"}}>
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body" id="full-modal" ref2={componentRef}>
                            <div>
                            <table id="user-list-table" class="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
                        <div class="align-items-center mb-0" style={{display:"flex","flex-direction":"column"}}>
                            <img src={charu_logo} className="card-img mb-0" style={{width:"100%",height:"70px"}} alt="#"/>
                                <h5><b>UNIVERSITY FITNESS CENTER</b></h5>
                        </div>
                        <hr style={{width:"80%"}}/>
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="row no-gutters flex-row-reverse">
                                        <div class="col-md-5 pr-2">
                                            <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" alt="#"/>
                                        </div>
                                            <div class="col-md-7">
                                            <div className="table-responsive">                                      
                                            <tr><strong>Name of Member :&nbsp;&nbsp;</strong> <u>{props.membername}</u></tr>
                                            <tr><strong>Membership No :  &nbsp;&nbsp;</strong> <u>{1+2}</u></tr>
                                            <tr><strong>Local Address :    &nbsp;&nbsp;</strong> <u>{props.memberaddress}</u></tr>
                                            <tr><strong>Contact No:  &nbsp;&nbsp;</strong> <u>{props.membercontactNo}</u></tr>
                                            <tr><strong>Blood Group:   &nbsp;&nbsp;</strong> <u>{props.memberlastname}</u></tr>
                                            <tr><strong>Batch time/Time slot:   &nbsp;&nbsp;</strong> <u>{props.memberlastname}</u></tr>
                                            <tr></tr>
                                            <tr></tr>
                                            </div>
                                        </div>
                                    </div>
                                        <p></p>
                                        <p></p>          
                                        <p></p>                  
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                                        <b><strong><p>UFC In-charge</p></strong></b>
                                        <b><strong><p style={{textAlign:"right"}}>Member Signature</p></strong></b>
                                    </div>
                                </div>
                            </div>                                                                                                                                        
                        </table>
                            </div>
                            <div className="justify-content-center">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Date</th>
                                        <th>Fees</th>
                                        <th>Sign</th>                                    
                                        <th>Month</th>
                                        <th>Date</th>
                                        <th>Fees</th>
                                        <th>Sign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr ><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                                </tbody>
                                </table>
                                </div>
                            </div>                    
                        <div class="modal-footer">                    
                            <button type="button" class="btn btn-danger" onClick={handlePrint}>Print</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>                         
                            <Pdf targetRef={ref2} filename="post.pdf">
                                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                            </Pdf>
                        </div>
                        </div>
                    </div>
                </div>            
        ,document.getElementById("modal-id-root"))
    }
    
    return null;        
  
})
export default Id_card;

class Example extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}        
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }



{/* <table id="user-list-table" class="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
    <div class="align-items-center mb-0" style={{display:"flex","flex-direction":"column"}}>
        <img src={charu_logo} className="card-img mb-0" style={{width:"100%",height:"70px"}} alt="#"/>
            <h5><b>UNIVERSITY FITNESS CENTER</b></h5>
    </div>
    <hr style={{width:"80%"}}/>
    <div class="col-lg-12">
        <div class="card">
            <div class="row no-gutters flex-row-reverse">
                <div class="col-md-5 pr-2">
                    <img src="../Asserts/images/page-img/09.jpg" class="card-img rounded-circle ml-3" style={{width:"100%",height:"100%"}} alt="#"/>
                </div>
                    <div class="col-md-7">
                    <div className="table-responsive">                                      
                    <tr><strong>Name of Member :&nbsp;&nbsp;</strong> <u>{props.membername}</u></tr>
                    <tr><strong>Membership No :  &nbsp;&nbsp;</strong> <u>{1+2}</u></tr>
                    <tr><strong>Local Address :    &nbsp;&nbsp;</strong> <u>{props.memberaddress}</u></tr>
                    <tr><strong>Contact No:  &nbsp;&nbsp;</strong> <u>{props.membercontactNo}</u></tr>
                    <tr><strong>Blood Group:   &nbsp;&nbsp;</strong> <u>{props.memberlastname}</u></tr>
                    <tr><strong>Batch time/Time slot:   &nbsp;&nbsp;</strong> <u>{props.memberlastname}</u></tr>
                    <tr></tr>
                    <tr></tr>
                    </div>
                </div>
            </div>
                <p></p>
                <p></p>          
                <p></p>                  
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <b><strong><p>UFC In-charge</p></strong></b>
                <b><strong><p style={{textAlign:"right"}}>Member Signature</p></strong></b>
            </div>
        </div>
    </div>                                                                                                                                        
</table>
 */}
