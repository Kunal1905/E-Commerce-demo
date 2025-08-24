import React, {createContext, useState} from "react";
import all_product from "../../Assets/Frontend_Assets/all_product.js"

export const ShopContext = createContext({});

const ShopContextProvider = (props) => {
    // Cart items now stored as: { "productId_size": { productId, size, quantity } }
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId, size = "M") => {
        const cartKey = `${itemId}_${size}`;
        setCartItems((prev) => {
            const newCart = {...prev};
            if (newCart[cartKey]) {
                newCart[cartKey].quantity += 1;
            } else {
                newCart[cartKey] = {
                    productId: itemId,
                    size: size,
                    quantity: 1
                };
            }
            console.log("Cart updated:", newCart);
            return newCart;
        })
    }

    const removeFromCart = (cartKey) => {
        setCartItems((prev) => {
            const newCart = {...prev};
            if (newCart[cartKey] && newCart[cartKey].quantity > 1) {
                newCart[cartKey].quantity -= 1;
            } else {
                delete newCart[cartKey];
            }
            return newCart;
        })
    }

    const deleteFromCart = (cartKey) => {
        setCartItems((prev) => {
            const newCart = {...prev};
            delete newCart[cartKey];
            return newCart;
        })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        Object.values(cartItems).forEach(cartItem => {
            const product = all_product.find(p => p.id === cartItem.productId);
            if (product) {
                totalAmount += product.new_price * cartItem.quantity;
            }
        });
        return totalAmount;
    }

    // Legacy function for backward compatibility
    const RemoveFromCart = (itemId) => {
        // Find cart items with this product ID and remove them
        setCartItems((prev) => {
            const newCart = {...prev};
            Object.keys(newCart).forEach(key => {
                if (newCart[key].productId === itemId) {
                    delete newCart[key];
                }
            });
            return newCart;
        })
    }

    const contextValue = {
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        RemoveFromCart
    };

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
