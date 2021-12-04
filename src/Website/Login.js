import React, { Component } from 'react';
import { Alert } from "reactstrap";
import Bridge from '../Middleware/bridge';

class LoginPage extends Component {
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
            
                username:"",
                password:"",
                errorusername:"",
                errorpassowrd:"",
                Userdetails : JSON.parse(localStorage.getItem("Userdetails")) == null ? [] : JSON.parse(localStorage.getItem("Userdetails")) ,
                alertVisible: false,
                formAlertdelete: false,
                textALert:"",
                color:"",
             
            }
           // this.submit = this.submit.bind(this);
        }
    }


    async componentDidMount(){
        // console.log(this.state.Userdetails);
         if(this.state.Userdetails.length && this.state.Userdetails !== null ){
             window.location.href='/dashboard';
         }
   }
   
   
       handlechange=async(e)=>{
          // console.log(e.target.value);
           this.setState({[e.target.name]:e.target.value})
           if([e.target.name] == "username" ){
              this.setState({errorusername:""})
           }else if([e.target.name]=="password"){
             this.setState({errorpassowrd:""})
           }
       }
   
       onDismiss = () => {
         this.setState({ alertVisible: false });
         this.setState({ formAlertdelete: false });
       };
   
       ValidateEmail=async(mail) =>{
         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
         {
             return 1
         }else{
             return 0
         }
         }


   
  submit = async () => {
    // alert(1);
    const { username, password, errorusername, errorpassowrd } = this.state;
    let mailcheck = await this.ValidateEmail(username);
    //  console.log(mailcheck)
    if (!username) {
      this.setState({ errorusername: "Please fill in your email" })
      return false
    } else if (mailcheck == 0) {
      this.setState({ errorusername: "Please Enter your Valid email" })
      return false
    }
    else {
      this.setState({ errorusername: "" })
    } 

    if (!password) {
      this.setState({ errorpassowrd: "please fill in your password" })
      return false;
    } else {
      this.setState({ errorpassowrd: "" })
    }

    const formData = new FormData();

    formData.append("email_id", username);
    formData.append("password", password);
    let result = await Bridge.LoginAdmin(formData);
    if (result.data.length) {
      localStorage.setItem("Userdetails", JSON.stringify(result.data));
      localStorage.setItem("token",result.data[0].login_token)
      console.log(result.data)
      window.location.href = '/dashboard';
    } else if (result.data == false) {
      this.setState({
        alertVisible: true,
        color: "danger",
        textALert: "Wrong Email or Password"
      })
      setTimeout(() => this.setState({ alertVisible: false }), 3000);
    }
  }
   
       submitEnter= async(e)=>{
         if (e.key === 'Enter') {
         this.submit()
         }
       }



  render() {
    const{ errorusername , errorpassowrd , color , textALert,alertVisible } =this.state;

    return(
        <React.Fragment>
           
            <section class="section">
           <br/>
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
                <br/>
 <h1 style={{marginTop: '1%',textAlign: 'center',color:'black',fontWeight:'200'}}>igoTaxy</h1>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <div class="card card-primary">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <div>
              <div class="form-group">
                <label for="email">Email</label>
                    <input id="email"
                    type="email" 
                    class="form-control"
                    name="username"
                    tabindex="1"
                    value={this.state.username}
                    onChange={this.handlechange}
                    required
                    autofocus/>
                <div class="invalid-feedback">
                  {errorusername}
                </div>
              </div>
              <div class="form-group">
                <div class="d-block">
                  <label for="password" class="control-label">Password</label>
                  <div class="float-right">
                    <a href="auth-forgot-password.html" class="text-small">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input 
                id="password" 
                type="password" 
                class="form-control" 
                name="password" 
                value={this.state.password}
                onChange={this.handlechange}
                tabindex="2"
                onKeyPress={(e)=>this.submitEnter(e)}
                 required/>
                <div class="invalid-feedback">
                  {errorpassowrd}
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                </div>
              </div>
              <div class="form-group">
                <button type="submit"   onClick={this.submit} class="btn btn-primary btn-lg btn-block" tabindex="4">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 text-muted text-center">
        </div>
      </div>
    </div>
  </div>
</section>
        </React.Fragment>
    )

} 
}

export default LoginPage;