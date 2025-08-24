import React from 'react'
import hand_icon from "../../Assets/Frontend_Assets/hand_icon.png"
import arrow_icon from "../../Assets/Frontend_Assets/arrow.png"
import hero_image from "../../Assets/Frontend_Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-pink-100 to-green-50 flex flex-col lg:flex-row items-center'>
        <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 px-6 md:px-12 lg:px-24 py-8 lg:py-0 text-center lg:text-left">
            <h2 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-semibold">NEW ARRIVALS ONLY</h2>
            <div className="leading-tight">
                <div className='flex items-center justify-center lg:justify-start gap-4 md:gap-6'>
                    <p className="text-gray-800 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">new</p>
                    <img src={hand_icon} alt="hand icon" className="w-12 md:w-16 lg:w-20 xl:w-24" />
                </div>
                <p className="text-gray-800 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">collections</p>
                <p className="text-gray-800 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">for everyone</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 w-fit mx-auto lg:mx-0 bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full mt-4 md:mt-8 cursor-pointer hover:bg-red-600 transition-colors">
                <div className="text-lg md:text-xl font-medium">Latest Collection</div>
                <img src={arrow_icon} alt="arrow" className="w-4 md:w-5" />
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center p-6 lg:p-0'>
            <img src={hero_image} alt="hero" className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain" />
        </div>
    </div>
  )
}

export default Hero
