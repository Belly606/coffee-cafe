// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Banner from './components/Banner';
import AppStore from './components/AppStore';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    })
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
