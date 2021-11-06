import useWebAnimations, { backInDown } from '@wellyshen/use-web-animations';
import React from 'react'

const Header = () => {

  const { ref } = useWebAnimations({ ...backInDown })

  return (
    <div className="header">
      <p ref={ref}>
       Bootcamp 2020
      </p>
    </div>
  )
}

export default Header;
