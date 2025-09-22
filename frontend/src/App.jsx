import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer'
import Hero from './components/hero';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
        <Hero/>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          SkiUniSport
        </h1>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
