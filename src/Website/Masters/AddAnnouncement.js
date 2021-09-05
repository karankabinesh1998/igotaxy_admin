import React from 'react';
import Bridge from '../../Middleware/bridge';
import { Alert } from "reactstrap";
import {ACCESS_POINT} from '../../config/index';
import Datatable from "../../Component/Datatable/Datatable";
import swal from 'sweetalert';
import '../style1.css';

class AddAnnouncement extends React.Component
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
                        Header: "Title",
                        accessor: "title"
                      },
                      {
                        Header: "Description",
                        accessor: "description"
                      },
                      {
                          Header:'Image',
                          accessor:'images',
                          Cell:(d)=>this.GetImage(d)
                      },
                      {
                        Header: "Url",
                        accessor: "url"
                      },
                      {
                        Header: "Delete",
                        accessor: "delete",
                        Cell: (d) => this.delete(d),
                      },
                ],
                ButtonName1:true,
                title:"",
                description:"",
                images:"",
                url:"",
                filename:'',
                errortitle:'',
                Userdetails : JSON.parse(localStorage.getItem("Userdetails")),

            }

        }

    }

    GetImage=(e)=>{
        
        return(
            <img style={{width:'50%',height:'50px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${e.original.images}/${e.original.admin_id}`} />
        )
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
                text: "Once deleted, you will not be able to recover this Data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then(async(willDelete) => {
               
                if (willDelete) {
                    const result = await Bridge.deleteMaster(
                        "tbl_announcement",
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
        try {

            let result = await Bridge.getFreedom(
                `*`,
                `tbl_announcement`,
                `status=1`,
                1,
                `id DESC`
            )
            if(result.data.length){
                this.setState({
                    Data : result.data
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

        handleChangeFile = async(e)=>{
            console.log(e.target.files[0])
            this.setState({images:e.target.files[0],filename:e.target.files[0].name})
          }

          submit=async()=>{
                const { title,description,url,images }=this.state;

                if(!title){
                    this.setState({
                        errortitle:"Please Fill the field"
                    })
                    return false
                }else{
                    this.setState({
                        errortitle:""
                    })
                }

                if(!description){
                    this.setState({
                        errordescription:"Please Fill the field"
                    })
                    return false
                }else{
                    this.setState({
                        errordescription:""
                    })
                }

                try {

                    const formData=new FormData();
                    formData.append("title",title);
                    formData.append("description",description);
                    formData.append("url",url);
                    formData.append("images",images);

                    let result = await Bridge.Add_Announcement(formData,this.state.Userdetails[0].id)

                    if(result){
                        console.log(result);

                        this.setState({
                            Data:result.data
                        })
                    }
                    
                } catch (error) {
                    console.log(error);
                }

          }

   render(){
    const { ButtonName1 } =this.state;
    return(
        <React.Fragment>
         <div class="main-content">
         <section class="section">
            <div class="section-body">
            <div class="row">
            <div class="col-12">
            <div class="card">
            <div class="card-header">
            <h3>Announcement</h3>
            </div>
           
            <div class="card-body">

            <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Enter the Title</label>
                </div>
                <div className="col-sm-4">
                <input type="text"
                class="form-control"
                placeholder="Enter the Title"
                onChange={this.handleChange}
                value={this.state.title}
                name="title"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errortitle}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Description</label>
                </div>
                <div className="col-sm-4">
                <textarea id="w3review" 
                    name="description"
                 value={this.state.description}
                 rows="4" cols="38"
                 onChange={this.handleChange}
                 >

                </textarea>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errordescription}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Enter the URL</label>
                </div>
                <div className="col-sm-4">
                <input type="text"
                class="form-control"
                placeholder="https://example.com/"
                onChange={this.handleChange}
                value={this.state.url}
                name="url"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorname}</span> </div>
                </div>

                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Upload Image</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="file"
                    className="custom-file-input"
                    onChange={this.handleChangeFile}
                    accept="image/*"
                    />
                    <label className="custom-file-label" htmlFor="customFileThumbnail">
                    {this.state.filename ? this.state.filename.substring(0, 20) : null}
                    </label>
                </div>
                <div className="col-sm-3"> <span class="errormsg">{this.state.errorname}</span> </div>
                </div>

            <div class="row form-group">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <button type="button"
            style={{width:'100%'}} 
            onClick={ ButtonName1 === true ? this.submit : this.Update  }
            class="btn btn-primary m-t-15 waves-effect">
                {ButtonName1 === true ? "Add Announcement" : "Update Announcement" }
                </button>
            </div>
            <div className="col-sm-4"></div>
            </div>

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

export default AddAnnouncement;