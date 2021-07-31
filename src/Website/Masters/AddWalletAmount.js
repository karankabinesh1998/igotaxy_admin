import React from 'react';
import Bridge from '../../Middleware/bridge';
import { Alert } from "reactstrap";
import {ACCESS_POINT} from '../../config/index';
import http from "../../Middleware/http";
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import ModelWindow from "../../Component/Model";
import '../style1.css';

class AddWalletAmount extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                Data:[],
                Userdetails : JSON.parse(localStorage.getItem("Userdetails")),
                column:[
                        {
                        Header: "Vendar",
                        accessor: "username",
                        // Cell: (d) => this.View_history(d)
                        },
                        {
                            Header: "Wallet",
                            accessor: "wallet",
                        },
                        {
                        Header: "Wallet",
                        accessor: "wallet",
                        Cell: (d) => this.Wallet_status(d),

                        },

                        {
                            Header: "Wallet",
                            accessor: "wallet",
                            Cell: (d) => this.Wallet_status1(d),
    
                            },

                        {
                            Header: "View History",
                            accessor: "wallet",
                            Cell: (d) => this.View_history(d),
    
                            },
                ],
                alertVisible:false,
                color:"success",
                textALert:"",
                amount:0,
                user_id:null,
                debited:false,
                HiostoryData:[],
                column1:[
                   
                        {
                            Header: "Amount",
                            accessor: "amount",
                        }, 
                        {
                            Header : "Type",
                            accessor:"debited_credited"
                        }
                        , 
                        {
                            Header : "Date",
                            accessor:"created_At"
                        }
                    
                ]

            }
        }
    }


    View_history=(d)=>{
        return(
           
                <button type="button" 
                className="btn btn-primary" 
                data-toggle="modal"
                data-target="#history"
                style={{width:100}}
                 onClick={()=>this.View_History_Data(d)}>
                   View history
                </button>
            
        )
    }

    View_History_Data=async(e)=>{

        try {


            let result = await Bridge.getFreedom(
                `tbl_wallet_master_history.*`,
                `tbl_wallet_master_history`,
                `tbl_wallet_master_history.user_id = ${e.original.id}`,
                1,
                `created_At DESC`
            )

            if(result){
                console.log(result.data);
                this.setState({
                        HiostoryData : result.data
                })
            }

            
        } catch (error) {
            console.log(error);
        }

    }

    Wallet_status=(d)=>{

        return(
            <button type="button" 
            className="btn btn-primary" 
            data-toggle="modal"
            data-target="#addwallet"
             onClick={()=>this.AddAmount(d)}>
                Add Wallet
            </button>
        )

    }

    Wallet_status1=(d)=>{

        return(
            <button type="button" 
            className="btn btn-primary" 
            data-toggle="modal"
            data-target="#addwallet"
             onClick={()=>this.AddAmount1(d)}>
                Remove Wallet
            </button>
        )

    }

    AddAmount1=async(e)=>{
        let d = e.original;
        console.log(d);
        let index = e.index;

        this.setState({
            user_id : d.id,
            index,
            debited : true
        })


    }

    AddAmount=async(e)=>{
        let d = e.original;
        console.log(d);
        let index = e.index;

        this.setState({
            user_id : d.id,
            index,
            debited : false
        })


    }


    async componentDidMount(){

       try {

        let result = await Bridge.getFreedom(
            `tbl_user_web.*`,
            `tbl_user_web`,
            `userType = 3`,
            1,
            "tbl_user_web.id"
        )

        if(result){
            console.log(result.data);
            this.setState({
                Data:result.data
            })
        }

           
       } catch (error) {
           console.log(error);
       }
    }


    submit=async()=>{
        const { amount , index  , debited } = this.state;

        if(!amount){
            this.setState({
                erroramount : "Please enter the amount"
            })
        }else{
            this.setState({
                erroramount : ""
            })
        }

        const formData=new FormData();
        formData.append("amount",amount);
        formData.append("user_id",this.state.user_id);
        if(debited==true){
            formData.append("debited_credited","debited")
        }else{
            formData.append("debited_credited","credited")
        }
        
        formData.append("customerid",this.state.Userdetails[0].id)


        try {

            let result = await Bridge.AddMaster(`tbl_wallet_master_history`,formData)

            if(result){
                console.log(result);


                let newdata = [...this.state.Data];

                newdata[index].wallet = result.data[0].wallet

                this.setState({
                    Data : newdata,
                    amount:0
                })


            }   
            
        } catch (error) {
            console.log(error);
        }

    }


    render(){

        return(
            <>
            <div class="main-content">

            <ModelWindow  
                ButtonTitle = "View History"
                // ButtonName = "Add Wallet"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "history"
                    ButtonBody={
                        <div className="row form-group">
                <div className="col-sm-12">
                {this.state.HiostoryData.length ? (
                    <Datatable
                    data={this.state.HiostoryData}
                    columnHeading={this.state.column1}
                    />
                ) : null}
                </div>
                </div>
                    }
                />

            <ModelWindow  
                ButtonTitle = "Add Wallet"
                ButtonName = "Add Wallet"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "addwallet"
                ButtonBody = {
                     <>
 <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                <Alert
                    className="badge-content"
                    color="success"
                    isOpen={this.state.alertVisible}
                    toggle={this.onDismiss}
                    color={this.state.color}
                >
                    {this.state.textALert}
                </Alert>
                </div>
                <div className="col-sm-2" />
            </div>

            <div class="form-group">
            <label  class="labell" >Amount</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="Text"
                class="form-control"
                placeholder="Enter the Amount"
                onChange={event => this.setState({amount: event.target.value.replace(/\D/,'')})}
                    pattern="[0-9]*"
                value={this.state.amount}
                name="amount"/>
             
            </div>
            <span id="spanid" >{this.state.erroramount}</span>  
            </div>

            <div class="row form-group">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
            <button type="button"
             style={{width:'100%'}} 
             onClick={this.submit}
             class="btn btn-primary m-t-15 waves-effect">
            { "Add Amount"}
                 </button>
            </div>
            <div className="col-sm-2"></div>
            </div>

                     </>
                    
                    }
                />

            <section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>Wallet</h3>
                </div>
                <div class="card-header">
                {/* <button type="button"
                class="btn btn-primary" 
                data-toggle="modal"
                onClick={this.AddCustomers}
                data-target="#addvendar">
                    Add Wallet  
                    </button> */}
                </div>
                <div class="card-body">
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

export default AddWalletAmount;