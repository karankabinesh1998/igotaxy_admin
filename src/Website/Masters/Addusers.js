import React from 'react';
import Bridge from '../../Middleware/bridge';
import { Alert } from "reactstrap";
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import '../style1.css';
// import '../../../Component/loader.css'
import ModelWindow from "../../Component/Model";
//import AddUserModel from '../ModelPages/AddUserModel';


class Addusers extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
            
                Userdetails : JSON.parse(localStorage.getItem("Userdetails")),
                alertVisible: false,
                formAlertdelete: false,
                textALert:"",
                color:"",
                ButtonTitle : "Add Customers",
                ButtonName : "Submit",
                column: [
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Mobile",
                      accessor: "mobile",
                     // Cell: (d) => this.Image(d),
                    },{
                        Header:"Email Id",
                        accessor:"email_id"
                    },
                    { 
                        Header:"login_status",
                        accessor:"login_status",
                        Cell: (d) => this.login_status(d),

                    },
                    {
                        
                      Header:"Status",
                      accessor:"status",
                      Cell: (d) => this.Status(d),
    
                       
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
                Data:[],
                ButtonName1:true,
                username:"",
                mobile:"",
                email_id:"",
                country:"",
                state:"",
                password:"",
                confirmpassword:"",
                EditId:null,
                Index:null,
                erroremail:"",
                errorusername:"",
                errormobile:"",
                errorpassword:"",
                errorconfirmpass:"",
                file:"",
                filename:""

            }
        }
    }

    Status = (d)=>{
        let value = d;

        if(d.original.status === "active"){
         
            return (
                <center>
                  <button
                    type="button"
                    className="btn btn-info"
                     onClick={() => this.StatusChange(value)}
                  >
                    Active
                  </button>
                </center>
              );

        }else{

            return (
                <center>
                  <button
                    type="button"
                    className="btn btn-danger"
                     onClick={() => this.StatusChange(value)}
                  >
                    Inactive
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

       if(value === "active"){
        
       
        arr.status = "inactive"

       }else{

        arr.status = "active"
       }

       //let 

      try{

        const Update = await Bridge.updateMaster("tbl_user_web",id,arr);

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

    edit = (d) => {
        let value = d;
        return (
          <center>
            <button
              type="button"
              className="btn btn-info"
              data-toggle="modal"
               data-target="#adduser"
               onClick={() => this.edition(value)}
            >
              Edit
            </button>
          </center>
        );
      };



      edition =async(e)=>{
         
          let value = e.original;

          console.log(e);

          this.setState({
            ButtonName1:false,
            ButtonTitle : "Update Customers",
            ButtonName : "Update",
            username : value.username,
            mobile:value.mobile,
            email_id:value.email_id,
            password:value.password,
            EditId:value.id,
            Index : e.index
           
          })
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

    const previousData = [...this.state.Data];
    // Seperating data row using row-index
    const getData = { ...previousData[value.index] };

    //getting id on that data
    const id = getData.id;
    //removing specific id in previous state data
    const Data = previousData.filter((delelteid) => delelteid.id !== id);

    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Customer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async(willDelete) => {
           
            if (willDelete) {
                const result = await Bridge.deleteMaster(
                    "tbl_user_web",
                    id
                  );
                  if (result) {
                      console.log(result);
                    this.setState({ Data });
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
      this.setState({ data: previousData });
      console.log(error);
    }
    
}

async componentDidMount(){
    try{
    let result = await Bridge.getFreedom(
        "*",
        "tbl_user_web",
        `userType = 4`,
        1,
        `id DESC`,
    );
    if(result.data.length){
        this.setState({Data:result.data})
    }else{
      this.setState({Data:[]})
    }
}catch(error){
    console.log(error);
}
   //console.log(result);
}    


login_status = (e)=>{
    //console.log()
    if(e.original.login_status == 0){
        return(
            <center>
            <button type="button" disabled={true} className="btn btn-warning" >Inactive</button>
            </center>
        )
    }else{
        return(
            <center>
            <button type="button" className="btn btn-info" >active</button>
            </center>
        )
    }
}

handleChange = async(e)=>{
    this.setState({ [e.target.name] : e.target.value })
}


  AddCustomers =async()=>{
      this.setState({
        ButtonName1:true,  
        ButtonTitle : "Add Customers",
        ButtonName : "Submit",
        errorusername:"",
        errorconfirmpass:"",
        errormobile:"",
        errorpassword:"",
        erroremail:"",
        username:"",
        email_id:"",
        mobile:"",
        password:"",
        confirmpassword:""
       // ButtonName1:"Add Customers"
      })
  }


  ValidateEmail=async(mail) =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return 1
    }else{
        return 0
    }
    }

  submit = async(e)=>{
      const {  username , mobile , email_id , password ,confirmpassword } =this.state;
        
      let mailcheck = await this.ValidateEmail(email_id);

      if(!username){
          this.setState({errorusername:"Enter the name"})
          return false
      }else if(!mobile){
        this.setState({errormobile:"Enter the mobile number"})
        return false
      }else if(!email_id){
          this.setState({erroremail:"Enter the email id"})
          return false
      }else if(mailcheck==0){
        this.setState({erroremail:"Enter the valid email id"})
        return false
      }else if(!password){
        this.setState({errorpassword:"Enter the password"})
        return false
      }else if(!confirmpassword){
        this.setState({errorconfirmpass:"Enter the confirm password"})
        return false
      }else{
        this.setState({
          errorusername:"",
          errorconfirmpass:"",
          errormobile:"",
          errorpassword:"",
          erroremail:""
        })
      }

      if(password !== confirmpassword){
          alert("wrong pass")
          return false
      }

      const formData=new FormData();
      formData.append("username",username);
      formData.append("name",username);
      formData.append("mobile",mobile);
      formData.append("email_id",email_id);
      formData.append("password",password);
      formData.append("userType",4);
      formData.append("login_status",0);
      formData.append("status","active");
      // formData.append("profile_pic",this.state.filename)
      formData.append("profile_pic",this.state.file);

    try{

        const submit = await Bridge.AddUser("tbl_user_web",formData);
        if(submit.data == false){
          this.setState({
           erroremail :"Email Id already Exist"
            // Data : newData
 
        })
       // setTimeout(() => this.setState({ alertVisible: false ,textALert:""}), 3000);

        }else if(submit){
          // console.log(submit)
           let arr={};
           arr.username=username;
           arr.name = username;
           arr.status='active';
           arr.email_id=email_id;
           arr.mobile=mobile;
           arr.password=password;
           arr.confirmpassword=confirmpassword;
           arr.login_status =0;
           arr.id= submit.insertId;
           arr.profile_pic = submit.profile_pic;
          // arr.files = filename ;
           let newData = [arr,...this.state.Data];
          this.setState({
              username:'',
              password:"",
              confirmpassword:"",
              mobile:"",
              email_id:"",
              alertVisible:true,
              color:"success",
              textALert:"Successfully added Customer",
              Data : newData
   
          })
          setTimeout(() => this.setState({ alertVisible: false ,textALert:""}), 3000);
        }

    }catch(error){
        console.log(error)
    }
    //  console.log([...formData])

  }

  Update = async()=>{
 
    const {  username , mobile , email_id , password ,confirmpassword ,EditId , Index } =this.state;


    let mailcheck = await this.ValidateEmail(email_id);

    if(!username){
        this.setState({errorusername:"Enter the name"})
        return false
    }else if(!mobile){
      this.setState({errormobile:"Enter the email id"})
      return false
    }else if(!email_id){
        this.setState({erroremail:"Enter the email id"})
        return false
    }else if(mailcheck==0){
      this.setState({erroremail:"Enter the valid email id"})
      return false
    }else if(!password){
      this.setState({errorpassword:"Enter the password"})
      return false
    }else if(!confirmpassword){
      this.setState({errorconfirmpass:"Enter the confirm password"})
      return false
    }else{
      this.setState({
        errorusername:"",
        errorconfirmpass:"",
        errormobile:"",
        errorpassword:"",
        erroremail:""
      })
    }


    if(password !== confirmpassword){
        alert("wrong pass")
        return false
    }

    let arr={};
    arr.username=username;
    arr.name = username;
    arr.email_id=email_id;
    arr.password=password;
    //arr.confirmpassword=confirmpassword;
    arr.mobile=mobile;
 
    try{
        const Update = await Bridge.updateMaster("tbl_user_web",EditId,arr);
        if(Update){
            console.log(Update)
            let newData = [...this.state.Data];
            newData[Index].username = username;
            newData[Index].name = username;
            newData[Index].email_id = email_id;
            newData[Index].password = password;
            newData[Index].mobile = mobile;

            this.setState({
                username:'',
                password:"",
                confirmpassword:"",
                mobile:"",
                email_id:"",
                alertVisible:true,
                color:"success",
                textALert:"Successfully updated Customer",
                Data : newData
     
            })
            setTimeout(() => this.setState({ alertVisible: false ,textALert:""}), 3000);
        }


    }catch(error){
        console.log(error)
    }
  }


  onDismiss = () => {
    this.setState({ alertVisible: false });
    this.setState({ formAlertdelete: false });
  };

  handleChangeFile = async(e)=>{
    console.log(e.target.files[0])
    this.setState({file:e.target.files[0],filename:e.target.files[0].name})
  }

render(){
    
  const {ButtonTitle , ButtonName ,ButtonName1} = this.state;
  //console.log(this.state.Data)
  // if(this.state.Data.length == 0){
  //   return(
  //     <React.Fragment>
  //        <div class="main-content">
  //       <section class="section">
  //         <div class="section-body">
  //         <div class="loader">Loading...</div>
  //         </div>
  //       </section>
  //       </div>
        
  //     </React.Fragment>
  //   )
  // }else{

    return(
        <React.Fragment>
          <div class="main-content">
             
           <ModelWindow  
           ButtonTitle = {ButtonTitle}
           ButtonName = {ButtonName}
           id = "adduser"
           indexStyle={{color:"black",fontWeight: '500'}}
           ButtonBody = {

            <div>

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
            <label  class="labell" >Username</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="text"
                class="form-control"
                placeholder="Enter the name"
                onChange={this.handleChange}
                value={this.state.username}
                name="username"/>
             
            </div>
            <span id="spanid" >{this.state.errorusername}</span>  
            </div>

            <div class="form-group">
            <label  class="labell" >Mobile</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="text"
                maxLength={10}
                class="form-control"
                value={this.state.mobile}
                placeholder="Enter the Mobile"
                onChange={this.handleChange}
                name="mobile"/>
                 
            </div>
            <span id="spanid">{this.state.errormobile}</span>  
            </div>

            <div class="form-group">
            <label  class="labell" >Email Id</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="text"
                class="form-control"
                placeholder="Enter the Email Id"
                value={this.state.email_id}
                onChange={this.handleChange}
                name="email_id"/>
            </div>
            <span id="spanid">{this.state.erroremail}</span>
            </div>

            <div class="form-group">
            <label  class="labell" >File</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            {/* <input type="file"
                class="form-control"
                placeholder="Enter the Mobile"
                onChange={this.handleChangeFile}
                name="mobile"/> */}

          <input
              type="file"
              className="custom-file-input"
              onChange={this.handleChangeFile}
              accept="image/*"
            />
            <label className="custom-file-label" htmlFor="customFileThumbnail">
              {this.state.filename ? this.state.filename.substring(0, 15) : null}
            </label>
                 
            </div>
            <span id="spanid">{this.state.errormobile}</span>  
            </div>

            <div class="form-group">
            <label  class="labell" >Password</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="password"
                class="form-control"
                placeholder="Enter the Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"/>
            </div>
                 <span sid="spanid">{this.state.errorpassword}</span>  
            </div>


            <div class="form-group">
            <label  class="labell" >Confirm Password</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="password"
                class="form-control"
                placeholder="Enter the Confirm Password"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
                name="confirmpassword"/> 
            </div>
                 <span id="spanid">{this.state.errorconfirmpass}</span>  
            </div>

            <div class="row form-group">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
            <button type="button"
             style={{width:'100%'}} 
             onClick={ ButtonName1 === true ? this.submit : this.Update  }
             class="btn btn-primary m-t-15 waves-effect">
                 {ButtonName1 === true ? "Add Customer" : "Update Customer" }
                 </button>
            </div>
            <div className="col-sm-2"></div>
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
                    <h3>Customers</h3>
                  </div>
                  <div class="card-header">
                  <button type="button"
                   class="btn btn-primary" 
                   data-toggle="modal"
                   onClick={this.AddCustomers}
                    data-target="#adduser">
                     Add Customers 
                      </button>
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
                    // }
}

}

export default Addusers;