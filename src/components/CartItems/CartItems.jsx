import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext"
import remove_icon from "../../Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(ShopContext);
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

        {/* Empty cart message for desktop */}
        {Object.keys(cartItems).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
          </div>
        )}

        {/* Desktop Table Items */}
        {Object.entries(cartItems).map(([cartKey, cartItem]) => {
          const product = all_product.find(p => p.id === cartItem.productId);
          if (!product) return null;

          return (
            <div key={cartKey} className="grid grid-cols-6 gap-4 py-4 px-2 items-center border-b">
              <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">Size: {cartItem.size}</p>
              </div>
              <p className="text-gray-600">${product.new_price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(cartKey)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center text-lg font-bold"
                >
                  -
                </button>
                <span className="w-12 h-8 border border-gray-300 rounded bg-white flex items-center justify-center">{cartItem.quantity}</span>
                <button
                  onClick={() => addToCart(cartItem.productId, cartItem.size)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>
              <p className="font-semibold">${product.new_price * cartItem.quantity}</p>
              <img
                src={remove_icon}
                onClick={() => deleteFromCart(cartKey)}
                alt="remove"
                className="w-4 h-4 cursor-pointer hover:opacity-70"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {Object.keys(cartItems).length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        )}
        {Object.entries(cartItems).map(([cartKey, cartItem]) => {
          const product = all_product.find(p => p.id === cartItem.productId);
          if (!product) return null;

          return (
            <div key={cartKey} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Size: {cartItem.size}</p>
                  <p className="text-gray-600 mb-2">${product.new_price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Qty:</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => removeFromCart(cartKey)}
                          className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="w-12 h-8 border border-gray-300 rounded bg-white flex items-center justify-center text-sm">{cartItem.quantity}</span>
                        <button
                          onClick={() => addToCart(cartItem.productId, cartItem.size)}
                          className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center text-lg font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">${product.new_price * cartItem.quantity}</p>
                      <img
                        src={remove_icon}
                        onClick={() => deleteFromCart(cartKey)}
                        alt="remove"
                        className="w-4 h-4 cursor-pointer hover:opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
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
