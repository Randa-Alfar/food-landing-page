import React from 'react'
import './Footer.css'
import person from '../../../assets/person.svg'
import phone from '../../../assets/phone.svg'
import mail from '../../../assets/mail.svg'
import copyright from '../../../assets/copyright.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-top'>
            <ul>
                <li><img src={person}/><span>Randa Alfar</span></li>
                <li><img src={mail}/><span>randa.chiri@gmail.com</span></li>
                <li><img src={phone}/><span>+201030853277</span></li>
            </ul>

            <div>
                <span>Randa Chirikina</span>
                <span>I will be happy to work with your to creat the best websites. I am so excited to hear your ideas and dreams of the best website in the way that you want and imagine.</span>
            </div>

        </div>

        <div className='footer-copyright'>
            <img src={copyright}/>
            <span>This website was created by Randa Alfar 02/2023.</span>
        </div>

    </div>
  )
}

export default Footer
