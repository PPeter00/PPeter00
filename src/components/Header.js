import React from 'react';
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Web development and support</h1>
            <Typed 
              className='typed-text'
              strings={["Web Design", "Web Development", "UI building", "React Apps"]}
              typeSpeed={40}
              backspeed={60}
              loop
            />
            <a href='#contact' className='btn-main-offer'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header
/*


            */