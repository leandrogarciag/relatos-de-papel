/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../styles/BookCard.css';

/**
 * Componente que representa una tarjeta de libro.
 * @param {Object} book - Objeto del libro con propiedades: id, title, author, description.
 * @param {Function} addToCart - Función para añadir el libro al carrito.
 */
const BookCard = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <h3 className="book-card__title">{book.title}</h3>
      <p className="book-card__author">Autor: {book.author}</p>
      <p className="book-card__description">{book.description}</p>
      <div className="book-card__actions">
        <Link to={`/book/${book.id}`} className="book-card__link">
          Ver Detalles
        </Link>
        <button
          className="book-card__button"
          onClick={() => addToCart(book)}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default BookCard;
