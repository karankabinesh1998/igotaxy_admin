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


class MapCity extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {

                DistrictOptions:[],
                selecteddistrict:{},
                selecteddistrict1:{},
                ButtonName1:true,
                kms:"",
                price:"",
                MapCity:[],
                column: [
                    {
                      Header: "District_1",
                      accessor: "districtname1"
                    },
                    {
                        Header: "District_2",
                        accessor: "districtname2"
                      },
                    {
                      Header: "kms",
                      accessor: "kms",
                     //Cell: (d) => this.Image(d),
                    },
                    {
                        Header: "price",
                        accessor: "price",
                       //Cell: (d) => this.Image(d),
                      }
                      ,
                      {
                        Header: "Delete",
                        accessor: "delete",
                        Cell: (d) => this.delete(d),
                      },
                    ],
                    errorname1:""

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

    const previousData = [...this.state.MapCity];
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
                    "tbl_mapcitytoprice",
                    id
                  );
                  if (result) {
                      console.log(result);
                    this.setState({ MapCity : Data });
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
      this.setState({ MapCity: previousData });
      console.log(error);
    }
    
}

async componentDidMount(){
    try{

        let result = await Bridge.getFreedom(
            `id as value , district as label`,
            `tbl_district`,
            1,
            1,
            1
        )
        if(result){
            // console.log(result)

            this.setState({
                DistrictOptions : result.data
            })
        }

        let result1 = await Bridge.getFreedom(
            `tbl_mapcitytoprice.*,tbl_district.district as districtname1`,
            `tbl_district,tbl_mapcitytoprice`,
            `tbl_district.id = tbl_mapcitytoprice.district_1`,
            1,
            `tbl_mapcitytoprice.id DESC`
        )
        if(result1){

            


            let wait = await result.data.map((ival,i)=>{

                result1.data.map((jval,j)=>{
                    if(ival.value === jval.district_2){
                        result1.data[j].districtname2 = ival.label
                    }
                })
               
            })

            await Promise.all(wait)


            console.log(result1.data)

            this.setState({
                MapCity : result1.data
            })
        }

    }catch(error){
        console.log(error);
    }
}


HandleOption = async(e)=>{
   // console.log(e)
    this.setState({
        selecteddistrict : e
    })
}

HandleOption1 = async(e)=>{
    // console.log(e)
     this.setState({
         selecteddistrict1 : e
     })
 }

 handleChange=async(e)=>{
     this.setState({
         [e.target.name] : e.target.value
     })
 }

 submit = async()=>{

    const { selecteddistrict ,errorname1, selecteddistrict1 , kms , price   } = this.state;

     if(Object.keys(selecteddistrict).length === 0){
         swal("Please select district 1")
         return false
     }

     if(Object.keys(selecteddistrict1).length === 0){
        swal("Please select district 2")
        return false
    }

    if(!kms){
        swal("Please enter kms")
        return false
    }

    if(!price){
        swal("Please enter Price")
        return false
    }

    let d  = null;

   

    let wait = await this.state.MapCity.map((ival,i)=>{


        if( ival.district_1 == selecteddistrict.value && ival.district_2 == selecteddistrict1.value ){
            d = "dfdsf"
            swal("Already inserted")
        }

        if( ival.district_2 == selecteddistrict.value && ival.district_1 == selecteddistrict1.value ){
            d = "dfdsf"
            swal("Already inserted")
        }

       
    })

    await Promise.all(wait);

    if(d){

        return false
    }

    try{

        const formData=new FormData();
        formData.append("district_1",selecteddistrict.value);
        formData.append( "district_2" ,selecteddistrict1.value);
        formData.append("kms",kms);
        formData.append( "price" ,price);
        formData.append("status",1)
//  console.log(formData)

        console.log([...formData])

        let Submit = await Bridge.AddMaster(`tbl_mapcitytoprice`,formData)

        if(Submit){
            console.log(Submit)
        
            let arr = {}
            arr.id = Submit.insertId;
            arr.district_2 = selecteddistrict1.value;
            arr.districtname2 = selecteddistrict1.label;
            arr.district_1 = selecteddistrict.value;
            arr.districtname1 = selecteddistrict.label;
            arr.kms = kms;
            arr.price = price

            let newdata = [arr,...this.state.MapCity]

           this.setState({
               MapCity : newdata,
               selecteddistrict:{},
               selecteddistrict1:{},
               kms:"",
               price:"",
               errorname1:""
           })

           swal("Successfully added")
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
                <h3>Map City to Price</h3>
                </div>
               
                <div class="card-body">

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Select District 1</label>
                </div>
                <div className="col-sm-4">
                <SingleSelect
                   options={this.state.DistrictOptions}
                   handleChange={d => this.HandleOption(d)}
                   selectedService={this.state.selecteddistrict}
                />
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorselected}</span> </div>
                </div>


                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Select District 2</label>
                </div>
                <div className="col-sm-4">
                <SingleSelect
                   options={this.state.DistrictOptions}
                   handleChange={d => this.HandleOption1(d)}
                   selectedService={this.state.selecteddistrict1}
                />
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorselected}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Add Kms</label>
                </div>
                <div className="col-sm-4">
                <input type="number"
                class="form-control"
                placeholder="Enter the KMS"
                min={0}
                onChange={this.handleChange}
                value={this.state.kms}
                name="kms"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorname}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Add Price</label>
                </div>
                <div className="col-sm-4">
                <input type="number"
                class="form-control"
                placeholder="Enter the price"
                min={0}
                onChange={this.handleChange}
                value={this.state.price}
                name="price"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorprice}</span> </div>
                </div>


                <div class="row form-group">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <button type="button"
                style={{width:'100%'}} 
                onClick={ ButtonName1 === true ? this.submit : this.Update  }
                class="btn btn-primary m-t-15 waves-effect">
                    {ButtonName1 === true ? "Submit" : "Update" }
                    </button>
                </div>
                <div className="col-sm-4"></div>
                </div>


                <div className="row form-group">
                <div className="col-sm-12">
                {this.state.MapCity.length ? (
                    <Datatable
                    data={this.state.MapCity}
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

export default MapCity;