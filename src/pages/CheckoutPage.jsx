/* eslint-disable react/prop-types */
import 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Order placed successfully!');
    setCart([]);
    navigate('/main');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <ul>
        {cart.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
