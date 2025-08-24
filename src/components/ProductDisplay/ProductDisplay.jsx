import React, { useContext } from "react";
import star_icon from "../../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../../Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../components/Context/ShopContext"

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)

  if (!product) {
    return <div className="flex justify-center items-center min-h-96">
      <p className="text-xl text-gray-600">Product not found</p>
    </div>
  }

  return (
    <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left side - Images */}
        <div className="lg:w-1/2">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              <img src={product.image} alt="thumbnail" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border cursor-pointer hover:border-gray-400 flex-shrink-0" />
              <img src={product.image} alt="thumbnail" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border cursor-pointer hover:border-gray-400 flex-shrink-0" />
              <img src={product.image} alt="thumbnail" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border cursor-pointer hover:border-gray-400 flex-shrink-0" />
              <img src={product.image} alt="thumbnail" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border cursor-pointer hover:border-gray-400 flex-shrink-0" />
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img src={product.image} alt={product.name} className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <img src={star_icon} alt="star" className="w-4 h-4" />
              <img src={star_icon} alt="star" className="w-4 h-4" />
              <img src={star_icon} alt="star" className="w-4 h-4" />
              <img src={star_icon} alt="star" className="w-4 h-4" />
              <img src={star_dull_icon} alt="star" className="w-4 h-4" />
            </div>
            <p className="text-gray-600">(122)</p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-4">
            <div className="text-gray-500 text-xl line-through">
              ${product.old_price}
            </div>
            <div className="text-red-500 text-2xl md:text-3xl font-bold">
              ${product.new_price}
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-600 leading-relaxed">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Select Size</h3>
            <div className="flex gap-3">
              <button className="w-12 h-12 border border-gray-300 rounded hover:border-red-500 hover:text-red-500 transition-colors">S</button>
              <button className="w-12 h-12 border border-gray-300 rounded hover:border-red-500 hover:text-red-500 transition-colors">M</button>
              <button className="w-12 h-12 border border-gray-300 rounded hover:border-red-500 hover:text-red-500 transition-colors">L</button>
              <button className="w-12 h-12 border border-gray-300 rounded hover:border-red-500 hover:text-red-500 transition-colors">XL</button>
              <button className="w-12 h-12 border border-gray-300 rounded hover:border-red-500 hover:text-red-500 transition-colors">XXL</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {addToCart(product.id)}}
            className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          >
            ADD TO CART
          </button>

          {/* Product Info */}
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Category:</span> Women, T-shirt, Crop Top
            </p>
            <p>
              <span className="font-medium">Tags:</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
