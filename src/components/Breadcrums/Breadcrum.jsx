import React from 'react'
import arrow_icon from"../../Assets/Frontend_Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;

    if (!product) {
        return <div className="px-4 md:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>HOME</span>
                <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
                <span>SHOP</span>
            </div>
        </div>
    }

  return (
    <div className='px-4 md:px-8 py-4'>
        <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <span className="hover:text-gray-800 cursor-pointer">HOME</span>
            <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
            <span className="hover:text-gray-800 cursor-pointer">SHOP</span>
            <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
            <span className="hover:text-gray-800 cursor-pointer uppercase">{product.category}</span>
            <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
            <span className="text-gray-800 font-medium truncate max-w-xs">{product.name}</span>
        </div>
    </div>
  )
}

export default Breadcrum
