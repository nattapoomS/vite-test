import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Highlights from './components/highlight';
import Function from './components/function';
import Earnings from './components/Earnings';
import Effortless from './components/Effortless';

import Footer from './components/footer';
import MouseSpotlight from './components/MouseSpotlight';
import SpecialOffer from './components/SpecialOffer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <MouseSpotlight />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <SpecialOffer />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Function />

        <Effortless />
      </main>
      <Footer />
    </div>
  );
}

export default App;
