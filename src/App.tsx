import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specializations from './components/Specializations';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Specializations />
    </div>
  );
}

export default App;