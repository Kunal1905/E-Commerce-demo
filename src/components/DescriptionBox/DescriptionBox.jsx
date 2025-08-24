import React, { useState } from 'react'

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='px-4 md:px-8 py-6 max-w-4xl mx-auto'>
        <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'description'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Reviews (122)
            </button>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            {activeTab === 'description' ? (
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment. This versatile piece is perfect for layering or wearing on its own during warmer weather.</p>
                <p>Made from high-quality cotton blend fabric that ensures comfort and durability. The modern fit and classic design make it suitable for both casual and semi-formal occasions. Available in multiple sizes and colors to suit your personal style.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="font-medium">Sarah M.</span>
                    <span className="text-gray-500 text-sm">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700">Great quality and perfect fit! The fabric is soft and comfortable. Highly recommend.</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      ★★★★☆
                    </div>
                    <span className="font-medium">Mike R.</span>
                    <span className="text-gray-500 text-sm">Verified Purchase</span>
                  </div>
                  <p className="text-gray-700">Nice product, good value for money. Shipping was fast.</p>
                </div>
                <div className="text-center pt-4">
                  <button className="text-red-500 hover:text-red-600 font-medium">View All Reviews</button>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default DescriptionBox
