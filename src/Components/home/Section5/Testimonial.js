import React, { useEffect, useState } from 'react'
import './Testimonial.css'
import right from '../../../assets/right.svg'
import left from '../../../assets/left.svg'
import { testimonialData } from '../../../data/TestimonialData'

const Testimonial = () => {

    const [location,setlocation] = useState(0);
    const datalenght = testimonialData.length;

  return (
    <div className='home-section5'>
        <div className='heading-container'>
            <span>Testimonial</span>
            <span>What they saying</span>
        </div>

        <div className='collection-contaier'>
            <img src={left} onClick={()=>{
                location=='0'?setlocation(datalenght-1):setlocation(location-1);
                    }}/>

            <div className='testimonial-container'>
                <div className='img-container'>
                    <img src={testimonialData[location].image} />
                </div>
                <div className='review-container'>
                    <span>{testimonialData[location].review}</span>
                    <div>
                        <img src={testimonialData[location].rate}/>
                        <img src={testimonialData[location].rate}/>
                        <img src={testimonialData[location].rate}/>
                        <img src={testimonialData[location].rate}/>
                        <img src={testimonialData[location].rate}/>
                    </div>
                    <div>
                        <span>{testimonialData[location].name}</span>
                        <span>{testimonialData[location].city}</span>
                    </div>
                    
                </div>
            </div>

            <img src={right} onClick={()=>{
                location==datalenght-1?setlocation(0):setlocation(location+1);
            }}/>
        </div>

    </div>
  )
}

export default Testimonial
