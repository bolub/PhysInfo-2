import React, { Component } from 'react';
import SideNav from 'react-simple-sidenav';
import { MDBIcon} from 'mdbreact';
import { Link } from 'react-router-dom';
import Navlist from './sideNavList';

class sideBarr extends Component{
    state = {
        showNav: false
    }
    render() {
            let navMenu = 
                (
                    <div className = "text-center text-white pt-5" >
                        <i 
                            className="fa fa-times text-white mb-4" 
                            onClick={() => this.setState({ showNav: false })}
                            style={{cursor:"pointer", marginLeft:"190px"}}
                        ></i>
                        
                        <Navlist/>
                    </div>
                );
            
         return(
        <>  
            <MDBIcon icon="bars" size="2x" 
            onClick={() => this.setState({showNav: true})} 
            className="waves ml-4 mt-4 text-white"
            style={{cursor:"pointer"}}
            />

            <Link to="/" className="pl-5 h1 font-pacifico phy text-white">PhysInfo</Link>
            <SideNav
            children={navMenu}
            showNav = {this.state.showNav}
            onHideNav = {() => this.setState({showNav: false})} 
            navStyle={{width:"300px", backgroundColor: '#0d47a1'}}
            />
        </>
    );
    }
}

export default sideBarr;