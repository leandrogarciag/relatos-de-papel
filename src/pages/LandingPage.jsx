import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1>Welcome to Relatos de Papel</h1>
      <p>Redirecting to the main page...</p>
    </div>
  );
};

export default LandingPage;
