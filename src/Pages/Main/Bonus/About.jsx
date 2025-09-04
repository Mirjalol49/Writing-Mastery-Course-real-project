import React from 'react'
import './About.css'
import AboutImage from '../../../assets/Images/logo.png'
const About = () => {
  return (
    <section className='about-section'>
      <div className="container">
        <div className='about-img-container'>
      <svg  viewBox="0 0 1200 285" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-58e23c0a-1 cQxCKV"><g clip-path="url(#clip-path-:R5hj6:)"><path d="M11 189C11 189 54.8437 80.5387 125 75C201 69 236 177 265 214C295.478 252.886 317 242 329 219C369.671 141.048 408.764 57.0176 496 68C535.163 72.9304 546.739 109.925 586 114C651.151 120.762 633 29 684 29C750 29 718.345 113.51 756 130C790.479 145.099 807.38 94.2556 845 93C902.767 91.072 914.209 168.041 972 169C1029.5 169.954 1044.66 86.4698 1101 98C1149.7 107.967 1190 189 1190 189" stroke="#0d0f12" stroke-width="12" stroke-linecap="round"></path><path d="M11 189C11 189 54.8437 80.5387 125 75C201 69 236 177 265 214C295.478 252.886 317 242 329 219C369.671 141.048 408.764 57.0176 496 68C535.163 72.9304 546.739 109.925 586 114C651.151 120.762 633 29 684 29C750 29 718.345 113.51 756 130C790.479 145.099 807.38 94.2556 845 93C902.767 91.072 914.209 168.041 972 169C1029.5 169.954 1044.66 86.4698 1101 98C1149.7 107.967 1190 189 1190 189" stroke="#F286A6" stroke-width="3" stroke-linecap="round"></path><path d="M10 251C35 251 52.2703 294.369 76 270C89.5487 256.086 90 241.42 90 222C90 109 169 7 300 7C421 7 508 110 508 196C508 214 527 231 551 231C628.745 231 600 124 659 124C738 124 737 178 794 168C853.097 157.632 853.859 134.154 907 100C989.738 46.8237 1019.62 265.989 1115 242C1168.59 228.522 1159 154 1190 154" stroke="#0d0f12" stroke-width="24" stroke-linecap="round"></path><path d="M10 251C35 251 52.2703 294.369 76 270C89.5487 256.086 90 241.42 90 222C90 109 169 7 300 7C421 7 508 110 508 196C508 214 527 231 551 231C628.745 231 600 124 659 124C738 124 737 178 794 168C853.097 157.632 853.859 134.154 907 100C989.738 46.8237 1019.62 265.989 1115 242C1168.59 228.522 1159 154 1190 154" stroke="#FFE666" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 10"></path></g><defs><clipPath id="clip-path-:R5hj6:"><rect width="1200" height="285" fill="white" transform="matrix(-1 0 0 1 1200 0)"></rect></clipPath></defs></svg>
        <img className='about-image' src={AboutImage} alt="about" />
        </div>
        <p className='about-description'>Hi, I’m Guli D’Aloia. Teaching IELTS has been my passion for over 12 years.</p>
        <p className='about-description'>I’ve sat the exam myself three times — scoring Band 8 twice in Uzbekistan and Band 8.5 in Australia (with 9s in Listening & Reading). So I know exactly what it takes to get a top score.</p>
        <p className='about-description'>I’ve trained students at Insight Academy in Melbourne, and helped hundreds of learners turn Writing — the trickiest part of IELTS — into their strongest skill.
            <p className='about-description'>I’ve been where you are. I know how frustrating Writing can feel. But with the right strategy, feedback, and practice, you’ll be surprised how quickly it clicks.</p>
            <p className='about-description'>And I can’t wait to help you get there. 🚀</p>
        </p>
      </div>
    </section>
  )
}

export default About
