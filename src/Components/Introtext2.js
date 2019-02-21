import React from 'react';
import { MDBContainer } from 'mdbreact';

const introText2 = (props)=>{
    return(
      <MDBContainer className="my-4">
            <p className="lead text-left">
                Most people hear the word 'physics' and run for cover. But it's not just for rocket scientists! You are surrounded by physics all the time, and whether you realize it or not, you use physics every day. Physics, the study of matter and energy, is an ancient and broad field of science.
            </p> 

            <p className="lead text-left">
                The word 'physics' comes from the Greek 'knowledge of nature,' and in general, the field aims to analyze and understand the natural phenomena of the universe.
                One thing that may come to mind when you think of physics is the many scientific laws, which are statements describing phenomena that have been repeatedly tested and confirmed. This is actually an important part of physics.
            </p>

            <p className="lead text-left">
                 Physicists perform and repeat experiments, sometimes ad nauseam, to formulate these laws and explain how our universe works. These laws (such as gravity and Newton's laws of motion) are so thoroughly tested that they are accepted as 'truths,' and they can be used to help us predict how other things will behave.
                Because physics explains natural phenomena in the universe, it's often considered to be the most fundamental science. It provides a basis for all other sciences - without physics, you couldn't have biology, chemistry, or anything else!
            </p>
        </MDBContainer>
    );
}

export default introText2;