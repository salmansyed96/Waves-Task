import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5f249e] to-[#a800c4] text-white py-8">
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
          <h2 className="text-lg font-bold">Address</h2>
          <p>1234 Street Name,</p>
          <p>City, State, 12345</p>
          <p>Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
