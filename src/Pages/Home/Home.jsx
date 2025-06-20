import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import FeaturedJobs from '../../Components/FeaturedJobs/FeaturedJobs'
import FAQ from '../../Components/FAQ/FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedJobs />
      <FAQ />
    </div>
  )
}

export default Home
