import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import SideBarr from './Components/sideNav/sideNav';
import Intro from './Pages/Intro';
import Lecturers from './Pages/Lecturer';
import Areas from './Pages/PhysicsAreas';
import EngP from './Pages/EPH';
import Medphy from './Pages/MedicalPhysics';
import Nucphy from './Pages/Nuclearphysics';
import {Route} from 'react-router-dom';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    const particleOpt = {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 900
          }
        }
      }
    }

    const particleStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
    return (
      <>
        <Particles params={particleOpt}/>
        <div style={particleStyle}>
          <SideBarr/>
          <Route exact path='/' component={Home} />
          <Route path='/Intro' component={Intro} />
          <Route path='/lecturers' component={Lecturers} />
          <Route path='/branches' component={Areas} />
          <Route path='/EPH' component={EngP} />
          <Route path='/medPhy' component={Medphy} />
          <Route path='/nucPhy' component={Nucphy} />
        </div>
      </>
    );
  }
}

export default App;
