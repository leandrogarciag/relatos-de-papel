import 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Relatos de Papel</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/main">Books</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
