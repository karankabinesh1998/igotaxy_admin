// AddDrivers.
import React from 'react';
import bridge from '../../Middleware/bridge';
// import  DatePickerandTime  from '../../Component/DatePickerandTime';
import moment from 'moment'
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import ModelWindow from "../../Component/Model";
import SingleSelect from '../../Component/SingleSelect';

class AddDrivers extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                FullData:[],
                VendorData:[],
                selectedVendorData:{},
                errorselectedVendorData:"",
                ButtonName1:true,
                driver_name:"",
                errordriver_name:"",
                driver_mobile:"",
                errordriver_mobile:"",
                driver_email:"",
                errordriver_email:"",
                driving_license_front:"",
                errordriving_license_front:"",
                driving_license_back:"",
                errordriving_license_back:"",
                police_verify:"",
                errorpolice_verify:"",
                erroroverall_exp:"",
                overall_exp:"",
                file1:"",
                file2:"",
                file3:"",
                d_front:"",
                d_back:"",
                police_c:"",
                EditId:null,
                column:[
                    {
                        Header:"Vendor Name",
                        accessor:"username"
                    },
                    {
                        Header:"Driver Name",
                        accessor:"driver_name"
                    },
                    {
                        Header:"Driver Mobile",
                        accessor:"driver_mobile"
                    },
                    {
                        Header:"Driver Email",
                        accessor:"driver_email"
                    },
                    {
                        Header:"Experience",
                        accessor:"overall_exp"
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
                ]
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

    const previousData = [...this.state.FullData];
    // Seperating data row using row-index
    const getData = { ...previousData[value.index] };

    //getting id on that data
    const id = getData.id;
    //removing specific id in previous state data
    const Data = previousData.filter((delelteid) => delelteid.id !== id);

    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Driver!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async(willDelete) => {
           
            if (willDelete) {
                const result = await bridge.deleteMaster(
                    "tbl_vendor_drivers",
                    id
                  );
                  if (result) {
                      console.log(result);
                    this.setState({ FullData:Data });
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
      this.setState({ FullData: previousData });
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

      edition=async(e)=>{
          console.log(e.original);
          let d = e.original;

          let index = e.index;

          let wait = await this.state.VendorData.map((ival,i)=>{
              if(ival.value == d.vendor ){
                  this.setState({
                      selectedVendorData:ival
                  })
              }
          })
          await Promise.all(wait);

          this.setState({
              index,
              driver_name : d.driver_name,
              driver_email:d.driver_email,
              driver_mobile:d.driver_mobile,
              driving_license_front:d.driving_license_front,
              driving_license_back:d.driving_license_back,
              police_verify:d.driving_license_back,
              overall_exp:d.overall_exp,
              ButtonName1:false,
              EditId:d.id,
              d_front:d.driving_license_front,
              d_back:d.driving_license_back,
              police_c:d.driving_license_back

          })

      }

    HandleVendorData=async(e)=>{
        this.setState({
            selectedVendorData:e
        })
    }


    async componentDidMount(){

        try {

            let VendorData1 = await bridge.getFreedom(
                `id as value , username as label`,
                `tbl_user_web`,
                `status = 1 and userType = 3`,
                1,
                1
            )

            if(VendorData1){
                console.log(VendorData1);
                this.setState({
                    VendorData : VendorData1.data
                })
            }

            let FetchData = await bridge.getFreedom(
                `tbl_vendor_drivers.*,tbl_user_web.username`,
                `tbl_vendor_drivers,tbl_user_web`,
                `tbl_vendor_drivers.vendor = tbl_user_web.id and tbl_user_web.status = 1`,
                1,
                `tbl_user_web.id`
              )
              if(FetchData){
                  this.setState({
                      FullData:FetchData.data
                  })
              }
            
        } catch (error) {
            console.log(error);
        }
    }

    handleChange=async(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    submit=async()=>{

        const { selectedVendorData , driver_name ,driving_license_back, driving_license_front,police_verify,overall_exp , driver_email ,driver_mobile } = this.state;

        if(Object.keys(selectedVendorData).length === 0){
            this.setState({
                errorselectedVendorData : "Please select the vendor"
                
            })
            return false
        }else{
            this.setState({
                errorselectedVendorData:""
            })
        }

        if(!driver_name){
            this.setState({
                errordriver_name : "Enter the driver name"
            })
        }else{
            this.setState({
                errordriver_name:""
            })
        }

        if(!driver_mobile){
            this.setState({
                errordriver_mobile : "Enter the driver mobile"
            })
        }else{
            this.setState({
                errordriver_mobile:""
            })
        }

        // if(!driver_email){
        //     this.setState({
        //         errordriver_email : "Enter the driver Email Id"
        //     })
        // }else{
        //     this.setState({
        //         errordriver_email:""
        //     })
        // }


        if(!driver_email){
            this.setState({
                errordriver_email : "Enter the driver Email Id"
            })
        }else{
            this.setState({
                errordriver_email:""
            })
        }

        try {

            const formData=new FormData();
            formData.append("vendor",selectedVendorData.value);
            formData.append("driver_name",driver_name);
            formData.append("driver_mobile",driver_mobile);
            formData.append("driver_email",driver_email);
            formData.append("driving_license_front",driving_license_front);
            formData.append("driving_license_back",driving_license_back);
            formData.append("police_verify",police_verify);
            formData.append("overall_exp",overall_exp);
            formData.append("file1",this.state.file1)
            formData.append("file2",this.state.file2)
            formData.append("file3",this.state.file3)

            const Result = await bridge.AddDriverdata(formData)
            if(Result){

                swal("SuccessFully Added Driver")
                this.setState({
                    FullData:Result.data,
                    driver_email:"",
                    driver_mobile:"",
                    driver_name:"",
                    driving_license_front:"",
                    driving_license_back:"",
                    file1:"",
                    file2:'',
                    file3:"",
                    police_verify:"",
                    overall_exp:"",
                    ButtonName1:false,
                    index:null,
                    EditId:null,
                    selectedVendorData:{}
                })
            }

           

            
        } catch (error) {
            console.log(error);
        }
    }

    Update = async()=>{
        const { selectedVendorData ,EditId, driver_name ,driving_license_back, driving_license_front,police_verify,overall_exp , driver_email ,driver_mobile } = this.state;

        if(Object.keys(selectedVendorData).length === 0){
            this.setState({
                errorselectedVendorData : "Please select the vendor"
                
            })
            return false
        }else{
            this.setState({
                errorselectedVendorData:""
            })
        }

        if(!driver_name){
            this.setState({
                errordriver_name : "Enter the driver name"
            })
        }else{
            this.setState({
                errordriver_name:""
            })
        }

        if(!driver_mobile){
            this.setState({
                errordriver_mobile : "Enter the driver mobile"
            })
        }else{
            this.setState({
                errordriver_mobile:""
            })
        }

        // if(!driver_email){
        //     this.setState({
        //         errordriver_email : "Enter the driver Email Id"
        //     })
        // }else{
        //     this.setState({
        //         errordriver_email:""
        //     })
        // }


        if(!driver_email){
            this.setState({
                errordriver_email : "Enter the driver Email Id"
            })
        }else{
            this.setState({
                errordriver_email:""
            })
        }

        try {

            const formData=new FormData();
            formData.append("vendor",selectedVendorData.value);
            formData.append("driver_name",driver_name);
            formData.append("driver_mobile",driver_mobile);
            formData.append("driver_email",driver_email);
            formData.append("driving_license_front",driving_license_front);
            formData.append("driving_license_back",driving_license_back);
            formData.append("police_verify",police_verify);
            formData.append("overall_exp",overall_exp);
            formData.append("file1",this.state.file1)
            formData.append("file2",this.state.file2)
            formData.append("file3",this.state.file3)

            formData.append("d_front",this.state.d_front)
            formData.append("d_back",this.state.d_back)
            formData.append("police_c",this.state.police_c)

            
              
              

            console.log([...formData]);

            const Result = await bridge.EditDriverdata(formData,EditId)
            if(Result){
               
                swal("SuccessFully Updated Driver")
                console.log(Result)

                this.setState({
                    FullData:Result.data,
                    driver_email:"",
                    driver_mobile:"",
                    driver_name:"",
                    driving_license_front:"",
                    driving_license_back:"",
                    file1:"",
                    file2:'',
                    file3:"",
                    police_verify:"",
                    overall_exp:"",
                    ButtonName1:true,
                    index:null,
                    EditId:null,
                    selectedVendorData:{},
                    d_front:"",
                    d_back:"",
                    police_c:""
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

    handleChangeFile=async(e)=>{
        this.setState({file1:e.target.files[0],driving_license_front:e.target.files[0].name})
    }

    handleChangeFile2=async(e)=>{
        this.setState({file2:e.target.files[0],driving_license_back:e.target.files[0].name})
    }

    handleChangeFile3=async(e)=>{
        this.setState({file3:e.target.files[0],police_verify:e.target.files[0].name})
    }


    render(){
        const { ButtonName1 } = this.state;
        return(
            <div class="main-content">

            <section class="section">
            <div class="section-body">
            <div class="row">
            <div class="col-12">

            <div class="card">
            <div class="card-header">
            <h3>Drivers For Vendor</h3>
            </div>
            <div class="card-body">

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2">Select Vendor</label>
</div>
<div className="col-sm-4">
<SingleSelect
options={this.state.VendorData}
handleChange={d => this.HandleVendorData(d)}
selectedService={this.state.selectedVendorData}
/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorselectedVendorData}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Driver Name</label>
</div>
<div className="col-sm-4">
            <input type="text"
            class="form-control"
            placeholder="Enter the Driver name"
            onChange={this.handleChange}
            value={this.state.driver_name}
            name="driver_name"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordriver_name}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Driver Mobile</label>
</div>
<div className="col-sm-4">
            <input type="text"
            class="form-control"
            maxLength={10}
            placeholder="Enter the Driver mobile"
            onChange={this.handleChange}
            value={this.state.driver_mobile}
            name="driver_mobile"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordriver_mobile}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Driver Email Id</label>
</div>
<div className="col-sm-4">
            <input type="text"
            class="form-control"
            placeholder="Enter the Driver mobile"
            onChange={this.handleChange}
            value={this.state.driver_email}
            name="driver_email"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordriver_email}</span> </div>
</div>


<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Driving License Front</label>
</div>
<div className="col-sm-4">
<input
type="file"
className="custom-file-input"
onChange={(e)=>this.handleChangeFile(e)}
accept="image/*"
/>
<label className="custom-file-label" htmlFor="customFileThumbnail">
{this.state.driving_license_front ? this.state.driving_license_front.substring(0, 15) : null}
</label>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordriving_license_front}</span> </div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Driving License Back</label>
</div>
<div className="col-sm-4">
<input
type="file"
className="custom-file-input"
onChange={(e)=>this.handleChangeFile2(e)}
accept="image/*"
/>
<label className="custom-file-label" htmlFor="customFileThumbnail">
{this.state.driving_license_back ? this.state.driving_license_back.substring(0, 15) : null}
</label>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errordriving_license_back}</span> </div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Police Certificate</label>
</div>
<div className="col-sm-4">
<input
type="file"
className="custom-file-input"
onChange={(e)=>this.handleChangeFile3(e)}
accept="image/*"
/>
<label className="custom-file-label" htmlFor="customFileThumbnail">
{this.state.police_verify ? this.state.police_verify.substring(0, 15) : null}
</label>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.errorpolice_verify}</span> </div>
</div>

<div className="row form-group">
<div className="col-sm-2"></div>
<div className="col-sm-2">
<label class="labell2"> Experience</label>
</div>
<div className="col-sm-4">
            <input type="text"
            class="form-control"
            placeholder="Enter the Experience"
            onChange={this.handleChange}
            value={this.state.overall_exp}
            name="overall_exp"/>
</div>
<div className="col-sm-3"> <span class="errormsg">{this.state.erroroverall_exp}</span> </div>
</div>



<div class="row form-group">
    <div className="col-sm-3"></div>
    <div className="col-sm-6">
    <button type="button"
    style={{width:'100%'}} 
    onClick={ ButtonName1 === true ? this.submit : this.Update  }
    class="btn btn-primary m-t-15 waves-effect">
        {ButtonName1 === true ? "Add Driver" : "Update Driver" }
        </button>
    </div>
    <div className="col-sm-3"></div>
    </div>

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

export default AddDrivers;