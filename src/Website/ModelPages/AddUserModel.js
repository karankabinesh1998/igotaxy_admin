import React from 'react';
import Bridge from '../../../Middleware/bridge';
import { Alert } from "reactstrap";
import '../style1.css';


class AddUserModel extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                username:"",
                mobile:"",
                email_id:"",
                country:"",
                state:"",
                password:"",
                confirmpassword:"",
                Button:"Add Customer"
            }
        }
    }

    handleChange=async(e)=>{

        this.setState({[e.target.name]: e.target.value })
    }



    async componentWillReceiveProps(props){

        console.log(this.props);
        this.setState({
            Button : this.props.Button
        })
    }

    async componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <div>
             <div class="form-group">
            <label  class="labell" >Username</label>
            <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input type="text"
                class="form-control"
                placeholder="Enter the name"
                onChange={this.handleChange}
                name="username"/>
            </div>
            </div>

    <div class="row form-group">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        <button type="button" style={{width:'100%'}} class="btn btn-primary m-t-15 waves-effect">{this.state.Button}</button>
    </div>
    <div className="col-sm-2"></div>
    </div>

</div>
        )
    }
}


export default AddUserModel ;