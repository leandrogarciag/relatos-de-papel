/* eslint-disable react/prop-types */
import  { useState } from 'react';
import SearchBar from '../components/SearchBar';
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

  return (
    <div className="main-page">
      <SearchBar search={search} setSearch={setSearch} />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title}
            <button onClick={() => setCart([...cart, book])}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default MainPage;

