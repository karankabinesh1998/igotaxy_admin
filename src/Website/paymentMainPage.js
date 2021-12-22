import React, { Component } from 'react';
import PaymentPage from './paymentPage';
import Bridge from '../Middleware/bridge';

export default class paymentMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToken: null,
      amountUser: 0,
      userDetails: [{username:'aravi',email_id:'aravi@gmail.com',mobile:'9962181144',address:'aslsah'}]
    }
  }
  async componentDidMount() {
    const result = await Bridge.getFreedom(
      `address,alternate_mobile,email_id,login_token,mobile,username`,
       `tbl_user_web`, `login_token = '${this.props.match.params.loginToken}'`, 1, 1,this.props.match.params.loginToken
    );
    // console.log(this.props.match.params);  
    if (result.data.length) {
      this.setState({
        loginToken: this.props.match.params.loginToken,
        amountUser: this.props.match.params.amountUser,
        userDetails: result.data
      });
    }
    // const data = await PaymentPage.
  }
  render() {
    return (
      <div>
        {this.state.userDetails.length ? <PaymentPage loginToken={this.props.match.params.loginToken} amountUser={this.props.match.params.amountUser} userDetails={this.state.userDetails} /> :<div><h3>Oops! Sorry link expired </h3></div>}
      </div>
    )
  }
}
