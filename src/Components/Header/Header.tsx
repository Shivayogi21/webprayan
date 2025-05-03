import React from 'react'
import './Header.css'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide items-left justify-left w:2/3">
          <img src="/assets/img/logo-w.png.png" alt="" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="hover:text-green-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="tel:+1234567890" aria-label="Contact">
            <FaPhoneAlt className="hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  )
}
