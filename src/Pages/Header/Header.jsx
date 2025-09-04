import React from 'react'
import Logo from '../../assets/Images/header-logo.jpg'
import rocket from '../../assets/Images/rocket.png'
// eslint-disable-next-line
import { AnimatedGradientText } from '../../components/ui/animated-gradient-text'
import ImagesReveal from '../../components/ui/images-reveal'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
        <div className="header-title-container">
           
          <h1 className='header-title flex items-center gap-4 flex-wrap'>
            <span>IELTS</span>
            <AnimatedGradientText className="text-6xl" speed='slow'>
  WRITING
</AnimatedGradientText>
            <span>Mastery</span>
          </h1>
          <img className='header-rocket' src={rocket} alt="logo" />
       </div>
       <p className='header-description'>Live, feedback-focused lessons to transform your Writing score — taught by Guli D'Aloia, Band 8.5 IELTS tutor.</p>
        
         <div className="header-description-content">
        
             <img className='header-logo' src={Logo}  alt="logo" />
             <p className='header-logo-text'>Gulruh D'Aloia</p>
         </div>
             <ImagesReveal />

     
       
        </div>
      </div>
    </header>
  )
}

export default Header