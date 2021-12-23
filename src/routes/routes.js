import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

// import Homepage from '../Website/Homepage';



import Header from '../Website/Header';
import SideNav from '../Website/SideNav/Sidenav';
import Footer from '../Website/footer';

/////LoginPage
import LoginPage from '../Website/Login';


/////MAsters

import Addusers from '../Website/Masters/Addusers';
import AddVendar from '../Website/Masters/AddVendar';
import AddCountry from '../Website/Masters/AddCountry';
import AddState from '../Website/Masters/AddState';
import Addcity from '../Website/Masters/Addcity';
import AddTrips from '../Website/Masters/AddTrips';
import AddWalletAmount from '../Website/Masters/AddWalletAmount';


//////Trips
import AssignTripToVendor from '../Website/Masters/AssignTripToVendor';
import AddDrivers from '../Website/Masters/AddDrivers';
import AddCabs from '../Website/Masters/AddCabs';
import ActiveTrips from '../Website/Masters/ActiveTrips';
// import ChatRoom from '../Website/ChatPage/ChatRoom';
import AddAnnouncement from '../Website/Masters/AddAnnouncement';
import Privacy_Policy from '../Website/Privacy_Policy';
import PaymentMainPage from '../Website/paymentMainPage';
import DashBoard from '../Website/Masters/DashBoard';
// import Chat from '../Website/ChatPage/Chat';


export default function Routes() {
  return (
    <BrowserRouter>




      <Route
        exact
        path={'/'}
        render={(props) => (
          <React.Fragment>

            <LoginPage {...props} />

          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/privacyandpolicy'}
        render={(props) => (
          <React.Fragment>

            <Privacy_Policy {...props} />

          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/payment/:loginToken/:amountUser'}
        render={(props) => (
          <React.Fragment>

            <PaymentMainPage {...props} />

          </React.Fragment>
        )}
      />



      <Route
        exact
        path={'/dashboard'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <DashBoard {...props}/>
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/announcement'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddAnnouncement {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/assignTrip'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AssignTripToVendor {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/drivers'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddDrivers {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/cabs'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddCabs {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/user'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <Addusers {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/vendar'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddVendar {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/country'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddCountry {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />


      <Route
        exact
        path={'/state'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddState {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/city'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <Addcity {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/trip'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddTrips {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/activetrip'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <ActiveTrips {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />

      <Route
        exact
        path={'/wallet'}
        render={(props) => (
          <React.Fragment>
            <div id="app">
              <div class="main-wrapper main-wrapper-1">
                <Header {...props} />
                <SideNav {...props} />
                <div className="app-body">
                  <AddWalletAmount {...props} />
                </div>
                <Footer {...props} />
              </div>
            </div>
          </React.Fragment>
        )}
      />




    </BrowserRouter>
  )


}