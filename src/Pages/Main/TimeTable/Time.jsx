import React from 'react'
import './Time.css'
import TimeGif from '../../../assets/Images/time.gif'
const Time = () => {
  return (
    <section className='time-section'>
      <div className="container">
        <h2 className='time-title'> Course Time Table</h2>
        <div className="time-box">
            <div className="time-box-morning">
                <h3 className='time-box-morning-title'>🌥️ Morning</h3>
                <p className='time-box-morning-description'>9:00 AM - 10:00 AM</p>
            </div>
      <img className='time-box-gif' src={TimeGif} alt="time" />
        
            <div className="time-box-afternoon">
                <h3 className='time-box-morning-title'>☀️ Afternoon</h3>
                <p className='time-box-morning-description'>1:00 PM - 2:00 PM</p>
            </div>
         </div> 
      </div>
    </section>
  )
}

export default Time