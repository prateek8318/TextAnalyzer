import React, { useState } from 'react';
import './styles/globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TextAnalyzer from './pages/TextAnalyzer';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  const [currentPage, setCurrentPage] = useState('analyzer');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={navigateToPage} />
      <main className="page-shell flex-grow">
        {currentPage === 'home' ? (
          <HomePage navigateToPage={navigateToPage} />
        ) : currentPage === 'resume' ? (
          <ResumeBuilder navigateToPage={navigateToPage} />
        ) : (
          <TextAnalyzer navigateToPage={navigateToPage} />
        )}
      </main>
      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;
