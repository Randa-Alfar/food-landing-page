import React from 'react'
import './HomeThirdSection.css'
import leaf from '../../../assets/leaf.svg'
import truck from '../../../assets/truck.svg'
import offer from '../../../assets/offer.svg'

const HomeThirdSection = () => {
  return (
    <div className='home-section3'>
        <div className='main-container'>

            <div className='why-container'>
                    <span>Why choose us?</span>
                    <span>over 2 million people are happy with our service</span>
            </div>

                <div className='why-reason-container'>
                    <div>
                        <img src={leaf}/>
                        <span>Fresh food</span>
                        <span>We server the best and fresh quality food</span>
                    </div>
                    <div>
                        <img src={offer}/>
                        <span>Best offer</span>
                        <span>We give the best offer for our valuable customers</span>
                    </div>
                    <div>
                        <img src={truck}/>
                        <span>Fast delivery</span>
                        <span>We have delivery van for fast delivery</span>
                    </div>
                </div>
        </div>
            

            <div className='section3-img'></div>

    </div>
  )
}

export default HomeThirdSection
