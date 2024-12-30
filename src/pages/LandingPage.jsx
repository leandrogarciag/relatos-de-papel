import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1 className="landing-page__title">Welcome to Relatos de Papel</h1>
      <p className="landing-page__subtitle">Redirecting to the main page...</p>
      <div className="landing-page__spinner"></div>
    </div>
  );
};

export default LandingPage;
