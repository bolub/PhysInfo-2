import React from 'react';
import { Link } from 'react-router-dom';

const sideNavItem = (props)=>{
    return(
        <>
        <li className="nav-item">
            <Link to={props.toh} 
                onClick={()=>this.setState({showNav:false}) } 
                className="fontLink ml-1 nav-link text-white" 
            >
                {props.navItem}
            </Link>
        </li>
        </>
    );
}

export default sideNavItem;