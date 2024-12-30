import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Relatos de Papel</h1>
      <nav className="header__nav">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="/main">Books</Link>
        <Link className="header__link" to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
