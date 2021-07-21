import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from '../Website/Homepage';





export default function Routes() {
    return (
<BrowserRouter>

      


      <Route
        exact
        path={'/'}
        render={(props) => (
          <React.Fragment>
            
             <Homepage {...props} />
          
          </React.Fragment>
        )}
      />


   

 </BrowserRouter>
    )

    
          }