import HeroImg from '../assets/coffee2.png'

const Hero = () => {
  return (
    <section className="min-h-[550px] sm:min-h-[600px] bg-brandDark text-white flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content Section */}
          <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
            <h1
              data-aos='fade-up'
              data-aos-once='true'
              className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                We Serve The Richest 
                <span
                  data-aos='zoom-out'
                  data-aos-delay='300'
                  className="text-primary font-cursive">Coffee</span> 
                in the City</h1>
            <div data-aos='fade-up' data-aos-delay='400'>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4 rounded-full text-white hover:scale-105 duration-200">Coffee and Code</button>
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos='zoom-in'
            className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
            <img src={HeroImg} alt="Coffee Cup" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'/>
            <div
              data-aos='fade-left'
              data-aos-delay='400'
              className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1>Hey Coder</h1>
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='400'
              className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
