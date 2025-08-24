import React from 'react'
import data_product from '../../Assets/Frontend_Assets/data'
import Item from "../Item/Item"

const RelatedProducts = () => {
  // Show only first 4 related products to avoid too many items
  const relatedItems = data_product.slice(0, 4);

  return (
    <section className='flex flex-col items-center gap-6 md:gap-10 py-12 md:py-16 px-4 md:px-8'>
        <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Related Products</h1>
        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gray-800 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 w-full max-w-4xl">
            {relatedItems.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </section>
  )
}

export default RelatedProducts
