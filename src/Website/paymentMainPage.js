import React, { Component } from 'react';
import PaymentPage from './paymentPage';
import Bridge from '../Middleware/bridge';

export default class paymentMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToken: null,
      amountUser: 0,
      userDetails: []
    }
  }
  async componentDidMount() {
    const result = await Bridge.getFreedom(
      `*`, `tbl_user_web`, `login_token = '${this.props.match.params.loginToken}' and status = 1`, 1, 1
    );
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
        {this.state.userDetails.length ? <PaymentPage loginToken={this.state.loginToken} amountUser={this.state.amountUser} userDetails={this.state.userDetails} /> :<div><h3>Oops! Sorry link expired </h3></div>}
      </div>
    )
  }
}
