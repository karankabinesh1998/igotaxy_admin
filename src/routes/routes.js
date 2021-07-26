import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from '../Website/Homepage';



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
        path={'/dashboard'}
        render={(props) => (
          <React.Fragment>
             <div id="app">
             <div class="main-wrapper main-wrapper-1">
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <Addusers {...props}/>
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <AddVendar {...props}/>
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <AddCountry {...props}/>
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <AddState {...props}/>
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <Addcity {...props}/>
            </div>
          <Footer {...props}/>
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
            <Header {...props}/>
            <SideNav {...props}/>
            <div className="app-body">
             <AddTrips {...props}/>
            </div>
          <Footer {...props}/>
          </div>
          </div>
          </React.Fragment>
        )}
      />
   

 </BrowserRouter>
    )

    
          }