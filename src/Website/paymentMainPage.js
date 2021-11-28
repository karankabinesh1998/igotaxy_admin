import React, { Component } from 'react';
import PaymentPage from './paymentPage';

export default class paymentMainPage extends Component {
  constructor(props){
    super(props);
    this.state={
      loginToken:null,
      amountUser:0
    }
  }
  async componentDidMount(){
      // console.log(process.env.REACT_APP_TESTRAZORPAY_SECRET)

      this.setState({
        loginToken : this.props.match.params.loginToken,
        amountUser:this.props.match.params.amountUser
      })
  }
  render() {
    return (
      <div>
        <PaymentPage loginToken={this.state.loginToken} amountUser={this.state.amountUser} />
      </div>
    )
  }
}
