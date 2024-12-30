/* eslint-disable react/prop-types */
import '../styles/Cart.css';

const Cart = ({ cart, setCart }) => {
  const incrementQuantity = (book) => {
    setCart(
      cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (book) => {
    if (book.quantity > 1) {
      setCart(
        cart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter(item => item.id !== book.id));
    }
  };

  const removeFromCart = (book) => {
    setCart(cart.filter(item => item.id !== book.id));
  };

  return (
    <div className="cart">
      <h2 className="cart__title">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="cart__list">
          {cart.map((book) => (
            <li key={book.id} className="cart__item">
              <span className="cart__item-title">
                {book.title} ({book.quantity})
              </span>
              <div className="cart__item-quantity">
                <button
                  className="cart__quantity-button"
                  onClick={() => decrementQuantity(book)}
                >
                  -
                </button>
                <span className="cart__quantity">{book.quantity}</span>
                <button
                  className="cart__quantity-button"
                  onClick={() => incrementQuantity(book)}
                >
                  +
                </button>
              </div>
              <button
                className="cart__remove-button"
                onClick={() => removeFromCart(book)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart__empty-message">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;



