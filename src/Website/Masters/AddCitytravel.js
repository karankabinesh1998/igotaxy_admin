import React from 'react';
import Bridge from '../../../Middleware/bridge';
import { Alert } from "reactstrap";
import {ACCESS_POINT} from '../../../config/index';
import http from "../../../Middleware/http";
import Datatable from "../../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import '../style1.css';
//import '../../../Component/loader.css';
import SingleSelect from '../../../Component/SingleSelect';
import { data } from 'jquery';

class AddCitytravel extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                StateOptions :[],
                selectedstate:"",
                errorname:"",
                errorselected:"",
                district:"",
                ButtonName1:true,
                DistrictOption:[],
                column: [
                    {
                      Header: "State",
                      accessor: "statename"
                    },
                    {
                      Header: "District",
                      accessor: "district",
                     //Cell: (d) => this.Image(d),
                    },
                    {
                        Header: "Edit",
                        accessor: "edit",
                        Cell: (d) => this.edit(d),
                      },
                      {
                        Header: "Delete",
                        accessor: "delete",
                        Cell: (d) => this.delete(d),
                      },
                ],
                Index:null,

            }

        }

    }

    delete = (d) => {

        return (
            <center>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.deletion(d)}
          >
            Delete
          </button>
          </center>
        );
      };


      deletion =async(value)=>{

        const previousData = [...this.state.DistrictOption];
        // Seperating data row using row-index
        const getData = { ...previousData[value.index] };
    
        //getting id on that data
        const id = getData.id;
        //removing specific id in previous state data
        const Data = previousData.filter((delelteid) => delelteid.id !== id);
    
        try {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async(willDelete) => {
               
                if (willDelete) {
                    const result = await Bridge.deleteMaster(
                        "tbl_district",
                        id
                      );
                      if (result) {
                          console.log(result);
                        this.setState({DistrictOption : Data });
                        swal("Poof! Your Data has been deleted!", {
                            icon: "success",
                          });
                        // setTimeout(() => this.setState({ formAlertdelete: false }), 3000);
                      }
                  
                } else {
                  swal("Your Data  is safe!");
                }
              });
         
        } catch (error) {
          this.setState({ DistrictOption: previousData });
          console.log(error);
        }
        
    }

    edit = (d) => {
        let value = d;
        return (
          <center>
            <button
              type="button"
              className="btn btn-info"
              data-toggle="modal"
               data-target="#addvendar"
               onClick={() => this.edition(value)}
            >
              Edit
            </button>
          </center>
        );
      };

      edition =async(e)=>{
          
          let d = e.original;
         
          this.setState({
              Index : e.index,
              district: d.district,
              EditId : d.id,
              ButtonName1:false,
              Same : d.district

          })

          let wait = await this.state.StateOptions.map((ival,i)=>{
           // console.log(ival)
              if(d.state_id === ival.value){
                  this.setState({
                      selectedstate : ival
                  })
              }
          })

          await Promise.all(wait)

          window.scroll({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
      }


async componentDidMount(){
    try{

        let StateOptions  = await Bridge.getFreedom(
            `id as value , state as label`,
            `tbl_state`,
            `status = 1`,
            1,
            1
        )

        if(StateOptions){
            this.setState({
                StateOptions : StateOptions.data
            })
        }

        let DistrictOption = await Bridge.getFreedom(
            `tbl_district.*,tbl_state.state as statename`,
            `tbl_district,tbl_state`,
            `tbl_district.state_id = tbl_state.id`,
            1,
            `tbl_district.id DESC`
        )

        if(DistrictOption){
            console.log(DistrictOption)
            this.setState({
                DistrictOption : DistrictOption.data
            })
        }



    }catch(error){
        console.log(error);
    }
}    

HandleOption = async(e)=>{
    this.setState({
        selectedstate : e
    })
}

handleChange=async(e)=>{
    this.setState({
        district : e.target.value
    })
}



Update = async()=>{
    const { selectedstate , district  , DistrictOption } = this.state;


    if(!Object.keys(selectedstate).length){
        this.setState({
            errorselected : "please select the state"
        })
        return false
    }else{
        this.setState({
            errorselected:""
        })
    }

    if(!district){
        this.setState({
            errorname:"Please enter the district"
        })
        return false
    }else{
        this.setState({
            errorname:""
        })
    }

    let d = district.toLowerCase();

   // let same = district.toLowerCase();

    let wait = await DistrictOption.map((ival,i)=>{
        if(d.trim() == ival.district  && this.state.Same !== d ){
            this.setState({
                errorname:"district already inserted"
            })

            return false
        }
    })

    await Promise.all(wait)

    if(this.state.errorname){
        return false;
    }

    try{

        let arr = { };
            // arr.id = submit.data.insertId;
            arr.state_id = selectedstate.value;
            arr.district = d;
            // arr.status = 1;

        const Update = await Bridge.updateMaster("tbl_district",this.state.EditId,arr);

        if(Update){

            let date1= [...this.state.DistrictOption];

            date1[this.state.Index].state_id = selectedstate.value;
            date1[this.state.Index].statename = selectedstate.label;
            date1[this.state.Index].district = d

            this.setState({
                DistrictOption : date1,
                ButtonName1:true,
                EditId : null,
                Index:null,
                selectedstate:{},
                district:""
            })

            swal("District Updated successfully")
        }



    }catch(error){
        console.log(error);
    }

}


adddistrict = async()=>{

    const { selectedstate , district  , DistrictOption } = this.state;


    if(!Object.keys(selectedstate).length){
        this.setState({
            errorselected : "please select the state"
        })
        return false
    }else{
        this.setState({
            errorselected:""
        })
    }

    if(!district){
        this.setState({
            errorname:"Please enter the district"
        })
        return false
    }else{
        this.setState({
            errorname:""
        })
    }

    let d = district.toLowerCase()
    

 
    let wait = await DistrictOption.map((ival,i)=>{
        if(d.trim() == ival.district ){
            this.setState({
                errorname:"district already inserted"
            })

            return false
        }
    })

    await Promise.all(wait)

    if(this.state.errorname){
        return false;
    }

    try{

        const formData=new FormData();
        formData.append("state_id",selectedstate.value);
        formData.append( "district" , d );
        formData.append("status",1)

        const submit = await Bridge.AddMaster("tbl_district",formData);

        if(submit){

            console.log(submit)

            let arr = { };
            arr.id = submit.data.insertId;
            arr.state_id = selectedstate.value;
            arr.statename=selectedstate.label
            arr.district = d;
            arr.status = 1;
       
            let data = [arr,...this.state.DistrictOption];

            console.log(data);

            this.setState({
                selectedstate:{},
                district:"",
                DistrictOption:data,
                errorname:""
            })

            swal("District added Succesfully")

        }

    }catch(error){
        console.log(error);
    }



}


    render(){

        const { ButtonName1 } = this.state;
        return(
            <React.Fragment>

<div class="main-content">
        <section class="section">
          <div class="section-body">
           
          <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>District</h3>
                </div>
               
                <div class="card-body">

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Select State</label>
                </div>
                <div className="col-sm-4">
                <SingleSelect
                   options={this.state.StateOptions}
                   handleChange={d => this.HandleOption(d)}
                   selectedService={this.state.selectedstate}
                />
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorselected}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Add district</label>
                </div>
                <div className="col-sm-4">
                <input type="text"
                class="form-control"
                placeholder="Enter the City"
                onChange={this.handleChange}
                value={this.state.district}
                name="name"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorname}</span> </div>
                </div>
               
                <div class="row form-group">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <button type="button"
                style={{width:'100%'}} 
                onClick={ ButtonName1 === true ? this.adddistrict : this.Update  }
                class="btn btn-primary m-t-15 waves-effect">
                    {ButtonName1 === true ? "Add district" : "Update district" }
                    </button>
                </div>
                <div className="col-sm-4"></div>
                </div>
               

               <div className="row form-group">
                <div className="col-sm-12">
                {this.state.DistrictOption.length ? (
                    <Datatable
                    data={this.state.DistrictOption}
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
export default AddCitytravel;