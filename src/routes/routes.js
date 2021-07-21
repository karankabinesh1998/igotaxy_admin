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
   

 </BrowserRouter>
    )

    
          }