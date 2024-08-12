import React from 'react'
import NavigationBar from '../../layout/NavigationBar/NavigationBar'
import './HomeFirstSection.css'
import rightarrow from '../../../assets/right-arrow.svg'
import bag from '../../../assets/bag.svg'
import location from '../../../assets/location.svg'
import truck from '../../../assets/truck.svg'
import sectionimg from '../../../assets/home_bg.jpg'
const HomeFirstSection = () => {
  return (
    <div className='home-section1'>

      
      <NavigationBar></NavigationBar>
      
      <div className='both-side'>
        
        <div className='right-side'>
        <div className='order-fav-container'>
              <span>Order Your Favourite Food Easily</span>
              <span>We deliver 100% organic and fresh food. You can order right now!</span>
            <button className='btn btn-sevtion1'>
                <span>our menu</span>
                <img src={rightarrow} alt="right arrow" />
            </button>
        </div>

        <div className='features-container'>
            <div><img src={bag} alt="bag"/><span>select your favourite food and order!</span></div>
            <div><img src={location} alt="location"/><span>select your receiving place place</span></div>
            <div><img src={truck} alt="truck"/><span>Get your food within 01-02 hours</span></div>
        </div>
        </div>
          
          <div className='left-side'>
               <div  className='side-img'></div>
          </div>
      </div>

       
        
    
      
    </div>
  )
}

export default HomeFirstSection
