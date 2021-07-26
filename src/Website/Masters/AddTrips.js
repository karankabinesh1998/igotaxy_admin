import React from 'react';
import Bridge from '../../Middleware/bridge';
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import ModelWindow from "../../Component/Model";
import SingleSelect from '../../Component/SingleSelect';
import Switch from "react-switch";
import '../style1.css'
import  DatePickerandTime  from '../../Component/DatePickerandTime';
import moment from 'moment'
import { isEmptyObject } from 'jquery';

class AddTrips extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                Data:[],
                username:"",
                errorusername:"",
                mobile:"",
                errormobile:"",
                alternate_mobile:"",
                erroralternate_mobile:"",
                checkstatus:false,
                selectedcustomer:{},
                errorselectedcustomer:"",
                CustomerDetailsOptions:[],
                TripTypeOption :[ {value:1,label:"One Way"} , { value:2 , label:"Round Trip"} ],
                selectedTripTypeOption:{value:1,label:"One Way"},
                errorTripTypeOption:"",
                PickupLocationOption:[],
                selectedPickupLocationOption:{},
                errorPickupLocationOption:"",
                selectedDropLocationOption:{},
                errorDropLocationOption:"",
                pickupDate:"",
                dropDate:"",
                minTime : this.calculateMinTime(new Date()),
                minTime1 : this.calculateMinTime1(new Date()),
                cabTypeOption:[{value:1,label:"Sedan"} , { value:2 , label:"Suv"},{value:3,label:"Innova"}],
                selectedcabTypeOption:{},
                errorcabTypeOption:"",
                trip_kms:"",
                errortrip_kms:"",
                trip_charges:"",
                errortrip_charges:"",
                ButtonName1:true,
                address:"",
                erroraddress:"",
                errorpickupDate:"",
                errordropDate:"",
                Userdetails : []
            }

        }

    }


    async componentDidMount(){
        try {


                let data = JSON.parse(localStorage.getItem("Userdetails")) ? JSON.parse(localStorage.getItem("Userdetails")) : null;
                if(data !== null){
                 console.log(data)
                this.setState({Userdetails:data})
                }

            let CustomerDetails = await Bridge.getFreedom(
                `*`,
                `tbl_user_web`,
                `userType = 4 and status = 1`
            )

            let CustomerDetailsOptions=[]
            if(CustomerDetails.data.length){

                // console.log(CustomerDetails);
                

                let wait = await CustomerDetails.data.map((ival,i)=>{
                    let arr={}
                    arr.value = ival.id;
                    arr.label = `${ival.username}-${ival.mobile}-${ival.email_id}`

                    CustomerDetailsOptions.push(arr)

                })

                await Promise.all(wait)     
                         
            this.setState({
            CustomerDetailsOptions
            })

            let CityOption = await Bridge.getFreedom(
                `id as value , city as label`,
                `tbl_city`,
                `status = 1`,
                1,
                `id`
            )

            if(CityOption.data.length){
                this.setState({
                    PickupLocationOption : CityOption.data
                })
            }

            }
            
        } catch (error) {
            console.log(error);
        }
    }

    handleSwitch=async(checked)=> {
        //  console.log(checked);
        this.setState({
            checkstatus : checked,
            selectedcustomer:{}
        })

    }


    handleChange = async(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });

    }


    HandleCustomer=async(e)=>{
        this.setState({
            selectedcustomer : e
        })
    }

    HandleTripTypeOption=async(e)=>{
        this.setState({
            selectedTripTypeOption : e
        })
    }

    HandlePickupLocationOption=async(e)=>{
        this.setState({
            selectedPickupLocationOption:e
        })
    }

    HandleDropLocationOption=async(e)=>{
        this.setState({
            selectedDropLocationOption:e
        })
    }

    HandleselectedcabTypeOption=async(e)=>{
        console.log(e);
        this.setState({
            selectedcabTypeOption:e
        })
    }

  
  


// add these two functions to your component
calculateMinTime = date => {
    let isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
        let nowAddOneHour = moment(new Date()).add({hours: 1}).toDate();
        return nowAddOneHour;
    }
    return moment().startOf('day').toDate(); // set to 12:00 am today
}

