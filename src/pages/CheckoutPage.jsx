/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

const CheckoutPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add some books before checking out!');
      return;
    }
    alert('Order placed successfully!');
    setCart([]); // Vaciar el carrito después del pedido
    navigate('/main'); // Redirigir a la página principal
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-page__title">Checkout</h1>
      {cart.length > 0 ? (
        <div className="checkout-page__content">
          <ul className="checkout-page__list">
            {cart.map((book) => (
              <li key={book.id} className="checkout-page__item">
                <span className="checkout-page__item-title">
                  {book.title} ({book.quantity})
                </span>
              </li>
            ))}
          </ul>
          <button className="checkout-page__button" onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      ) : (
        <p className="checkout-page__empty-message">Your cart is empty</p>
      )}
    </div>
  );
};

export default CheckoutPage;


