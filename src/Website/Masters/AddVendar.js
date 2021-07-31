import React from 'react';
import Bridge from '../../Middleware/bridge';
import { Alert } from "reactstrap";
import {ACCESS_POINT} from '../../config/index';
import http from "../../Middleware/http";
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import '../style1.css';
// import '../../../Component/loader.css'
import ModelWindow from "../../Component/Model";
import Adddocument from '../ModelPages/Adddocument';
import ViewDocument from '../ModelPages/Viewdocument'
// import Progress from '../../Component/Progress';




class AddVendar extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                Data:[],
                Userdetails : JSON.parse(localStorage.getItem("Userdetails")),
                alertVisible: false,
                formAlertdelete: false,
                textALert:"",
                color:"",
                file:"",
                filename:"",
                ButtonTitle : "Add Vendar",
                ButtonName : "Submit",
                docummentfiles:[
                    {name:"Driving License",Ptype:"dl",document:[{type:"front",file:null},{type:"back",file:null}]},
                    {name:"Aadhar Card Proof",Ptype:"pn",document:[{type:"front",file:null},{type:"back",file:null}]}
                ],
                documentData:[],
                column: [
                    {
                      Header: "Name",
                      accessor: "username"
                    },
                    {
                      Header: "Mobile",
                      accessor: "mobile",
                     //Cell: (d) => this.Image(d),
                    },
                    // {
                    //     Header:"Email Id",
                    //     accessor:"email_id"
                    // },
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
                        
                        Header:"Add Document",
                        accessor:"status",
                        Cell: (d) => this.AddDocument(d),
                     },
                     {
                        
                      Header:"View Document",
                      accessor:"status",
                      Cell: (d) => this.ViewDocument(d),
                   },
                      {  
                     Header:"Approval",
                     accessor:"status",
                     Cell: (d) => this.Approvalstatus(d),
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
                userdata:[],
                ButtonName1:true,
                docdata:null,
                DocFile:[],
                ViewDocumentstate:{}

            }

        }
    }


    Approvalstatus = (d)=>{
     /// console.log(d)
        if(d.original.approval == 0 ){
          return (
            <center>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.Approvedstatus(d)}
          >
            Waiting Approval 
          </button>
          </center>
        );
        }else if(d.original.approval == 1){

          return (
            <center>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.Approvedstatus(d)}
          >
            Approved
          </button>
          </center>
        );

        }
    }

    Approvedstatus = async(e)=>{

      let value = e.original.approval;
       let id = e.original.venid;
       let index = e.index;
       const previousData = [...this.state.Data];
       console.log(this.state.Userdetails)
       let arr = {};
        arr.approvedby = this.state.Userdetails[0].id;

       if(value === 0){
        
       
        arr.approval = 1;

       }else{

        arr.approval = 0;
       }

       //let 

      try{

        swal({
          title: "Are you sure?",
          text: "Do you want to approve this vendor?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async(willDelete) => {

          if (willDelete) {
        const Update = await Bridge.updateMaster("tbl_vendar_documents",id,arr);

        previousData[index].approval = arr.approval;

        if(Update){
           this.setState({
             Data:previousData
           })
           swal("Vendor is successfully approved!");
        }

      }else{

        swal("Approval has been cancelled!");
        
      }



      });

      }catch(error){
        console.log(error);
      }

    }

    AddDocument = (d)=>{
        return (
            <center>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#adddoc"
            onClick={() => this.documentState(d)}
          >
            Add Document
          </button>
          </center>
        );
    }

    ViewDocument = (d)=>{

     if(d.original.userid==null){

      return (
        <center>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#viewdoc"
        disabled={true}
      //  onClick={() => this.ViewDocumentstate(d)}
      >
        View Document
      </button>
      </center>
    );

     }else{
      return (
        <center>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#viewdoc"
        onClick={() => this.ViewDocumentstate(d)}
      >
        View Document
      </button>
      </center>
    );
     }

    }

    ViewDocumentstate = async(e)=>{
        console.log(e.original)
       // console.log(this.state.Data);
      this.setState({
        ViewDocumentstate : e.original,
        Index : e.index
      })

    }

    documentState=async(e)=>{
         console.log(e)
            let d = e.original;
            this.state.docummentfiles[0].document[0].file = d.driving_licence_front;
            this.state.docummentfiles[0].document[1].file = d.driving_licence_back;
            this.state.docummentfiles[1].document[0].file = d.aadhar_front;
            this.state.docummentfiles[1].document[1].file = d.aadhar_back;
        
        this.setState({
            docdata : e.original,
            Index : e.index
        })

       // await this.ExisDocument(e.original.id)
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

       if(value === 1){
        
       
        arr.status = 0

       }else{

        arr.status = 1
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

      edition = async(e)=>{
        let value = e.original;
        console.log(value);
          this.setState({
              userdata : e.original,
              ButtonStatus:"Update",
              ButtonName1:false,
              username : value.username,
              mobile:value.mobile,
              email_id:value.email_id,
              password:value.password,
              EditId:value.id,
              Index : e.index,
              filename :value.profile_dp,
          })
      }

    async componentDidMount(){
        try{
          //console.log(this.state.Userdetails)
            const result = await Bridge.getFreedom(
                `*`,
                `tbl_user_web`,
                `userType = 3`,
                1,
                `id DESC`,
            )

            if(result.data){
                this.setState({
                    Data : result.data
                })
            }

            let result1 = await Bridge.getFreedom(
              "*",
              `tbl_vendar_documents`,
               1,
                1,
               1
            )
            if(result1.data.length){
             
             //let d = result1.data[0] ;
             //this.state.docummentfiles[0].document[0].file = d.driving_licence_front;
            //this.state.docummentfiles[0].document[1].file = d.driving_licence_back;
            //this.state.docummentfiles[1].document[0].file = d.aadhar_front;
            //this.state.docummentfiles[1].document[1].file = d.aadhar_back;
            
         
            let wait = await result.data.map((jval,j)=>{
              result.data[j].userid = null;
              result.data[j].driving_licence_front =null;
              result.data[j].driving_licence_back = null;
              result.data[j].aadhar_front = null;
              result.data[j].aadhar_back = null ;
              result.data[j].venid = null;
              result.data[j].approval = 0 ;
                 result1.data.map((ival,i)=>{
               
                  if(jval.id == ival.userid){
                    result.data[j].venid = ival.id;
                    result.data[j].userid = ival.userid; 
                    result.data[j].approval = ival.approval == null ? 0 : ival.approval;
                    result.data[j].driving_licence_front = ival.driving_licence_front;
                    result.data[j].driving_licence_back = ival.driving_licence_back;
                    result.data[j].aadhar_front = ival.aadhar_front;
                    result.data[j].aadhar_back = ival.aadhar_back;

                  }
              })
            })

            await Promise.all(wait);

             // console.log(result.data);
                 
              this.setState({
                DocFile : result1.data,
                Data :  result.data
              })
              
            }


        }catch(error){
            console.log(error);
        }
    }

    onDismiss = () => {
        this.setState({ alertVisible: false });
        this.setState({ formAlertdelete: false });
      };
    
      handleChangeFile = async(e)=>{
        // console.log(e.target.files[0])
        this.setState({file:e.target.files[0],filename:e.target.files[0].name})
      }

    AddCustomers = async()=>{
        this.setState({
            ButtonStatus:"Add Vendar",
            ButtonName1:true,
            errorusername:"",
            errorconfirmpass:"",
            errormobile:"",
            errorpassword:"",
            erroremail:"",
            username:"",
            email_id:"",
            mobile:"",
            password:"",
            confirmpassword:"",
            file:"",
            filename:""
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
          const {  username , mobile , Userdetails, email_id , password ,confirmpassword } =this.state;
            
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
          // formData.append("name",username);
          formData.append("mobile",mobile);
          formData.append("email_id",email_id);
          formData.append("password",password);
          formData.append("customerid",Userdetails[0].id);
          formData.append("userType",3);
          formData.append("login_status",0);
          formData.append("status",1);
          formData.append("profile_dp",this.state.file)
          // formData.append("file",this.state.file);
    
        try{
    
            const submit = await Bridge.AddUser(formData);
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

      handleChange = async(e)=>{
        this.setState({ [e.target.name] : e.target.value })
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
    
        // let arr={};
        // arr.username=username;
        // // arr.name = username;
        // arr.email_id=email_id;
        // arr.password=password;
        // arr.profile_dp=this.state.file;
        //   // arr.file = this.state.file;
        // arr.mobile=mobile;

        const formData=new FormData();
          formData.append("username",username);
          // formData.append("name",username);
          formData.append("mobile",mobile);
          formData.append("email_id",email_id);
          formData.append("password",password);
          formData.append("profile_dp",this.state.file)
          // formData.append("file",this.state.file);
     
        try{
          console.log([...formData])
            const Update = await Bridge.updateUser("tbl_user_web",formData,EditId);
            if(Update){
                
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

      FileChange = async(e,i,j,type)=>{
          const { docummentfiles , documentData } = this.state;
        //console.log(a)
        //console.log(e.target.files[0]);
      //  let documentData =[];
        
        this.state.docummentfiles[i].document[j].file = e.target.files[0].name;
        documentData.push({ [e.target.files[0].name]: e.target.files[0] });
        
        //console.log(documentData)

        this.setState({
            documentData,

        })

    }

    AddDoucment=async()=>{
        const{ documentData,docdata, docummentfiles } = this.state;

        console.log(docdata)
        const formData=new FormData();
        formData.append("username",docdata.username)
        formData.append( "userid" ,docdata.id );
        formData.append("approval",0)
          formData.append("driving_licence_front",docummentfiles[0].document[0].file);
          formData.append("driving_licence_back",docummentfiles[0].document[1].file);
          formData.append("aadhar_front",docummentfiles[1].document[0].file);
          formData.append("aadhar_back",docummentfiles[1].document[1].file);


        documentData.map((ival, i) => {
			let a = Object.keys(ival)[0];
			formData.append(a, ival[a])
		});
          
        try{

          console.log([...formData])
            // const Update = await Bridge.VendarDocument(formData);
            // if(Update){
            //     let values = Update.data.body;

            //     //-this.

            // }

            if(docdata.userid == null){

            let { data } = await http.post(
              ACCESS_POINT + `/admin/VendarDocument`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                onUploadProgress: progressEvent => {
                  this.setState({
                    uploadPercentage: parseInt(
                      Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                  });
                  setTimeout(() => this.setState({ uploadPercentage: 0 }), 3000);
                  ///10000
                }
              }
            );

            if(data){
              let newData = [...this.state.Data];
              newData[this.state.Index].driving_licence_front = docummentfiles[0].document[0].file;
              newData[this.state.Index].driving_licence_back = docummentfiles[0].document[1].file;
              newData[this.state.Index].aadhar_front = docummentfiles[1].document[0].file;
              newData[this.state.Index].aadhar_back = docummentfiles[1].document[1].file;

              
              this.state.docdata.driving_licence_front = docummentfiles[0].document[0].file;
              this.state.docdata.driving_licence_back = docummentfiles[0].document[1].file
              this.state.docdata.aadhar_front =  docummentfiles[1].document[0].file;
              this.state.docdata.aadhar_back =  docummentfiles[1].document[1].file;
              this.setState({
                docummentfiles:[
                  {name:"Driving License",Ptype:"dl",document:[{type:"front",file:null},{type:"back",file:null}]},
                  {name:"Aadhar Card Proof",Ptype:"pn",document:[{type:"front",file:null},{type:"back",file:null}]}
                ],
                alertVisible:true,
                color:"success",
                textALert:"Successfully Uploaded Documents",
                Data : newData
              })

              setTimeout(() => this.setState({ alertVisible: false ,textALert:""}), 3000);
            }
          
          }else{

            

            let { data } = await http.post(
              ACCESS_POINT + `/admin/UpdateVendarDocument/tbl_vendar_documents/${docdata.venid}`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                onUploadProgress: progressEvent => {
                  this.setState({
                    uploadPercentage: parseInt(
                      Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )
                  });
                  setTimeout(() => this.setState({ uploadPercentage: 0 }), 2000);
                  ///10000
                }
              }
            );

            if(data){
              console.log(data);
              let newData = [...this.state.Data];
              newData[this.state.Index].driving_licence_front = docummentfiles[0].document[0].file;
              newData[this.state.Index].driving_licence_back = docummentfiles[0].document[1].file;
              newData[this.state.Index].aadhar_front = docummentfiles[1].document[0].file;
              newData[this.state.Index].aadhar_back = docummentfiles[1].document[1].file;

              
              this.state.docdata.driving_licence_front = docummentfiles[0].document[0].file;
              this.state.docdata.driving_licence_back = docummentfiles[0].document[1].file
              this.state.docdata.aadhar_front =  docummentfiles[1].document[0].file;
              this.state.docdata.aadhar_back =  docummentfiles[1].document[1].file;

              this.setState({
                docummentfiles:[
                  {name:"Driving License",Ptype:"dl",document:[{type:"front",file:null},{type:"back",file:null}]},
                  {name:"Aadhar Card Proof",Ptype:"pn",document:[{type:"front",file:null},{type:"back",file:null}]}
                ],
                alertVisible:true,
                color:"success",
                textALert:"Successfully Uploaded Documents",
                Data : newData
              })

              setTimeout(() => this.setState({ alertVisible: false ,textALert:""}), 3000);
            }
              
          }
        }catch(error){
            console.log(error)
        }
        console.log([...formData])
    }

    render(){
        const {ButtonTitle ,uploadPercentage, ButtonName ,ButtonName1} = this.state;
     
        return(
                    <React.Fragment>

                <div class="main-content">
                <ModelWindow  
                ButtonTitle = "Add Document"
                ButtonName = "Add Document"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "adddoc"
                ButtonBody = {
                     <Adddocument
                      data ={this.state.docdata}
                      docummentfiles={this.state.docummentfiles} 
                      AddDoucment={this.AddDoucment}
                      uploadPercentage={uploadPercentage}
                      handleChangeFile={this.FileChange} /> }
                />

             <ModelWindow  
                ButtonTitle = "View Document"
                ButtonName = "View Document"
                indexStyle={{color:"black",fontWeight: '500'}}
                id = "viewdoc"
                ButtonBody = {
                  <ViewDocument  data ={this.state.docdata} ViewDocumentstate = {this.state.ViewDocumentstate}  />
                     }
                />

                <ModelWindow  
                ButtonTitle = {ButtonTitle}
                ButtonName = {ButtonName}
                id = "addvendar"
                ButtonBody = {
                 <React.Fragment>
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
            <label  class="labell" >Profile Image</label>
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
                 {ButtonName1 === true ? "Add Vendar" : "Update Vendar" }
                 </button>
            </div>
            <div className="col-sm-2"></div>
            </div>
                 </React.Fragment>
                }/>

                <section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>Vendars</h3>
                </div>
                <div class="card-header">
                <button type="button"
                class="btn btn-primary" 
                data-toggle="modal"
                onClick={this.AddCustomers}
                data-target="#addvendar">
                    Add Vendar 
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
    }
}

export default AddVendar;