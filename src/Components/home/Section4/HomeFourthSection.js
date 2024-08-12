import React from 'react'
import './HomeFourthSection.css'
import {bestMeals} from '../../../data/BestMeals'
import rightarrow from '../../../assets/right-arrow.svg'
const HomeFourthSection = () => {
  return (
    <div className='home-section4'>
        <div className='menu-container'>
            <span>Menu</span>
            <span>Our Best Selling Meals</span>
        </div>
        <div className='meals-container'>
            {bestMeals.map((meals)=>(
                <div className='meals-card' key={bestMeals.name}>
                    <img src={meals.image} />
                    <div>
                        <span>{meals.name}</span>
                        <span>{meals.discteption}</span>
                        <span>{meals.calories}</span>
                    </div>
                    <div>
                        <span>${meals.price}</span>
                        <button className='btn'>new</button>
                    </div>
                    
                </div>
            ))}
        </div>

        <button className='btn btn-seefood'>
            <span>see all foods</span>
            <img src={rightarrow}/>
        </button>

    </div>
  )
}

export default HomeFourthSection
