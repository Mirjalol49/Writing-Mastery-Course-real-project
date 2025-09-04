import React from 'react'
import './What.css'
import AnimatedTimelinePage from '../../../components/ui/animatedtimeline'
const What = () => {
  return (
    <section className='what-section'><svg viewBox="0 0 1000 195" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="sc-c611d025-2 jIzOke"><g clip-path="url(#clip-path-:R38j6:)"><path d="M988.5 34C943 52.5 917.269 16.6372 867 9.99992C739.481 -6.837 791.5 68.9999 534 68.9999C308.5 68.9999 290.854 15.9393 197 21.4998C103.146 27.0604 87.5 81.9999 10 61.4999" stroke="#8F7DE8" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 10" transform="translate(0 18.947601318359375)" class="sc-c611d025-3 gjqpxr"></path><path d="M413.722 46.7526C306.531 36.2559 248.691 97.3741 141.222 90.2526C81.726 86.31 -8.77783 53.7526 -8.77783 53.7526V305.753H1071.22C1071.22 305.753 1169.22 69.7527 1071.22 101.753C973.222 133.752 1036.05 13.135 990.222 8.25257C944.728 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.453 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526Z" fill="#0f172a" stroke="#0f172a" stroke-width="10" stroke-linecap="round" transform="translate(0 8.51687344637784)" class="sc-c611d025-3 gjqpxr"></path><path d="M990 8.25257C944.506 3.4056 952.94 69.7644 909.222 83.2526C858.334 98.9531 827.875 57.4452 774.722 60.7526C712.97 64.5951 686.452 107.569 624.722 111.753C538.698 117.583 499.534 55.1556 413.722 46.7526C306.531 36.2559 248.691 96.3741 141.222 89.2526C81.726 85.31 10 60.7526 10 60.7526" stroke="#77F6AA" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 6" transform="translate(0 8.51687344637784)" class="sc-c611d025-3 gjqpxr"></path><path d="M447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 30.4999 176.753 2.99994 121.753C-24.5001 66.7526 -31.7778 318.253 -31.7778 318.253H1085.72C1085.72 318.253 1117.5 112.5 1026.5 99C935.5 85.5 970.5 70.0607 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.896 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753Z" fill="#0f172a" stroke="#0f172a" stroke-width="10" stroke-linecap="round"></path><path d="M990 93.5C958.778 87.2474 955.5 69.2026 917 67C835.686 62.3481 820.88 133.606 739.722 126.753C683.897 122.038 670.089 61.4461 614.222 57.2526C539.667 51.6563 520.452 134.426 447.722 151.753C312.206 184.036 246.392 51.044 108 67C51.405 73.5251 43 153.253 10 134.5" stroke="gold" stroke-width="3" stroke-linecap="round"></path></g><defs><clipPath id="clip-path-:R38j6:"><rect width="1000" height="195" fill="white"></rect></clipPath></defs></svg>
    <div className="container">
<h2 className='what-title'>What you'll learn</h2>
<p className='what-description'>This isn’t just about memorizing essays. You’ll train your brain to actually write like a Band 7+ candidate. Here’s the roadmap:</p>
<AnimatedTimelinePage
  containerClassName="flex flex-col items-center justify-center space-y-8"
  events={[
    {
     
      description: 'Turn scary charts & data into clean academic reports',
      id: '1',
      title: '📊 Task 1 '
    },
    {  
      description: 'Write essays that don’t sound like a robot',
      id: '2',
      title: '✍️ Task 2'
    },
    {
      
      description: 'Understand exactly how examiners mark',
      id: '3',
      title: '🎯 Band Descriptors'
    },
    {
     
      description: 'Less theory, more actual writing',
      id: '4',
      title: '🛠️ Practice & Application '
    },
    {
    
      description: 'See mistakes, fix them, and level up',
      id: '5',
      title: '📝 Regular Feedback '
    }
  ]}
  initialActiveIndex={-1}
  onEventClick={() => {}}
  onEventHover={() => {}}
  timelineStyles={{
    activeDotColor: '#22c55e',
    activeLineColor: '#22c55e',
    dateColor: '#9CA3AF',
    descriptionColor: '#cbd5e1',
    dotColor: '#D1D5DB',
    dotSize: '1rem',
    lineColor: '#E5E7EB',
    titleColor: '#fff',
   
  }}
  
/>
    </div>
    </section>
  )
}

export default What