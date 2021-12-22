import React, { useEffect } from "react";
import logo from "./ad_logo.jpg";
import "./App.css";
import "./style1.css"
import http from "../Middleware/http";
import { ACCESS_POINT } from '../config';
import swal from "sweetalert";

function PaymentPage({ loginToken, amountUser , userDetails }) {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let formdata = new FormData();
    console.log(amountUser,'amm',loginToken,);
    formdata.append("login_token", loginToken)
    formdata.append("amount", amountUser);
    
    const result = await http.post(`${ACCESS_POINT}/admin/payment`, formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(result)
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { id: order_id, currency , amount } = result.data;

    const options = {
      key: `${process.env.REACT_APP_RAZORPAY_KEY_ID}`, // Enter the Key ID generated from the Dashboard
      amount: amountUser.toString(),
      currency: currency,
      name: "I Go Taxi",
      description: "vendor wallet recharge",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const formdata = new FormData();
        formdata.append("orderCreationId", order_id)
        formdata.append("razorpayPaymentId", response.razorpay_payment_id)
        formdata.append("razorpayOrderId", response.razorpay_order_id)
        formdata.append("razorpaySignature", response.razorpay_signature)
        formdata.append("login_token", loginToken)
        formdata.append("amount",amountUser)
        const result = await await http.post(`${ACCESS_POINT}/admin/payment/success`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(result,"result===>")
        if (result.data.msg == 'success') {
          swal({
            title: "Congratulations!",
            text: `your amount of Rs.${amountUser} has been successfully added to your wallet`,
            icon: "success",
            button: "Ok",
          });
          // window.location.href='igotaxi://app';
          window.location.replace('igotaxi://app');
        } else {
          swal(`Recharge failed , Try Again Later!!!!`)
          swal({
            title: "Sorry!",
            text: `your amount of Rs.${amountUser} has been Failed added.`,
            icon: "danger",
            button: "Ok",
          });
          window.location.replace('igotaxi://app')
        }
      },
      prefill: {
        name: userDetails[0].username,
        email: userDetails[0].email_id,
        contact: userDetails[0].mobile,
      },
      notes: {
        address: userDetails[0].address,
      },
      theme: {
        color: "#ce3232",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  useEffect(() => {
    
    return displayRazorpay();
  }, [])

  const goBackToApp =async()=>{
    window.location.replace('igotaxi://app');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Recharge your wallet! Get More Trips !</p>
        <button type="button" className="btn btn-success" onClick={goBackToApp}>
          Go Back To igotaxi Application
        </button>
      </header>
    </div>

  );
}

export default PaymentPage;