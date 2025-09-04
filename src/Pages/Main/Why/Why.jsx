import React from 'react';
import './Why.css';
import SampleEssay from '../../../assets/Images/sad.gif';
import Strength from '../../../assets/Images/happy.gif';

const Why = () => {
  return (
    <section className='why-section'>
      <div className="container">
        {/* HARD TRUTH */}
        <div className="why-content">
          <h2 className='why-title'>HARD TRUTH</h2>
          <div className="why-emoji">👇</div>
          <p className='why-description'>
            Let’s be real. Writing is the trickiest part of IELTS.
            Most students score 6.0 or 6.5 in Writing, even if they’re 8.0+ in Listening or Reading.
          </p>
        </div>

        {/* SAD - hover GIF */}
        <div className="why-description-2-container">
          <p className='why-description-2'>
            You{' '}
            <span className="hover-word">
              CAN'T
              <img src={SampleEssay} alt="sad meme" className="hover-gif" />
            </span>{' '}
            score Band 7+ in Writing by memorizing sample essays.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="why-content why-content-2">
          <h2 className='why-title-2'>Solution</h2>
          <div className="why-emoji">🥳</div>

          <div className="why-description-3-container">
            <p className='why-description-2'>
              But here’s the truth: with the right strategy, feedback, and practice, Writing can become your{' '}
              <span className='hover-word font-bold'>
                strongest skill.
                <img src={Strength} alt="happy meme" className="hover-gif" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
