import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#5f249e] to-[#390942] text-white py-8">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/assets/footerimg.png)' }}></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* First Section: Logo and Social Media Icons */}
        <div className="flex flex-col items-start">
          <img src="/assets/footarlogo.png" alt="Logo" className="w-32 h-auto mb-4" />
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="text-white hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Second Section: About Us and Menu */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold">About WAVES</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">Venue</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/team" className="hover:underline">Team</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Third Section: Address */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-bold">Head Office Mumbai</h2>
          <div className="flex items-start space-x-2 leading-relaxed">
            <FaMapMarkerAlt className="text-white font-medium" size={20} />
            <p>NFDC - FD Complex,<br /> 24, Dr. Gopalrao Deshmukh Marg,<br /> Mumbai 400 026, Maharashtra</p>
          </div>
          <div className="flex items-center space-x-2 leading-relaxed">
            <FaPhoneAlt className="text-white font-medium" size={20} />
            <p>+91 22 35248444</p>
          </div>
          <div className="flex items-center space-x-2 leading-relaxed">
            <FaEnvelope className="text-white font-medium" size={20} />
            <p>nfdc@nfdcindia.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
