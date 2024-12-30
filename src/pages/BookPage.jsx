/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import '../styles/BookPage.css';
import Cart from '../components/Cart';

const books = [
  { id: 1, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', description: 'Un clásico de la literatura latinoamericana.' },
  { id: 2, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', description: 'Una obra maestra de la literatura española.' },
  { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry', description: 'Un cuento filosófico para todas las edades.' },
];

const BookPage = ({ cart, setCart }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  const addToCart = () => {
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
      // Incrementar la cantidad si el libro ya está en el carrito
      setCart(
        cart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Agregar el libro con cantidad inicial de 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const incrementQuantity = () => {
    setCart(
      cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = () => {
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook.quantity > 1) {
      setCart(
        cart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      // Eliminar el libro del carrito si la cantidad es 1
      setCart(cart.filter(item => item.id !== book.id));
    }
  };

  if (!book) {
    return <p className="book-page__not-found">El libro no existe.</p>;
  }

  const bookInCart = cart.find(item => item.id === book.id);

  return (
    <div className="book-page">
      <div className="book-page__details">
        <h1 className="book-page__title">{book.title}</h1>
        <p className="book-page__author">Autor: {book.author}</p>
        <p className="book-page__description">{book.description}</p>
        <div className="book-page__actions">
          {bookInCart ? (
            <div className="book-page__quantity">
              <button className="book-page__button" onClick={decrementQuantity}>
                -
              </button>
              <span>{bookInCart.quantity}</span>
              <button className="book-page__button" onClick={incrementQuantity}>
                +
              </button>
            </div>
          ) : (
            <button className="book-page__button" onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Mostrar el carrito */}
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default BookPage;
