import React from 'react';
import Bridge from '../../Middleware/bridge';
import { Alert } from "reactstrap";
import {ACCESS_POINT} from '../../config/index';
import http from "../../Middleware/http";
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import '../style1.css';
// import '../../../Component/loader.css'




class AddCountry extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                Data :[],
                column: [
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Code",
                      accessor: "code",
                     //Cell: (d) => this.Image(d),
                    },
                    { 
                        Header:"Status",
                        accessor:"code",
                        Cell: (d) => this.Status(d),

                    },
                ]
            }
        }
    }

    Status = (d)=>{
        if(d.original.status == 0){

            return (
                <center>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.StatusChange(d)}
              >
               Inactive 
              </button>
              </center>
            );

        }else{
            return (
                <center>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.StatusChange(d)}
              >
               Active 
              </button>
              </center>
            );
        }
    }

    StatusChange = async(e)=>{
        let value = e.original.status;
        let id = e.original.id;
        let index = e.index;

        const previousData = [...this.state.Data];
       // console.log(e.original)
      //  console.log(previousData)
  
        let arr = {};
 
        if(value === 0){
         
        
         arr.status = 1
 
        }else{
 
         arr.status = 0
        }
 
        //let 
 
       try{
 
         const Update = await Bridge.updateMaster("tbl_country",id,arr);
 
         previousData[index].status = arr.status;
         
 
         if(Update){
            this.setState({
              Data:previousData
            })
         }
 
       }catch(error){
         console.log(error);
       }
     }
 

    async componentDidMount(){
        try{

            const result = await Bridge.getFreedom(
                `*`,
                `tbl_country`,
                1,
                1,
                'name',
            )

            if(result.data){
                this.setState({
                    Data : result.data
                })
            }

        }catch(error){
            console.log(error);
        }
    }

    render(){
        return(
            <React.Fragment>
             <div class="main-content">
             <section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>Country</h3>
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
            </React.Fragment>
        )
    }

}

export default AddCountry;