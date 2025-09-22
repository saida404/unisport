import { useState } from 'react'
import logo from '../img/logo.jpg'

export default function Navbar() {
  const [otvoren, setOtvoren] = useState(false);

  return (

    <nav className="bg-white-600 text-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* logo*/}
            <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto mr-4"/>
            <span className="ml-2 text-2xl font-bold text-black">SkiUnisport</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-gray-200">Početna</a>
            <a href="#" className="text-black hover:text-gray-200">O nama</a>
            <a href="#" className="text-black hover:text-gray-200">Termini</a>
          </div>

          {/*burger*/}
          <div className="md:hidden">
            <button 
              onClick={() => setOtvoren(!otvoren)} 
              className="focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>
      </div>

      {otvoren && (
        <div className="md:hidden bg-blue-500 px-4 py-3 space-y-2">
          <a href="#" className="block hover:text-gray-200">Početna</a>
          <a href="#" className="block hover:text-gray-200">O nama</a>
          <a href="#" className="block hover:text-gray-200">Termini</a>
        </div>
      )}
    </nav>
  );
}
