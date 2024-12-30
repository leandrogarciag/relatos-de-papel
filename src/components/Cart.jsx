/* eslint-disable react/prop-types */
import 'react';
import '../styles/Cart.css';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (book) => {
    setCart(cart.filter(item => item.id !== book.id));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((book, index) => (
            <li key={index}>
              {book.title}
              <button onClick={() => removeFromCart(book)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
