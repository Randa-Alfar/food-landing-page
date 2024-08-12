import React from 'react'
import './HomeSecondSection.css'
import rightarrow from '../../../assets/right-arrow.svg'

const HomeSecondSection = () => {
  return (
    <div className='home-section2'>
        <div className='section2-img'></div>

        <div className='about-container'>
            <span>About</span>
            <span>We are the best quality restaurant</span>
            <span>Restaurant in Nigeria sourcing our ingredient locally, to celebrate lifes special moments by offering the best food, service and ambience in every home</span>
            <span>If you want any food please login or sign up on our mobile app or website</span>
            
            <button className='btn btn-section2'>
                <span>our menue</span>
                <img src={rightarrow} alt='right arrow'/>
            </button>
        </div>
      
    </div>
  )
}

export default HomeSecondSection
