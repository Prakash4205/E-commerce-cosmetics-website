import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart, clearCart, user }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } else {
      setCartItems(cart); 
    }
  }, [cart]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setCartItems(cart);
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
      navigate("/bill", { state: { cart: cartItems, totalAmount } });
    };

  const handleIncrement = (itemId) => {
    updateQuantity(itemId, 1);
  };

  const handleDecrement = (itemId) => {
    updateQuantity(itemId, -1);
  };

  const updateQuantity = (itemId, delta) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    clearCart();
  };

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items-wrapper">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="item-img" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: Rs. {item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="summary-wrapper">
          <h3 className="total">Total: Rs. {totalAmount.toFixed(2)}</h3>
          <button onClick={handleCheckout} className="summary-btn checkout">
            ✅ Proceed to Checkout
          </button>
          <button onClick={handleClearCart} className="summary-btn clear">
            🧹 Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
