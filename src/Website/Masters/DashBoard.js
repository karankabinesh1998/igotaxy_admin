import { data } from 'jquery';
import moment from 'moment';
import React, { Component } from 'react'
import bridge from '../../Middleware/bridge';

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVendor:0,
      activeCustomer:0,
      activeTrips:0,
      totalAmount:0
    }
  };

  async componentDidMount(){
    try {
      const dashBoard = await bridge.DashBoardData();
      if(Object.keys(dashBoard.data).length){
        // console.log(dashBoard.data);
         this.setState({
           activeVendor : dashBoard?.data?.vendorCount?.[0]?.total,
           activeCustomer : dashBoard?.data?.customerCount?.[0]?.total,
           activeTrips:dashBoard?.data?.tripsCount,
           totalAmount:dashBoard?.data?.totalAmountRecieved?.[0]?.total ? dashBoard?.data?.totalAmountRecieved?.[0]?.total : 0
         })
      }
      // console.log(vendorCount);
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <React.Fragment>
        <div class="main-content">
          <section class="section">
          <div class="row ">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Active Vendors</h5>
                          <h2 class="mb-3 font-18">{this.state.activeVendor}</h2>
                          {/* <p class="mb-0"><span class="col-green">10%</span> Increase</p> */}
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="assets/img/banner/1.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15"> Active Customers</h5>
                          <h2 class="mb-3 font-18">{this.state.activeCustomer}</h2>
                          {/* <p class="mb-0"><span class="col-orange">09%</span> Decrease</p> */}
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="assets/img/banner/2.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">New Trips</h5>
                          <h2 class="mb-3 font-18">{this.state.activeTrips}</h2>
                          {/* <p class="mb-0"><span class="col-green">18%</span>
                            Increase</p> */}
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="assets/img/banner/3.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card">
                <div class="card-statistic-4">
                  <div class="align-items-center justify-content-between">
                    <div class="row ">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div class="card-content">
                          <h5 class="font-15">Amount Recieved Today</h5>
                          <h2 class="mb-3 font-18">{this.state.totalAmount}</h2>
                          {/* <p class="mb-0"><span class="col-green">42%</span> Increase</p> */}
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div class="banner-img">
                          <img src="assets/img/banner/4.png" alt=""/>
                        </div>
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
