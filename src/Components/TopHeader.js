import React from 'react';
import { MDBContainer } from 'mdbreact';

const topHeader = (props)=>{
    return(
        <>
            <h1 className="text-white text-center mt-4"> {props.headerText}  </h1>
            <MDBContainer className="text-white text-left my-3">
                {props.children}
            </MDBContainer>
        </>
    );
}

export default topHeader;