calculateMinTime1 = date => {
    let isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
        let nowAddOneHour = moment(new Date()).add({hours: 1}).toDate();
        return nowAddOneHour;
    }
    return moment().startOf('day').toDate(); // set to 12:00 am today
}

handleDateChange1 = date => {
    this.setState({
        dropDate: date,
        minTime1: this.calculateMinTime1(date),
    });
}

handleDateChange = date => {
    this.setState({
        pickupDate: date,
        minTime: this.calculateMinTime(date),
    });
}

ScroolTop=async()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}

submit=async()=>{
    const { username,mobile,alternate_mobile,trip_kms,trip_charges,email_id,address,selectedcustomer,selectedDropLocationOption,selectedPickupLocationOption,
    selectedTripTypeOption,selectedcabTypeOption,checkstatus,pickupDate,dropDate,Userdetails} = this.state;
    let mailcheck = await this.ValidateEmail(email_id);

    // if(this.state.checkstatus == false ){
    //     // console.log(Object.keys(selectedcabTypeOption).length);
    //     if(!username){
    //         this.setState({
    //             errorusername:"enter the username"
    //         })
    //         this.ScroolTop()
    //         return false
            
    //     }else if(!mobile){
    //         this.setState({
    //             errormobile:"enter the mobile",
    //             errorusername:""
    //         })
    //         this.ScroolTop()
    //         return false
    //     }else if(!email_id){
    //         this.setState({
    //             errormobile:"",
    //             erroremail_id:"Enter the email id"
    //         })
    //         this.ScroolTop()
    //     }else if(mailcheck==0){
    //         this.setState({erroremail_id:"Enter the valid email id"})
    //         this.ScroolTop()
    //         return false
    //       }
    //       else if(!address){
    //         this.setState({
    //             erroremail_id:"",
    //             erroraddress:"Enter the address"
    //         })
    //         this.ScroolTop()
    //     }else if(Object.keys(selectedPickupLocationOption).length == 0){

    //         this.setState({
    //             errorPickupLocationOption:"select the pick up location"
    //         })
    
    //         this.ScroolTop()
    //         return false
    
    //     }else if(Object.keys(selectedDropLocationOption).length == 0){
    //         this.setState({
    //             errorPickupLocationOption:"",
    //             errorDropLocationOption:"select the drop location"
    //         })
    
    //         this.ScroolTop()
    //         return false
    //     }else if(!pickupDate){
    //         this.setState({
    //             errorpickupDate:"select the pick up date",
    //             errorDropLocationOption:""
    //         })
    //         this.ScroolTop()
    //         return false
    //     }else if(Object.keys(selectedcabTypeOption.length == 0)){
    //         this.setState({
    //             errorpickupDate:"",
    //             errordropDate:"",
    //             errorcabTypeOption:"select the cab type"
    //         })
    //         this.ScroolTop()
    //         // return false
    //     }else if(!trip_kms){
    //         this.setState({
    //             errortrip_kms:"enter the trip kms",
    //             errorcabTypeOption:""
    //         })
    //         this.ScroolTop()
    //             return false
    //     }else if(!trip_charges){
    //         this.setState({
    //             errortrip_kms:"",
    //             errortrip_charges:"enter the trip charges"
    //         })
    //         this.ScroolTop()
    //             return false
    //     }


    // }else{

    //     if(Object.keys(selectedcustomer).length == 0){
    //         this.setState({
    //             errorselectedcustomer:"select the customer"
    //         })

    //         this.ScroolTop()
    //         return false
    //     }else if(Object.keys(selectedPickupLocationOption).length == 0){

    //         this.setState({
    //             errorselectedcustomer:"",
    //             errorPickupLocationOption:"select the pick up location"
    //         })
    
    //         this.ScroolTop()
    //         return false
    
    //     }else if(Object.keys(selectedDropLocationOption).length == 0){
    //         this.setState({
    //             errorPickupLocationOption:"",
    //             errorDropLocationOption:"select the drop location"
    //         })
    
    //         this.ScroolTop()
    //         return false
    //     }else if(!pickupDate){
    //         this.setState({
    //             errorpickupDate:"select the pick up date",
    //             errorDropLocationOption:""
    //         })
    //         this.ScroolTop()
    //         return false
    //     }else if(Object.keys(selectedcabTypeOption.length==0)){
    //         // console.log(Object.keys(selectedcabTypeOption.length));
    //         this.setState({
    //             errorpickupDate:"",
    //             errordropDate:"",
    //             errorcabTypeOption:"select the cab type"
    //         })
    //         this.ScroolTop()
    //             return false
    //     }else if(!trip_kms){
    //         this.setState({
    //             errortrip_kms:"enter the trip kms",
    //             errorcabTypeOption:""
    //         })
    //         this.ScroolTop()
    //             return false
    //     }else if(!trip_charges){
    //         this.setState({
    //             errortrip_kms:"",
    //             errortrip_charges:"enter the trip charges"
    //         })
    //         this.ScroolTop()
    //             return false
    //     }

    // }


    // else if(selectedTripTypeOption.value == 2){
    //     console.log(selectedTripTypeOption);
    //     if(!dropDate){
    //         this.setState({
    //             errorpickupDate:"",
    //             errordropDate:"select the drop date"
    //         })
    //         this.ScroolTop()
    //         return false
    //     }
    // }


   

    const formData=new FormData();
    let newcustomer = 0;
    if(Object.keys(selectedcustomer).length==0){
        newcustomer = 1
        formData.append("customer",JSON.stringify([{username:username,mobile:mobile,alternate_mobile:alternate_mobile,email_id:email_id,address:address}]));
    }else{
        newcustomer = 0
        formData.append("customer_id",selectedcustomer.value ? selectedcustomer.value : null )
    }
    
    
    formData.append("trip_type",selectedTripTypeOption.label)
    formData.append("pickup_location",selectedPickupLocationOption.value ? selectedPickupLocationOption.value : null )
    formData.append("drop_location",selectedDropLocationOption.value ? selectedDropLocationOption.value : null )
    formData.append("pickup_date",moment(pickupDate).format('YYYY-MM-DD hh:mm:ss') )
    formData.append("drop_date",moment(dropDate).format('YYYY-MM-DD hh:mm:ss'))
    formData.append("cab_type",selectedcabTypeOption.label ? selectedcabTypeOption.label : null )
    formData.append("trip_kms",trip_kms)
    formData.append("trip_charges",trip_charges)
    formData.append("extra_charge",selectedcabTypeOption.value ? selectedcabTypeOption.value : null)
    formData.append("admin_id",Userdetails[0].id)
    formData.append("trip_status","active")



    console.log([...formData]); 
    try {

        const result = await Bridge.Addtrips(newcustomer,formData)

        if(result){
            console.log(result);
            this.setState({

            })
        }
        
    } catch (error) {
        console.log(error);
    }

    
}

