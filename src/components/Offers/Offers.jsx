import React from 'react'
import exclusive_image from "../../Assets/Frontend_Assets/exclusive_image.png"

const Offers = () => {
  return (
    <section className='bg-gradient-to-r from-purple-100 to-pink-100 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 mx-4 md:mx-8 lg:mx-16 rounded-lg my-8 md:my-12'>
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">Exclusive</h1>
            <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">Offers For You</h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium mb-6 md:mb-8">ONLY ON BEST SELLER PRODUCTS</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-medium transition-colors cursor-pointer">Check Now</button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
            <img src={exclusive_image} alt="exclusive offers" className="w-full max-w-md lg:max-w-lg object-contain" />
        </div>
    </section>
  )
}

export default Offers
