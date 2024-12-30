/* eslint-disable react/prop-types */
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import Cart from '../components/Cart';
import '../styles/MainPage.css';

const books = [
  { id: 1, title: 'Cien Años de Soledad' },
  { id: 2, title: 'Don Quijote de la Mancha' },
  { id: 3, title: 'El Principito' },
];

const MainPage = ({ cart, setCart }) => {
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (book) => {
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
      // Incrementar la cantidad si el libro ya existe
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

  return (
    <div className="main-page">
      <div className="main-page__content">
        <SearchBar search={search} setSearch={setSearch} />
        <ul className="main-page__list">
          {filteredBooks.map(book => (
            <li key={book.id} className="main-page__item">
              <Link to={`/book/${book.id}`} className="main-page__link">
                {book.title}
              </Link>
              <button
                className="main-page__button"
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default MainPage;