ValidateEmail=async(mail) =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return 1
    }else{
        return 0
    }
    }

   
        render(){

            const { ButtonName1 }   = this.state;

return(
    <> 

<div class="main-content">



<section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>Trips</h3>
                </div>
                <div class="card-header">
                {/* <button type="button"
                class="btn btn-primary" 
                data-toggle="modal"
                onClick={this.AddCustomers}
                data-target="#addvendar">
                    Add New Trip 
                    </button> */}


                </div>
                <div class="card-body">

                    {/* Input fields */}

<div className="BackRow row form-group">
<div className="col-sm-2"><label class="LabelHead labell2">Customer Select</label></div>
<div className="col-sm-4">
<Switch onChange={(e)=>this.handleSwitch(e)} width={65} height={33} checked={this.state.checkstatus} />

</div>
</div>



{this.state.checkstatus==false ? <> 

    <div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Customer Name</label>
</div>
<div className="col-sm-4">
<input type="text"
class="form-control"
placeholder="Enter the Customer Name"
onChange={this.handleChange}
value={this.state.username}
name="username"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorusername}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Mobile Number</label>
</div>
<div className="col-sm-4">
<input type="text"
 maxLength={10}
class="form-control"
placeholder="Enter the Customer Mobile"
onChange={this.handleChange}
value={this.state.mobile}
name="mobile"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errormobile}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Alternate Mobile</label>
</div>
<div className="col-sm-4">
<input type="text"
 maxLength={10}
class="form-control"
placeholder="Enter the Alternate Mobile"
onChange={this.handleChange}
value={this.state.alternate_mobile}
name="alternate_mobile"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.erroralternate_mobile}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Email Id</label>
</div>
<div className="col-sm-4">
<input type="email"
//  maxLength={10}/
class="form-control"
placeholder="Enter the Alternate Mobile"
onChange={this.handleChange}
value={this.state.email_id}
name="email_id"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.erroremail_id}</span> </div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Customer Address</label>
</div>
<div className="col-sm-4">
<textarea type="text"
class="form-control"
placeholder="Enter the Customer address"
onChange={this.handleChange}
value={this.state.address}
name="address"></textarea>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.erroraddress}</span> </div>
</div>

 </>  :  
 
