import appStoreImg from '../assets/website/app_store.png';
import playStoreImg from '../assets/website/play_store.png';
import bgPng from '../assets/website/coffee-beans-bg.png'

const backgroundStyle = {
  backgroundImage: `url(${bgPng})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
} 

const AppStore = () => {
  return (
    <>
      <section style={backgroundStyle} className='py-14'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos='fade-up'
              className='space-y-6 max-w-xl mx-auto'>
              {/* Text Content */}
              <h1 className='text-2xl sm:text-4xl text-center sm:text-left text-white/90 font-semibold pl-3'>Coffee Cafe is Available for Android and IOS</h1>

              {/* Logo Section */}
              <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                <a href="#">
                  <img src={appStoreImg} alt="App Store Logo" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
                <a href="#">
                  <img src={playStoreImg} alt="Play Store Logo" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppStore
