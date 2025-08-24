import React from 'react'
import {Link} from "react-router-dom"

const Item = (props) => {
  return (
    <div className='group cursor-pointer transition-transform hover:scale-105 duration-300'>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0,0)}>
          <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-100 rounded-lg mb-3 overflow-hidden">
            <img src={props.image} alt={props.name} className="w-full h-full object-contain" />
          </div>
        </Link>
        <p className="text-gray-800 font-medium mb-2 truncate">{props.name}</p>
        <div className='flex items-center gap-4'>
            <div className='text-gray-800 text-lg font-semibold'>
                ${props.new_price}
            </div>
            <div className='text-gray-500 text-lg font-medium line-through'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
