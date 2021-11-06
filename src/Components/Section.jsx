import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'
import secImg from "../Images/sec-img.webp";
import Typewriter from 'typewriter-effect';
import IsResponsive from './IsResponsive';


const Section = () => {

  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateY(20px)",
    },
    animationOptions: {
      delay: 500,
      duration: 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  })

  return (
    <div className="section">
      <div className="sec-div">
        <div className="type-writer">
          <Typewriter
            options={{
              strings: [`Tiny Short Animation <br/>  Developed by <br/> Anas Raza`],
              autoStart: true,
              loop: true,
              wrapperClassName: "h1",
              cursorClassName: "Typewriter__cursor",
              className: "typeWriter"
            }}
          />
        </div>
        <div className="getStarted">
          <span>Get Started</span>
        </div>
      </div>
      <div className="img-div">
        <img ref={ref} className="sec-img" src={secImg} alt="Section" />
      </div>
      <div className="isResponSiveDivSec">
        <IsResponsive />
      </div>
    </div>
  )
}

export default Section;
