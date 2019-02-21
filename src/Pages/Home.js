import React from 'react';
import {MDBRow,  MDBCol} from 'mdbreact';
import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <MDBRow className="d-flex flex-row align-items-center justify-content-center">
          <MDBCol md='6' className="text-center col-m">
          <div className="container">
             <h1 className="text-white mb-4"> Welcome to PhysInfo, click the button below to start learning </h1>
          </div>

              <Link to='/intro' className="btn btn-outline-primary text-lowercase t-w text-white waves fontbtn py-2 px-5">Click to start</Link>
          </MDBCol>
        </MDBRow>
    );
}

export default Home;