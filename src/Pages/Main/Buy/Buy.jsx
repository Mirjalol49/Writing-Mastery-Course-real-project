import React from 'react'
import Trophy from '../../../assets/Images/trophy.png'
import './Buy.css'
const Buy = () => {
  return (
    <section className='buy-section'>
      <div className="container">
        
        <div className="buy-content"> 
            <div className="buy-content-container"> 
            <div className="buy-content-gold">
<img className='buy-content-gold-img' src={Trophy} alt="trophy" />
            </div>

    </div>
    <p className="buy-content-description">
            Transform your IELTS Writing from a 6.0 → 7.5+ with proven strategies, live practice, and expert feedback.

            </p>
            <p className='buy-content-price'>500 000 UZS</p>
            <button className='buy-content-button'>Buy Now</button>
            </div>

            
      </div>
    </section>
  )
}

export default Buy
