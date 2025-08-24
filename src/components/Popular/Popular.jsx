import React from 'react'
import data_product from '../../Assets/Frontend_Assets/data'
import Item from '../../components/Item/Item'

const Popular = () => {
  return (
    <section className='flex flex-col items-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-8'>
        <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">POPULAR IN WOMEN</h1>
        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gray-800 rounded"></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12 w-full max-w-7xl'>
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </section>
  )
}

export default Popular
