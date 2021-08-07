// AssignTripToVendor
import React from 'react';
import bridge from '../../Middleware/bridge';
import  DatePickerandTime  from '../../Component/DatePickerandTime';
import moment from 'moment'
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import ModelWindow from "../../Component/Model";

class AssignTripToVendor extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                FullData:[],
                BiddingData:[],
                column: [
                    {
                    Header: "customer_name",
                    accessor: "customer_name",
                    Cell: (d) => this.ViewCustomer(d),
                    },
                    {
                        Header:"Trip Id",
                        accessor:"trip_id"
                    },
                    {
                        Header:"pickup_date",
                        accessor:"pickup_date"
                    },
                    {
                        Header: "Biddings",
                        accessor: "customer_name",
                        Cell: (d) => this.Biddings(d),
                    }
                ],
                column1:[
                    {
                        Header: "Vendor Name",
                        accessor: "UserName"
                    },
                    {
                        Header:"Amount",
                        accessor:"req_amount"
                    },
                    {
                        Header:"Assign Trip",
                        accessor:"UserName",
                        Cell: (d) => this.AssignVendor(d),
                    }
                ],
                CustomerDeatils:{}

            }

        }

    }

    ViewCustomer=(e)=>{
        return(
            <button type="button"  data-toggle="modal"
            data-target="#viewcustom" style={{width:'95%'}} onClick={()=>this.ViewCustomerFull(e)} className="btn btn-primary">{e.original.customer_name}</button>
        )
    }

    ViewCustomerFull=async(e)=>{
        console.log(e.original);
        try {

            let result = await bridge.getFreedom(
                `tbl_user_web.*,tbl_trips.trip_type,Drop_Table.city as DropLocation,tbl_city.city as PickUplocation ,tbl_trips.pickup_location,tbl_trips.drop_location,tbl_trips.pickup_date,tbl_trips.drop_date,tbl_trips.cab_type,tbl_trips.trip_kms,tbl_trips.trip_charges,tbl_trips.extra_charge,tbl_trips.trip_id`,
                `tbl_user_web,tbl_trips,tbl_city,tbl_city as Drop_Table`,
                `tbl_city.id = tbl_trips.pickup_location and Drop_Table.id = tbl_trips.drop_location  and tbl_trips.trip_id = '${e.original.trip_id}' and tbl_user_web.id = tbl_trips.customer_id and tbl_trips.trip_status = 'active'`,
                1,
                1
            )
            if(result){
                console.log(result);
                this.setState({
                    CustomerDeatils: result.data[0]
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    AssignVendor=(e)=>{
        
        if(e.original.status =="waiting"){
            return(
                <button type="button" className="btn btn-warning" onClick={()=>this.AssignTripToVendor(e)} >Assign Trip</button>
            )
        }else if(e.original.status=='approved'){
            return(
                <button type="button" className="btn btn-success" onClick={()=>this.AssignTripToVendor1(e)} >Assigned</button>
            )
        }

        ///onClick={()=>this.AssignTripToVendor1(e)}
    }
    
    AssignTripToVendor1=async(e)=>{

        try {

            let arr ={}
            arr.trip_assigned_to = null;

            swal({
                title: "Are you sure?",
                text: "Do you want to Reject this Assignment!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async(willDelete) => {

                if(willDelete){

            let result = await bridge.updateMaster(`tbl_trips`,e.original.trip_id,arr)
           
            if(result){

                let arr1 = {}
        arr1.status ='waiting';
        let updateBiddingTable = await bridge.UpdateBiddingApproval(`tbl_bidding_trips`,e.original.id,arr1,e.original.trip_id);
        if(updateBiddingTable){

        const formData=new FormData();
        formData.append("token",e.original.token);
        formData.append("body",`Your Request for Trip ${e.original.trip_id_1} Cancelled`)
        formData.append("trip_id",e.original.trip_id_1);
        formData.append("title",`Sorry ${e.original.UserName}`)
        formData.append("amount",e.original.req_amount);

        let SendNotify = await bridge.SendAssignedTripNotification(formData)

        if( SendNotify ) {

            this.setState({
                BiddingData : updateBiddingTable.data
            })

        }

        }

            }

            }else{
                    swal("Process Cancelled")
            }
        })
            
        } catch (error) {
            console.log(error);
        }

    }
   
    AssignTripToVendor=async(e)=>{
        // trip_assigned_to  
        
        try {

            let arr ={}
            arr.trip_assigned_to = e.original.vendor_id;

            swal({
                title: "Are you sure?",
                text: "Do you want to Assign this Trip!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async(willDelete) => {

                if(willDelete){

            let result = await bridge.updateMaster(`tbl_trips`,e.original.trip_id,arr)
           
            if(result){

        let arr1 = {}
        arr1.status ='approved';
        let updateBiddingTable = await bridge.UpdateBiddingApproval(`tbl_bidding_trips`,e.original.id,arr1,e.original.trip_id);
        if(updateBiddingTable){
        console.log(updateBiddingTable);
        const formData=new FormData();
        formData.append("token",e.original.token);
        formData.append("body",`Your Request for Trip ${e.original.trip_id_1}, for the amount of ${e.original.req_amount} has been approved`)
        formData.append("trip_id",e.original.trip_id_1);
        formData.append("amount",e.original.req_amount);
        formData.append("title",`Congratulations ${e.original.UserName}`)

        let SendNotify = await bridge.SendAssignedTripNotification(formData)
        if(SendNotify){
            console.log(SendNotify);

            this.setState({
                BiddingData : updateBiddingTable.data
            })

        }
                    }
                
            }

        }else{
            swal("Assign Trip to Vendor Cancelled")
        }

       
    })
            
        } catch (error) {
            console.log(error);
        }
    }


    Biddings=(e)=>{
        return(
            <button type="button" 
            data-toggle="modal"
            data-target="#viewBiddding" 
            className="btn btn-primary" 
            onClick={()=>this.ViewBidding(e)}
             >
                 View Biddings
             </button>
        )
    }

    ViewBidding=async(e)=>{

        try {

            let result = await bridge.getFreedom(
                `tbl_bidding_trips.*,tbl_user_web.username as UserName,tbl_user_web.token,tbl_trips.trip_assigned_to`,
                `tbl_bidding_trips,tbl_user_web,tbl_trips`,
                `tbl_bidding_trips.vendor_id = tbl_user_web.id and  tbl_trips.id = tbl_bidding_trips.trip_id  and tbl_bidding_trips.trip_id = ${e.original.id}`,
                1,
                `tbl_bidding_trips.req_amount `
            )            

            if(result){
                this.setState({
                    BiddingData:result.data
                })
            }

            console.log(result.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount(){

        try {

            let Result = await bridge.TripsJson();

            if(Result){
                this.setState({
                    FullData:Result.data
                })
            }

            // console.log(Result);
            
        } catch (error) {
            console.log(error);
        }
    }


    render(){
        // console.log(this.state.CustomerDeatils);
        return(
            <div class="main-content">

            <ModelWindow  
                ButtonTitle = {this.state.CustomerDeatils.username}
                ButtonName = "Add Document"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "viewcustom"
                ButtonBody={
                    <div class="card">
                <div class="card-body">
                <h4>{this.state.CustomerDeatils.username}</h4>
                <br/>
                <p>mobile : {this.state.CustomerDeatils.mobile}</p>
                <p>Email Id : {this.state.CustomerDeatils.email_id}</p>
                <p>Address : {this.state.CustomerDeatils.address}</p>
                <br/>
                <h4>Trip Details</h4>
                <br/>
                <p>Trip ID : {this.state.CustomerDeatils.trip_id}</p>
                <p>Pick Up : {this.state.CustomerDeatils.PickUplocation}</p>
                <p>Drop At : {this.state.CustomerDeatils.DropLocation}</p>
                <p>Pick Up Date : {this.state.CustomerDeatils.pickup_date}</p>
                <p>Drop Date : {this.state.CustomerDeatils.drop_date} </p>
                <p>Cab Type : {this.state.CustomerDeatils.cab_type} </p>
                <p>Trip Type : {this.state.CustomerDeatils.trip_type} </p>
                <p>Trip Kms : { this.state.CustomerDeatils.trip_kms}</p>
                <p>Trips Charges / Kms : { this.state.CustomerDeatils.trip_charges}</p>
                <p>Extra Charges / Kms : { this.state.CustomerDeatils.extra_charge}</p>
                <p>Total Charges : {parseInt(this.state.CustomerDeatils.trip_kms)*parseInt(this.state.CustomerDeatils.trip_charges) }</p>
                </div>

                </div>
                
            
                }
                />

                <ModelWindow  
                ButtonTitle = "Vendor Biddings"
                ButtonName = "Add Document"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "viewBiddding"
                ButtonBody={
                    <div className="row form-group">
            <div className="col-sm-12">
            {this.state.BiddingData.length ? (
                <Datatable
                data={this.state.BiddingData}
                columnHeading={this.state.column1}
                />
            ) : <h3>No Biddings Placed</h3>}
            </div>
            </div>
                }
                />
                <section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">

                <div class="card">
                <div class="card-header">
                <h3>Map Trips to Vendor</h3>
                </div>
                <div class="card-body">

                <div className="row form-group">
                <div className="col-sm-12">
                {this.state.FullData.length ? (
                    <Datatable
                    data={this.state.FullData}
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
        )
    }

}

export default AssignTripToVendor;