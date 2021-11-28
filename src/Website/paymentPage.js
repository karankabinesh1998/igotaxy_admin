import React from "react";
import logo from "./ad_logo.jpg";
import "./App.css";
import "./style1.css"
import http from "../Middleware/http";
import { ACCESS_POINT } from '../config';


function paymentPage({ loginToken, amountUser }) {
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

    formdata.append("login_token", loginToken)
    formdata.append("amount", amountUser)
    // const result = await axios.post("http://localhost:5001/admin/payment");
    const result = await http.post(`${ACCESS_POINT}/admin/payment`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { id: order_id, currency } = result.data;

    const options = {
      key: `${process.env.REACT_APP_TESTRAZORPAY_KEY_ID}`, // Enter the Key ID generated from the Dashboard
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
        // console.log(data);
        const result = await await http.post(`${ACCESS_POINT}/admin/payment/success`, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(result);
        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#ce3232",
      },
    };
    console.log(options, "options")
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Recharge your wallet! Get More Trips !</p>
        <button className="btn btn-success" onClick={displayRazorpay}>
          Pay ₹{amountUser}
        </button>
      </header>
    </div>

  );
}

export default paymentPage;