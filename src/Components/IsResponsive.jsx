import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'
import secImg from "../Images/sec-img.webp";

const IsResponsive = () => {

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
    <img ref={ref} className="isResponsiveImg" src={secImg} alt="Section" />
  )
}

export default IsResponsive;
