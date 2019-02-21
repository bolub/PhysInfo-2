import React, { Component } from 'react';
import IntroOne from '../Components/Introtext1';
import IntroTwo from '../Components/Introtext2';

class  Intro extends Component{
    state = {
        Route1: true,
        Route2: false
    }

    onClickRoute1 = ()=>{
        const Route11 = this.state.Route1;
        this.setState({Route1:!Route11, Route2:false})
    }

    onClickRoute2 = ()=>{
        const Route22 = this.state.Route2;
        this.setState({Route1:false, Route2:!Route22})
    }
    render(){
        let intro = null;

          if(this.state.Route2) {
            intro=(
                <IntroTwo/>
            );
          }

        if(this.state.Route1){
            intro=(
               <IntroOne/>
            );
        }

        
        return(
        <div className="text-white mt-3">
            <div className="d-flex flex-row align-content-center justify-content-center">
                <button className="btn btn-sm border" onClick={this.onClickRoute1}>Route 1</button>
                <button className="btn btn-sm border" onClick={this.onClickRoute2}>Route 2</button>
            </div>
            <h1 className="text-center mt-3" > What is physics? </h1>
            <hr className="border mt-0" style={{width:"18%"}} />
           {intro}
        </div>
    );
    }
}



export default Intro;