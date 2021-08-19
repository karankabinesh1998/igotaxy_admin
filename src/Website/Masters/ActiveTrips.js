import React from 'react';
import bridge from '../../Middleware/bridge';
// import  DatePickerandTime  from '../../Component/DatePickerandTime';
// import moment from 'moment'
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import ModelWindow from "../../Component/Model";

class ActiveTrips extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                FullData:[],
                column:[
                    {
                        Header:"Vendor",
                        accessor:"vendorname"
                    },
                    {
                        Header:"Trip Id",
                        accessor:"TripId"
                    },
                    {
                        Header:"Customer",
                        accessor:"customername"
                    },
                    {
                        Header:"Driver",
                        accessor:"driver_name"
                    },
                    {
                        Header:"Cab",
                        accessor:"cab_name"
                    },
                    {
                        Header: "Trip Status",
                        accessor: "vendorname",
                        Cell: (d) => this.TripStatus(d),
                    }
                ]
                
            }

        }

    }


    TripStatus= (e)=>{
        if(e.original.start == 1 && e.original.end == 1){
            return(
                <button type="button" className="btn btn-success" disabled={true}>Completed</button>
            )
        }else if(e.original.start==1){
            return(
                <button type="button" className="btn btn-primary" disabled={true}>Started</button>
            )
        }else{
            return(
                <button type="button" className="btn btn-secondary" disabled={true}>Not Started</button>
            )
        }
    }

    async componentDidMount(){
        try {

            let result = await bridge.getFreedom(
                `tbl_active_trips.*,tbl_user_web.username as vendorname , tbl_trips.trip_id as TripId , CustomerTable.username as customername , tbl_vendor_drivers.driver_name,tbl_vendor_cabs.cab_name`,
                `tbl_active_trips,tbl_user_web,tbl_trips,tbl_user_web as CustomerTable,tbl_vendor_drivers,tbl_vendor_cabs`,
                `tbl_user_web.id = tbl_active_trips.vendor_id and tbl_trips.id = tbl_active_trips.trip_id and CustomerTable.id = tbl_active_trips.customer_id and tbl_vendor_drivers.id = tbl_active_trips.driver_id 
                and tbl_vendor_cabs.id =  tbl_active_trips.cab_id`,
                1,
                1
            )
            if(result){
                console.log(result.data);
                this.setState({
                    FullData : result.data
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }


render(){

    return(
        <div class="main-content">

            <section class="section">
            <div class="section-body">
            <div class="row">
            <div class="col-12">

            <div class="card">
            <div class="card-header">
            <h3>Active Trips of Vendor</h3>
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

export default ActiveTrips;