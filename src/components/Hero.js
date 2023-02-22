import React from "react";
import grp from '../images/grp.png';

const Hero = () => {
  return (
    <section>   
        <img src={grp} className="grp" />
        <h1 className="exp">Online Experiences</h1>
        <p className="join">Join unique intercaive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}


export default Hero;
