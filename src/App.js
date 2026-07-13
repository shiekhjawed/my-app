import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CakesSection from './components/CakesSection';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';     // ← Correct import

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === 'home' &&  (
        <>
          <Hero />
          <CakesSection />
          <Footer />         
        </>
      )}

      {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
