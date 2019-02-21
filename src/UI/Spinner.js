import React from 'react';
import classes from './spinner.module.css';

const spinner = (props) => {
    return (
        <div className="m-spinner">
            <div className={classes.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        
    );
}

export default spinner;