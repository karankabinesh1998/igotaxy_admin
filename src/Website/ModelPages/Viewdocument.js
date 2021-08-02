import React, { Component } from 'react';
import '../style1.css';
import {ACCESS_POINT } from '../../config/index';
//import Progress from '../../../Component/Progress';

const ViewDocument = ({ data ,ViewDocumentstate, handleChangeFile,AddDoucment,ButtonName1=true,uploadPercentage, docummentfiles, Filename }) => {
   console.log(ViewDocumentstate);
    return(
        <React.Fragment>
           <h3>Driving Licence </h3>
           <p>Driving Licence Front</p>
           <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.driving_licence_front}/${ViewDocumentstate.userid}`} />
                </div>
                <div className="col-sm-2" />
            </div>

            <p>Driving Licence Back</p>
           <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.driving_licence_back}/${ViewDocumentstate.userid}`} />
                </div>
                <div className="col-sm-2" />
            </div>

            <h3>Aadhar Card </h3>
           <p>Aadhar Card Front</p>
           <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.aadhar_front}/${ViewDocumentstate.userid}`} />
                </div>
                <div className="col-sm-2" />
            </div>

            <p>Aadhar Card Back</p>
           {/* <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8"> */}
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.aadhar_back}/${ViewDocumentstate.userid}`} />
                {/* </div>
                <div className="col-sm-2" /> */}
            {/* </div> */}

            <h3>Pan Card </h3>
           <p>Pan Card Front</p>
           <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.pancard_front}/${ViewDocumentstate.userid}`} />
                </div>
                <div className="col-sm-2" />
            </div>

            <p>Pan Card Back</p>
           <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                  <img style={{width:'100%',height:'400px'}} alt="Upload the image" src={`${ACCESS_POINT}/admin/vendarfile/${ViewDocumentstate.pancard_back}/${ViewDocumentstate.userid}`} />
                </div>
                <div className="col-sm-2" />
            </div>

        </React.Fragment>
    )
}

export default ViewDocument;