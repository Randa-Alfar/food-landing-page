import React from 'react'
import HomeFirstSection from '../Components/home/Section1/HomeFirstSection'
import HomeSecondSection from '../Components/home/Section2/HomeSecondSection'
import HomeThirdSection from '../Components/home/Section3/HomeThirdSection'
import HomeFourthSection from '../Components/home/Section4/HomeFourthSection'
import Testimonial from '../Components/home/Section5/Testimonial'
import Footer from '../Components/layout/Footer/Footer'

const Home = () => {
  return (

    <div className='Home-container'>
      <HomeFirstSection/>
      <HomeSecondSection/>
      <HomeThirdSection/>
      <HomeFourthSection/>  
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
