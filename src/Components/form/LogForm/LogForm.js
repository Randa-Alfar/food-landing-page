import React from 'react'
// import './LogForm.css'
import '../SignForm/SignForm.css'
import {Link} from 'react-router-dom'

const LogForm = () => {
  return (
    <form>
            <span>
                <label>E-Mail Adress</label>
                <input type="email" placeholder='E-Mail' name='name' required />
            </span>

            <span>
                <label>Password</label>
                <input type='password' placeholder='Password' name='Passowrd' required />
            </span>

            <button type='submit'>SIGN UP</button>

            <div className='login-container'>
                <span>Dont have an account?</span>
                <Link className='text-link' to="/SignUp" > Sign Up</Link>
            </div>

            </form>
  )
}

export default LogForm
