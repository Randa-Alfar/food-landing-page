import React from 'react'
import './SignUpCom.css'
import leftArrow from '../../assets/left-arrow.svg' 
import mac from '../../assets/macaroni-1469.png'
import {Link} from 'react-router-dom'
import SignForm from '../form/SignForm/SignForm'

const SignUpCom = () => {
  return (
    <div className='signup-container'>
      
      <div className='left-side-sign'>
        {/* heading section */}
            <div className='goback-container'>
                <button><Link to='/Home' className='text-link link-go'>
                <img src={leftArrow}/>
                <span>Go Back</span></Link>
                </button>

                <button><Link to='/LogIn' className='text-link'>Log In</Link></button>
            </div>
            {/* the titel of create account */}
            <div className='create-container'>
                <span>get your food</span>
                <span>Create an Account</span>
            </div>
            {/* the form section */}
            <SignForm/>
        
      </div>

      <div className='right-side-sign'>
        <img src={mac}/>
        <span>With a free Account getting food has never been easier</span>
      </div>

    </div>
  )
}

export default SignUpCom
