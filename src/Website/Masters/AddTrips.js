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
                minTime1 : this.calculateMinTime1(new Date())
            }

        }

    }


    async componentDidMount(){
        try {

            let CustomerDetails = await Bridge.getFreedom(
                `*`,
                `tbl_user_web`,
                `userType = 4 and status = 1`
            )

            let CustomerDetailsOptions=[]
            if(CustomerDetails.data.length){

                // console.log(CustomerDetails);
                let arr={}

                let wait = await CustomerDetails.data.map((ival,i)=>{

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


   
        render(){

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
<div className="col-sm-3"> <span class="errormsg">{this.state.errorDropLocationOption}</span> </div>
</div>


{this.state.selectedTripTypeOption.value == 1 ? null : <div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Drop At</label>
</div>
<div className="col-sm-4">

<DatePickerandTime startDate={this.state.dropDate} HandlePickUpdate={this.handleDateChange1} minTime={this.state.minTime1} />
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorDropLocationOption}</span> </div>
</div>
 }


                


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

 