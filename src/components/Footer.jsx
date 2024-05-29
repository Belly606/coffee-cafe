import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import footerBg from '../assets/website/coffee-footer.jpg';

const footerLinks = [
  {
    id: 1,
    name: 'Home',
    link: '#'
  },
  {
    id: 2,
    name: 'Services',
    link: '#'
  },
  {
    id: 3,
    name: 'About',
    link: '#'
  },
  {
    id: 4,
    name: 'Contact',
    link: '#'
  },
];

const bgImage = {
  backgroundImage: `url(${footerBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '400px',
  width: '100%',
}

const Footer = () => {
  return (
    <footer style={bgImage} className="">
      <div className="bg-black/40 min-h-[400px] text-white">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a href="#" className="text-2xl sm:text-3xl tracking-widest font-semibold font-cursive">Coffee Cafe</a>
            <p className="pt-4">Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
            <a href="https://www.youtube.com/@TheCodingJourney" target="_blank" className="inline-block py-2 px-4 mt-5 rounded-full text-sm bg-[#3d2517]">Visit Our Youtube Channel</a>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First Col Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold mb-3">Footer Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.link} className="inline-block hover:scale-105 duration-200">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Col Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.link} className="inline-block hover:scale-105 duration-200">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comany Adress Section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold mb-3">Adress</h1>
              <div>
                <p className="mb-3">Noida, India</p>
                <p className="mb-3">+91 1234567890</p>

                {/* Social Links */}
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="inline-block text-3xl hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaInstagram className="inline-block text-3xl hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaLinkedin className="inline-block text-3xl hover:scale-105 duration-200"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
