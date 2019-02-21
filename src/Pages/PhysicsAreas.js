import React from 'react';
import { Link } from 'react-router-dom';
import Topheader from '../Components/TopHeader'; 

const branches = [
    {branch:'Acoustics', summary:'The study of sound and sound waves. In this field, you study mechanical waves in gases, liquids, and solids. It includes applications for seismic waves, shock and vibration, noise, music, communication, hearing, underwater sound, and atmospheric sound. In this way, it encompasses earth sciences, life sciences, engineering, and the arts.'},
    {branch:'Astronomy', summary:'The study of space. This includes planets, stars, galaxies, deep space, and the universe. It is one of the oldest sciences. It uses mathematics, physics, and chemistry to understand everything outside of the Earth atmosphere.'},
    {branch:'Astrophysics', summary:'The study of the physical properties of objects in space. Today, this term is often used interchangeably with astronomy and many astronomers have physics degrees.'},
    {branch:'Atomic physics', summary:'The study of atoms, specifically the electron properties of the atom, as distinct from nuclear physics which considers the nucleus alone. In practice, research groups usually study atomic, molecular, and optical physics'},
    {branch:'Biophysics', summary:'The study of physics in living systems at all levels, from individual cells and microbes to animals, plants, and entire ecosystems. There is overlap with biochemistry, nanotechnology, and bioengineering. An example is deriving the structure of DNA from X-ray crystallography. Topics can include bioelectronics, nanomedicine, quantum biology, structural biology, enzyme kinetics, electrical conduction in neurons, radiology, and microscopy.'},
    {branch:'chaos', summary:'The study of systems with strong sensitivity to initial conditions, so a slight change at the beginning quickly become major changes in the system. It is an element of quantum physics and useful in celestial mechanics.'},
    {branch:'Chemical physics', summary:'The study of physics in chemical systems. It focuses on using physics to understand complex phenomena at a variety of scales from the molecule to a biological system. You may study nanostructures or chemical reaction dynamics.'},
    {branch:'Computational physics', summary:'The application of numerical methods to solve physical problems for which a quantitative theory already exists.'},
    {branch:'Cosmology', summary:'The study of the universe as a whole, including its origins and evolution. This is getting back to the Big Bang and how the universe will continue to change.'},
    {branch:'Cryophysics/Cryogenics/Low Temperature Physics', summary:'the study of physical properties in low-temperature situations, far below the freezing point of water'},
    {branch:'Crystallography', summary:'the study of crystals and crystalline structures'},
    {branch:'Electromagnetism', summary:'the study of electrical and magnetic fields, which are two aspects of the same phenomenon'},
    {branch:'Electronics', summary:'the study of the flow of electrons, generally in a circuit'},
    {branch:'Fluid dynamics/Fluid mechanics', summary:'the study of the physical properties of "fluids," specifically defined in this case to be liquids and gases'},
    {branch:'Geophysics', summary:'the study of the physical properties of the Earth'},
    {branch:'High energy physics', summary:'the study of physics in extremely high energy systems, generally within particle physics'},
    {branch:'High pressure physics', summary:'the study of physics in extremely high-pressure systems, generally related to fluid dynamics'},
    {branch:'Laser physics', summary:': the study of the physical properties of lasers'},
    {branch:'Mathematical physics', summary:'applying mathematically rigorous methods to solving problems within physics'},
    {branch:'Mechanics', summary:'the study of the motion of bodies in a frame of reference'},
    {branch:'Meterology/weather physics', summary:'the physics of the weather'},
    {branch:'Nanotechnology', summary:'the science of building circuits and machines from single molecules and atoms'},
    {branch:'Nuclear physics', summary:'the study of the physical properties of the atomic nucleus'},
    {branch:'Optical/light physics', summary:'the study of the physical properties of light'},
    {branch:'Particle physics', summary:'the study of fundamental particles and the forces of their interaction'},
    {branch:'Plasma physics', summary:'the study of matter in the plasma phase'},
    {branch:'Quantum electrodynamics', summary:'the study of how electrons and photons interact at the quantum mechanical level'},
    {branch:'Quantum mechanics/Quantum physics', summary:'the study of science where the smallest discrete values, or quanta, of matter and energy become relevant'},
    {branch:'Quantum optics', summary:'the application of quantum physics to light'},
    {branch:'Quantum Field Theory', summary:'the application of quantum physics to fields, including the fundamental forces of the universe'},
    {branch:'Quantum Gravity', summary:'the application of quantum physics to gravity and unification of gravity with the other fundamental particle interactions'},
    {branch:'Relativity', summary:'the study of systems displaying the properties of Einsteins theory of relativity, which generally involves moving at speeds very close to the speed of light'},
    {branch:'Statistical Mechanics', summary:'the study of large systems by statistically expanding the knowledge of smaller systems'},
    {branch:'String theory/Superstring theory', summary:': the study of the theory that all fundamental particles are vibrations of one-dimensional strings of energy, in a higher-dimensional universe'},
    {branch:'Thermodynamics', summary:'the physics of heat'},
];



const physicsAreas = ()=>{
    return(
        <>
            <Topheader headerText = "Branches of physics">
                <p className="lead">
                    Physics is a diverse area of study. In order to make sense of it, scientists have been forced to focus their attention on one or two smaller areas of the discipline. This allows them to become experts in that narrow field, without getting bogged down in the sheer volume of knowledge that exists regarding the natural world.
                </p>

                <p className="lead">
                    In the department of physics, OAU, only a selected few of these branches are treated and those have also been subdivided into two categories i.e The Physics option and the Engineering physics option. Now under the Physics option we have,
                </p>

                <ul className="lead">
                    <li>Health physics</li>  
                    <li><Link className="text-white text-underline" to="/medPhy">Medical physics</Link></li>  
                    <li>Space physics</li>  
                    <li>Mathematical physics</li>  
                </ul>

                <span className="lead my-2">
                    and under the Engineering physics option we have, 
                </span>

                <ul className="lead">
                    <li><Link className="text-white text-underline" to="/nucPhy">Nuclear physics</Link></li>  
                    <li>Material Science</li>   
                </ul>

                <p className="lead">But in actuality, there are far more. Some of them include:</p>

                <ul className="lead">
                    {branches.map(branch =>{
                        return(
                            <li className="mb-3" key={branch.summary}>
                                {branch.branch} - {branch.summary}
                            </li>   
                        );
                    })}
                </ul>
            </Topheader>
        </>
    );
}

export default physicsAreas;
