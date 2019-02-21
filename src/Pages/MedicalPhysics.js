import React, {Component} from 'react';
import axios from 'axios';
import Topheader from './../Components/TopHeader';

class medPhy extends Component{
    state = {
        Lecturers:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3001/lecturers-json')
        .then(response=> this.setState({Lecturers:response.data}, console.log(response.data)));
        ;
    }

    render(){
        let newLecturers = this.state.Lecturers;
        let medLecturers = newLecturers.filter(lecturer => lecturer.areaOfSpecialization === 'Medical');
        let lec = (
            <>
                {medLecturers.map(lecturer =>{
                    return(
                    <li className="text-white">{lecturer.name}</li>        
                    );
                })}
            </>
        ); 
        return(
            <Topheader headerText="Medical physics">
                <p className="lead">
                    Medical physics is simply the application of physics to medicine or in technical terms, Medical physics (also called biomedical physics, medical biophysics, applied physics in medicine, physics applications in medical science, radiological physics orhospital radio-physics) is, in general, the application of physics concepts, theories, and methods to medicine or healthcare. Medical physics departments may be found in hospitals or universities.
                </p>

                <h4 className="mt-4">Who are medical physicists ?</h4>
                <p className="lead">
                    Medical physicists are health care professionals with specialized training in the medical applications of physics. Their work often involves the use of x-rays, ultrasound, magnetic and electric fields, infra - red and ultraviolet light, heat and lasers in diagnosis and therapy.
                </p>
                <p className="lead">
                    Most medical physicists work in hospital diagnostic imaging departments, cancer treatment facilities, or hospital - based research establishments.Others work in universities, government, and industry.
                </p>

                <h4 className="mt-4">What do they do ?</h4>
                <ul>
                    <li className="h5">Clinical service
                        <p className="sub mt-2">
                            The responsibilities of a clinical medical physicist lie predominantly in the areas of radiotherapy and diagnostic imaging. The roles of a medical physicist in radiotherapy include treatment planning and radiotherapy machine design, testing, calibration, and troubleshooting. The roles of a medical physicist in diagnostic imaging include machine purchasing and installation, testing, quality control, and operation.
                        </p>
                    </li>

                    <li className="h5">Radiation Safety
                        <p className="sub mt-2">
                        Medical physicists have expertise in radiation safety. Canadian regulations recognize medical physicists who are certified by the Canadian College of Physicists in Medicine as Radiation Safety Officers
                        for medical radioisotope facilities. 
                        </p>
                    </li>

                    <li className="h5">Research and development
                        <p className="sub mt-2">
                            Canadian radiotherapy physicists play a central role in such areas as the design and construction of radiotherapy treatment equipment, the use of heat and lasers in cancer treatment, the theory of radiation absorption and dose calculation and in radiobiology. Imaging physicists are continually developing and improving methods to image body structure and function. Canadian laboratories are leaders in positron emission tomography, magnetic resonance imaging, ultrasound, x-ray and radionuclide imaging, biomagnetic mapping, among other areas. Excellence in Canadian Medical Physics Research is recognized annually via the awarding of the Sylvia Fedoruk Prize.
                        </p>
                    </li>

                    <li className="h5">Teaching
                        <p className="sub mt-2">
                            Most medical physicists are affiliated with universities. Many medical physicists teach in graduate and undergraduate medical physics and physics programs.They also teach radiology and radiation oncology residents, medical students, and radiology, radiotherapy, and nuclear medicine technologists.
                        </p>
                    </li>
                </ul>
                {lec}
            </Topheader>
        );
    }
}


export default medPhy;