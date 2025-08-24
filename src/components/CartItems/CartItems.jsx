import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext"
import remove_icon from "../../Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, RemoveFromCart } = useContext(ShopContext);
  return (
    <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      {/* Mobile: Card Layout, Desktop: Table Layout */}
      <div className="hidden lg:block">
        {/* Desktop Table Header */}
        <div className="grid grid-cols-6 gap-4 py-4 px-2 font-semibold text-gray-700 border-b-2">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Desktop Table Items */}
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="grid grid-cols-6 gap-4 py-4 px-2 items-center border-b">
                <img src={e.image} alt={e.name} className="w-16 h-16 object-cover rounded" />
                <p className="font-medium">{e.name}</p>
                <p className="text-gray-600">${e.new_price}</p>
                <button className="w-12 h-8 border border-gray-300 rounded text-center bg-white">{cartItems[e.id]}</button>
                <p className="font-semibold">${e.new_price*cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => RemoveFromCart(e.id)}
                  alt="remove"
                  className="w-4 h-4 cursor-pointer hover:opacity-70"
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex gap-4">
                  <img src={e.image} alt={e.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{e.name}</h3>
                    <p className="text-gray-600 mb-2">${e.new_price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Qty:</span>
                        <button className="w-12 h-8 border border-gray-300 rounded text-center bg-white">{cartItems[e.id]}</button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">${e.new_price*cartItems[e.id]}</p>
                        <img
                          src={remove_icon}
                          onClick={() => RemoveFromCart(e.id)}
                          alt="remove"
                          className="w-4 h-4 cursor-pointer hover:opacity-70"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-8">
        {/* Cart Totals */}
        <div className="lg:w-1/2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between py-2">
                <p>Shipping Fee</p>
                <p className="text-green-600">Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-2 font-semibold text-lg">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>

        {/* Promo Code */}
        <div className="lg:w-1/2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4 text-gray-600">If you have a promo code, Enter it here</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="promo code"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
