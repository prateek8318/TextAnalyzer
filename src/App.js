import React, { useState } from 'react';
import TextAnalyzer from './components/TextAnalyzer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  return (
        
        <div className="w-f">
          <Navbar dark={isDarkMode} setDark={setIsDarkMode}/>
      <TextAnalyzer dark={isDarkMode} />
      <Footer/>
      </div>
      
  );
}

export default App;