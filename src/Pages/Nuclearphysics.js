import React, { Component } from 'react';
import Topheader from './../Components/TopHeader';

class Nuclear extends Component{
    render(){
        return(
            <Topheader headerText="Nuclear physics">
                <p className="lead">
                    Nuclear physics is the field of physics that studies atomic nuclei and their constituents and interactions. Other forms of nuclear matter are also studied. 
                </p>

                <p className="lead">
                    Nuclear physics should not be confused with atomic physics, which studies the atom as a whole, including its electrons.
                    Discoveries in nuclear physics have led to applications in many fields. This includes nuclear power, nuclear weapons, nuclear medicineand magnetic resonance imaging, industrial and agricultural isotopes, ion implantation in materials engineering, and radiocarbon datingin geology and archaeology. Such applications are studied in the field of nuclear engineering.
                </p>

                <p className="lead">
                    Particle physics evolved out of nuclear physics and the two fields are typically taught in close association. Nuclear astrophysics, the application of nuclear physics to astrophysics, is crucial in explaining the inner workings of stars and the origin of the chemical elements.
                </p>
              
            </Topheader>
        );
    }
}

export default Nuclear;