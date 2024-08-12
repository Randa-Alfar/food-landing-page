import React from 'react'
import './NavigationBar.css'
import user from '../../../assets/user.svg'
import cart from '../../../assets/cart.svg'
import home from '../../../assets/home.svg'
import shoppingcart from '../../../assets/shopping-bag.svg'
import log from '../../../assets/login.svg'
import sign from '../../../assets/signup.svg'
import menu from '../../../assets/menu.svg'
import profilephoto from '../../../assets/profile-photo.jpg'
import { Link } from 'react-router-dom'

const NavigationBar = () => {

    const display = () =>{
        const menu = document.querySelector('.account-menu-container');
        menu.style.display === 'none'? menu.style.display = 'flex':menu.style.display = 'none';
        console.log("display button working!!!");
    }
    const sidemenu = () =>{
        const menu = document.querySelector('.side-menu-container');
        menu.style.display === 'none'? menu.style.display = 'flex':menu.style.display = 'none';
        console.log("side menu button working!!!");
    }

  return (
    <div>
    <div className='NavBar-container'>
        {/* logo section */}
        <div>
         <img src={menu} alt="menu" className='menu-img' onClick={sidemenu}/>
        <span>Randa Chirikina</span>
        </div>
        {/* the menue section */}
            <ul>
                <li><Link to="/Home" className='text-link'>Home</Link></li>
                <li><Link to="/Meals" className='text-link'>Meals</Link></li>
            </ul>
        {/* the account section */}
        <div className='button-container'>
            <button onClick={display}><img src={user} /><span>Account</span></button>
            <button><img src={cart} id="cart"/></button>

            <div className='account-menu-container' >
                <ul className='account-menu'>
                    <li>Welcome, RanRu </li>
                    <li><img src={home} alt='home' /><span><Link to="/Home" className='text-link'>Home</Link></span></li>
                    <li><img src={shoppingcart} alt='shopping cart' /><span><Link to="/Meals" className='text-link'>Meals</Link></span></li>
                    <li><img src={log} alt='log in' /><span><Link to="/LogIn" className='text-link'>Log In</Link></span></li>
                    <li><img src={sign} alt='sign up' /><span><Link to="/SignUp" className='text-link'>Sign Up</Link></span></li>
                </ul>
            </div>

        </div>
        
    </div>
        {/* the side menu section */}
        <div className='side-menu-container' onClick={sidemenu}>
            <div className='side-menu'>
                <div>
                    <span>Hello</span>
                </div>
                
                <div>
                    <img  src={profilephoto} alt='profile photo' className='profile-photo' />
                    <span>Randa Chirikina</span>
                </div>
                <ul className='inner-side-menu'>
                    <li><img src={home} alt='home' /><span>Home</span></li>
                    <li><img src={shoppingcart} alt='shopping cart' /><span>Meals</span></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default NavigationBar
