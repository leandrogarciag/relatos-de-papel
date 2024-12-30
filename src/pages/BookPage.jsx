/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useParams } from 'react-router-dom';

const books = [
  { id: 1, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
  { id: 2, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
  { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
];

const BookPage = ({ cart, setCart }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  const addToCart = () => {
    setCart(prev => [...prev, book]);
  };

  return (
    <div className="book-page">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default BookPage;
