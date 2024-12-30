/* eslint-disable react/prop-types */
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Cart from '../components/Cart';
import '../styles/MainPage.css';

const books = [
  { id: 1, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', description: 'Un clásico de la literatura latinoamericana.' },
  { id: 2, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', description: 'Una obra maestra de la literatura española.' },
  { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry', description: 'Un cuento filosófico para todas las edades.' },
];

const MainPage = ({ cart, setCart }) => {
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);
    if (existingBook) {
      // Incrementar la cantidad si el libro ya existe
      setCart(
        cart.map((item) =>
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
      <div className="main-page__layout">
        <div className="main-page__content">
          <SearchBar search={search} setSearch={setSearch} />
          <div className="main-page__list">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="main-page__cart">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
