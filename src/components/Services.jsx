import Img2 from '../assets/coffee2.png';

const servicesData = [
  {
    id: 1,
    img: Img2,
    title: 'Espresso',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: "100",
  },
  {
    id: 1,
    img: Img2,
    title: 'Americano',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: "300",
  },
  {
    id: 1,
    img: Img2,
    title: 'Cappuccino',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: "500",
  }
]

const Services = () => {
  return (
    <section className="py-10" id='services'>
      <div className="container">
        {/* Header Title */}
        <div data-aos='fade-up' className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee for You</h1>
        </div>

        {/* Services Card Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {servicesData.map((service, i) => (
              <div
                data-aos='fade-up'
                data-aos-delay={service.aosDelay}
                key={i}
                className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-300 max-w-[300px] group relative'>

                {/* Img Section */}
                <div className='h-[122px]'>
                  <img src={service.img} alt={service.title} className="max-w-[200px] block mx-auto transform -translate-y-14 hover:scale-110 group-hover:rotate-6 duration-300" />
                </div>

                {/* Text Content */}
                <div className='p-4 text-center'>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
