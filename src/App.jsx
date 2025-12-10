import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Highlights from './components/highlight';
import Function from './components/function';
import Earnings from './components/Earnings';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Function />
        <Earnings />
      </main>
    </div>
  );
}

export default App;
