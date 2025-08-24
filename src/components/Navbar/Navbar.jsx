import React, { useState, useContext } from 'react'
import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"

function Navbar() {
  const [menu, setMenu] = useState("shop")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useContext(ShopContext)

  // Calculate total items in cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <nav className='relative flex justify-between items-center px-4 md:px-8 py-4 shadow-md bg-white'>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <p className="text-xl md:text-2xl font-semibold text-gray-800">Shopper</p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-600 font-medium">
        <li onClick={() => setMenu("shop")} className="relative cursor-pointer">
          <Link to="/" className="hover:text-gray-800 transition-colors">Shop</Link>
          {menu === "shop" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded"></div>}
        </li>
        <li onClick={() => setMenu("mens")} className="relative cursor-pointer">
          <Link to="/mens" className="hover:text-gray-800 transition-colors">Mens</Link>
          {menu === "mens" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded"></div>}
        </li>
        <li onClick={() => setMenu("womens")} className="relative cursor-pointer">
          <Link to="/women" className="hover:text-gray-800 transition-colors">Womens</Link>
          {menu === "womens" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded"></div>}
        </li>
        <li onClick={() => setMenu("kids")} className="relative cursor-pointer">
          <Link to="/kids" className="hover:text-gray-800 transition-colors">Kids</Link>
          {menu === "kids" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded"></div>}
        </li>
      </ul>

      {/* Desktop Login & Cart */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/login">
          <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-50 transition-colors">Login</button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="cart" className="w-6 h-6" />
          <div className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>{getTotalCartItems()}</div>
        </Link>
      </div>

      {/* Mobile Cart & Menu */}
      <div className="md:hidden flex items-center gap-4">
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="cart" className="w-6 h-6" />
          <div className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>0</div>
        </Link>
        <button
          className="flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col py-4">
          <li onClick={() => {setMenu("shop"); setIsMenuOpen(false);}} className="px-6 py-3 border-b hover:bg-gray-50">
            <Link to="/" className="block text-gray-600 hover:text-gray-800">Shop</Link>
          </li>
          <li onClick={() => {setMenu("mens"); setIsMenuOpen(false);}} className="px-6 py-3 border-b hover:bg-gray-50">
            <Link to="/mens" className="block text-gray-600 hover:text-gray-800">Mens</Link>
          </li>
          <li onClick={() => {setMenu("womens"); setIsMenuOpen(false);}} className="px-6 py-3 border-b hover:bg-gray-50">
            <Link to="/women" className="block text-gray-600 hover:text-gray-800">Womens</Link>
          </li>
          <li onClick={() => {setMenu("kids"); setIsMenuOpen(false);}} className="px-6 py-3 border-b hover:bg-gray-50">
            <Link to="/kids" className="block text-gray-600 hover:text-gray-800">Kids</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-50">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-600">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
