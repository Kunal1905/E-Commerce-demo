import React from 'react'
import footer_logo from "../../Assets/Frontend_Assets/logo_big.png"
import instagram_icon from "../../Assets/Frontend_Assets/instagram_icon.png"
import pintester_icon from "../../Assets/Frontend_Assets/pintester_icon.png"
import whatsapp_icon from "../../Assets/Frontend_Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <footer className='bg-gray-50 pt-12 pb-6 px-4 md:px-8'>
        <div className="max-w-6xl mx-auto">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
                <img src={footer_logo} alt="Shopper logo" className="w-16 h-16 mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-gray-800">SHOPPER</p>
            </div>

            {/* Links */}
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-gray-600">
                <li className="hover:text-gray-800 cursor-pointer transition-colors">Company</li>
                <li className="hover:text-gray-800 cursor-pointer transition-colors">Products</li>
                <li className="hover:text-gray-800 cursor-pointer transition-colors">Offices</li>
                <li className="hover:text-gray-800 cursor-pointer transition-colors">About</li>
                <li className="hover:text-gray-800 cursor-pointer transition-colors">Contact</li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                    <img src={instagram_icon} alt="Instagram" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                    <img src={pintester_icon} alt="Pinterest" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                    <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-300 pt-6 text-center">
                <p className="text-gray-600">Copyright @ 2025 - All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
