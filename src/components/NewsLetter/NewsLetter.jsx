import React from 'react'

const NewsLetter = () => {
  return (
    <section className='bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-20 px-4 md:px-8 text-center'>
        <div className="max-w-4xl mx-auto">
            <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Get Exclusive Offers On Your Email</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-12">Subscribe to our newsletter and stay updated</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                    type="email"
                    placeholder='Your Email Id'
                    className="flex-1 px-6 py-3 md:py-4 border border-gray-300 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 md:py-4 rounded-full font-medium transition-colors whitespace-nowrap">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter
