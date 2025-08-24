import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import dropdown_icon from "../Assets/Frontend_Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("🛒 all_product in ShopCategory:", all_product); // ✅ Debug

  if (!all_product) {
    return <div className="flex justify-center items-center min-h-screen">
      <p className="text-xl text-gray-600">Loading products...</p>
    </div>; // Prevents crash
  }

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Banner */}
      <div className="mb-8">
        <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-100 rounded-lg overflow-hidden">
          <img src={props.banner} alt={`${props.category} category banner`} className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Sort and Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b">
        <p className="text-gray-600">
          <span className="font-medium">Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-800 transition-colors">
          <span className="text-gray-600">Sort by</span>
          <img src={dropdown_icon} alt="dropdown" className="w-3 h-3" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
        {all_product.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-medium transition-colors">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
