import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import useCart from './hooks/useCart';
import './styles/global.css';

const App = () => {
  const { cart, setCart } = useCart();

  return (
    <Router>
      <Header />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/main"
            element={<MainPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/book/:id"
            element={<BookPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;


