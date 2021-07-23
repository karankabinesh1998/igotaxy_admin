import React, { Component } from 'react';
import '../style1.css';
import Progress from '../../Component/Progress';

const Adddocument = ({ data , handleChangeFile,AddDoucment,ButtonName1=true,uploadPercentage, docummentfiles, Filename }) => {
  //console.log(docummentfiles[0]);
    return(
     <React.Fragment>
          <div className="row form-group">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                {/* <Alert
                    className="badge-content"
                    color="success"
                    isOpen={this.state.alertVisible}
                    toggle={this.onDismiss}
                    color={this.state.color}
                >
                    {this.state.textALert}
                </Alert> */}
                </div>
                <div className="col-sm-2" />
            </div>


          {docummentfiles.map((ival,i)=>{
               return(
                   <React.Fragment>
                        <h3 class="header">{ival.name}</h3>
                       {ival.document.map((jval,j)=>{
                         //  console.log(jval.file);
                           return(
                           <React.Fragment>
                               <div class="form-group">
                            <label  class="labell" >{ival.name} - Front Side </label>
                            <div class="input-group">
                            <div class="input-group-prepend">
                            </div>
                            <input
                            type="file"
                            className="custom-file-input"
                            onChange={(e)=>handleChangeFile(e,i,j,`'${jval.type}'`)}
                            accept="image/*"
                            />
                            <label className="custom-file-label" htmlFor="customFileThumbnail">
                            {jval.file ? jval.file.substring(0, 15) : null}
                            </label>
                            </div>
                             </div>
                           </React.Fragment>)
                       })}
                   </React.Fragment>
               )
           })}

                    <div className="row form-group">
                        <div className="col-sm-2" />
                        <div className="col-sm-7">
                            {uploadPercentage > 0 && (
                                <Progress percentage={uploadPercentage} />
                            )}
                        </div>
                        <div className="col-sm-3" />
                    </div>

            <div class="row form-group">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
            <button type="button"
                style={{width:'100%'}} 
                onClick={ ButtonName1 === true ? AddDoucment : null  }
                class="btn btn-primary m-t-15 waves-effect">
                    {ButtonName1 === true ? "Upload Document" : "Update Document" }
                    </button>
            </div>
            <div className="col-sm-2"></div>
            </div>
            
     </React.Fragment>
    )

}

export default Adddocument;



