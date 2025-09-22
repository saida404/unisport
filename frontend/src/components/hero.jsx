import promoVideo from '../img/hero.mp4'
import vucko from '../img/vucko.png'
import instruktor from '../img/instruktor.jpg'
import svi2 from '../img/svi2.jpg'
import instruktorica from '../img/instruktorica.jpg'
//import { getTerminiA } from '../api/termini'
import { getTermini } from '../api/termini'

import { useState } from 'react'

export default function Hero() {
    const [termini, setTermini] = useState([]);
   
    const handleClick = async () => {
        try {
          const data = await getTermini();
          setTermini(data);
        } catch (error) {
          console.error(error);
        }
    }

    return (
<>
<section className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-20 min-h-[90vh] overflow-hidden">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105 object-center"
            src={promoVideo}
            autoPlay
            loop
            muted
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            SkiUniSport
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-8 text-white">
            Pronađi svoj savršen termin za skijanje ili snowboard i uživaj u zabavi sa prijateljima!
            </p>
            <div>
            <button 
                onClick={handleClick}
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                    Saznaj više
                </button>
        {termini.length > 0 && (
          <ul>
            {termini.map((t) => (
                 <li key={t.id_termini} className="mb-2">
                                    {t.tip_termina} ({t.nivo}) – {t.datum_pocetka} do {t.datum_kraja} – Cijena: {t.cijena}€
                                </li>
            ))}
          </ul>
        )}
            </div>
        </div>
    </section>




  <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700">
            O SkiUniSport-u
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Više od <span className="font-semibold text-orange-500">20 godina tradicije</span> na 
            olimpijskoj ljepotici Bjelašnici i Igmanu!  
            Tokom svih ovih godina stotine zadovoljnih mališana i odraslih prošlo je kroz naše 
            programe i uživalo u nezaboravnim trenucima na snijegu.  
            Naš tim iskusnih instruktora brine o tome da svaki polaznik osjeti čar zimskih sportova, 
            bilo da se prvi put susreće sa skijama ili snowboardom, ili želi usavršiti svoju tehniku.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Nudimo <span className="font-semibold">grupne i individualne treninge</span> skijanja i 
            snowboarda, prilagođene svim uzrastima i nivoima znanja.  
            Grupni treninzi su savršeni za druženje, razmjenu iskustava i zajedničko napredovanje, 
            dok individualni časovi omogućavaju personalizovan pristup i brže rezultate.
            </p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-lg transition">
            Saznaj više
            </button>
        </div>
    </section>

    <section className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
            
            <img
            src= {instruktor}
            alt="Skijaš"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <img
            src={svi2}
            alt="Snowboard"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <img
            src={instruktorica}
            alt="Planina"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

        </div>
    </section>
            

</>

  );
}