<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Select Customer</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.CustomerDetailsOptions}
handleChange={d => this.HandleCustomer(d)}
selectedService={this.state.selectedcustomer}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorselectedcustomer}</span> </div>
</div>

                }



<div className="BackRow row form-group">
<div className="col-sm-2"><label class="LabelHead labell2">Select Trips </label></div>
<div className="col-sm-4">
{/* <Switch onChange={(e)=>this.handleSwitch(e)} width={65} height={33} checked={this.state.checkstatus} /> */}

</div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Select Trip Type</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.TripTypeOption}
handleChange={d => this.HandleTripTypeOption(d)}
selectedService={this.state.selectedTripTypeOption}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorTripTypeOption}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Pickup Location</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.PickupLocationOption}
handleChange={d => this.HandlePickupLocationOption(d)}
selectedService={this.state.selectedPickupLocationOption}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorPickupLocationOption}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Drop Location</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.PickupLocationOption}
handleChange={d => this.HandleDropLocationOption(d)}
selectedService={this.state.selectedDropLocationOption}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorDropLocationOption}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Pickup At</label>
</div>
<div className="col-sm-4">
{/* <SingleSelect
options={this.state.PickupLocationOption}
handleChange={d => this.HandleDropLocationOption(d)}
selectedService={this.state.selectedDropLocationOption}
/> */}
<DatePickerandTime startDate={this.state.pickupDate} HandlePickUpdate={this.handleDateChange} minTime={this.state.minTime} />
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorpickupDate}</span> </div>
</div>


{this.state.selectedTripTypeOption.value == 1 ? null : <div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Drop At</label>
</div>
<div className="col-sm-4">

<DatePickerandTime startDate={this.state.dropDate} HandlePickUpdate={this.handleDateChange1} minTime={this.state.minTime1} />
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordropDate}</span> </div>
</div>
 }


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Cab Type</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.cabTypeOption}
handleChange={d => this.HandleselectedcabTypeOption(d)}
selectedService={this.state.selectedcabTypeOption}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorcabTypeOption}</span> </div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Trip Kms</label>
</div>
<div className="col-sm-4">
<input type="text"
class="form-control"
placeholder="Enter the Trip Kilometer"
onChange={event => this.setState({trip_kms: event.target.value.replace(/\D/,'')})}
pattern="[0-9]*"
value={this.state.trip_kms}
name="trip_kms"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errortrip_kms}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Trip Charges</label>
</div>
<div className="col-sm-4">
<input type="text"
class="form-control"
placeholder="Enter the Trip charges"
onChange={event => this.setState({trip_charges: event.target.value.replace(/\D/,'')})}
pattern="[0-9]*"
value={this.state.trip_charges}
name="trip_kms"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errortrip_charges}</span> </div>
</div>
                
    <div class="row form-group">
    <div className="col-sm-3"></div>
    <div className="col-sm-6">
    <button type="button"
    style={{width:'100%'}} 
    onClick={ ButtonName1 === true ? this.submit : this.Update  }
    class="btn btn-primary m-t-15 waves-effect">
        {ButtonName1 === true ? "Add Trips" : "Update Trips" }
        </button>
    </div>
    <div className="col-sm-3"></div>
    </div>

 {/* Input fields */}

                <div className="row form-group">
                <div className="col-sm-12">
                {this.state.Data.length ? (
                    <Datatable
                    data={this.state.Data}
                    columnHeading={this.state.column}
                    />
                ) : null}
                </div>
                </div>
                 </div>

                </div>
                </div>
                </div>
                        </div>
                        </section>



</div>

    </>
)

       

    }

}

export default AddTrips;

 