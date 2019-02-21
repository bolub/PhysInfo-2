import React from 'react';
import { MDBContainer } from 'mdbreact';

const introText1 = (props)=>{
    return(
        <MDBContainer className="my-4">
                    <p className="lead text-left">
                        The dictionary definition of physics is “the study of matter, energy, and the interaction between them”, but what that really means is that physics is about asking fundamental questions and trying to answer them by observing and experimenting.
                        Physicists ask really big questions like: 
                    </p>

                    <ul className="mt-1 lead">
                        <li>How did the universe begin ? </li>
                        <li>How will the universe change in the future ? </li>
                        <li>How does the Sun keep on shining ? </li>
                        <li>What are the basic building blocks of matter ?</li>
                    </ul>

                    <p className="lead text-left">
                        If you think these questions are fascinating, then you’ll like physics. What do Physicists do ?
                        Many physicists work in ‘pure’ research, trying to find answers to these types of question.The answers they come up with often lead to unexpected technological applications. For example, all of the technology we take
                        for granted today, including games consoles, mobile phones, mp3 players, and DVDs, is based on a theoretical understanding of electrons that was developed around the turn of the 20 th century.

                    </p>  

                    <p className="lead text-left">
                        Physics doesn’t just deal with theoretical concepts.It’ s applied in every sphere of human activity, including: 
                        What about mathematics ?
                    </p> 

                    <ul className="mt-1 lead">
                        <li>Development of sustainable forms of energy production</li>
                        <li>Treating cancer through radiotherapy and diagnosing illness through various types of imaging, all based on physics </li>
                        <li>Developing computer games</li>
                        <li> Design and manufacture of sports equipment• Understanding and predicting earthquakes… in fact, pretty much every sector you can think of needs people with physics knowledge.</li>
                    </ul>

                    <p className="lead text-left">
                        Many apparently complicated things in nature can be understood in terms of relatively simple mathematical relationships.Physicists
                        try to uncover these relationships through observing, creating mathematical models, and testing them by doing experiments.The mathematical equations used in physics often look far more complicated than they really are.Nevertheless,
                        if you are going to study physics, you will need to get to grips with a certain amount of maths.…and computers ?
                        Physicists are increasingly using advanced computers and programming languages in the solution of scientific problems, particularly
                        for modelling complex processes.If the simulation is not based on correct physics, then it has no chance of predicting what really happens in nature.Most degree courses in physics now involve at least some computer programming.
                    </p>  
                </MDBContainer>
    );
}

export default introText1;