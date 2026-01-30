import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slide1 from '../assets/Slide1.jpeg'; 
import Slide2 from '../assets/Slide2.jpeg';
import Slide3 from '../assets/Slide3.jpeg';

export default function LandingPage() {
  const nav = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Imported images
  const images = [Slide1, Slide2, Slide3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl text-blue-600 font-bold tracking-tight italic">CALL-A-RIDE</h1>
        <button 
          onClick={() => nav('/trip')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          Launch App
        </button>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A smarter, safer way to move around your city
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Real-time rides with transparent routes, safety timelines, and
            clear driver intent — no guesswork, no surprises.
          </p>

          <div className="mt-8 flex gap-4">
            <button 
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              onClick={() => nav('/driver-onboarding')}
            >
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100">
              View Demo
            </button>
          </div>
        </div>

        {/* MOCK PREVIEW */}
        <div className="relative bg-slate-100 rounded-3xl h-[400px] w-full overflow-hidden shadow-2xl border-8 border-slate-900">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`App Preview ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Progress dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10">How it works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl mb-3">📍</div>
              <h4 className="font-semibold mb-2">Nearby Matching</h4>
              <p className="text-sm text-gray-600">
                We connect you with the closest available drivers in real time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl mb-3">🛡️</div>
              <h4 className="font-semibold mb-2">Safety Timeline</h4>
              <p className="text-sm text-gray-600">
                Track every key moment of your trip — from pickup to arrival.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-2xl mb-3">🧠</div>
              <h4 className="font-semibold mb-2">Passenger Intelligence</h4>
              <p className="text-sm text-gray-600">
                Drivers understand your preferences before the ride begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Built for clarity, trust, and control
            </h3>
            <p className="text-gray-600 mb-4">
              Most ride apps feel opaque. We believe both passengers and drivers
              deserve visibility, intent, and mutual respect.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Clear routes and ETAs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Driver intent transparency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Passenger comfort preferences
              </li>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-2xl h-[260px] flex items-center justify-center text-gray-400 border border-slate-200">
            Feature Illustration Placeholder
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to experience smarter rides?
          </h3>
          <p className="text-blue-100 mb-8">
            Join the next generation of transparent ride-hailing.
          </p>
          <button 
            onClick={() => nav('/trip')}
            className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Launch App
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-100">
        © {new Date().getFullYear()} Call-A-Ride. All rights reserved.
      </footer>
    </div>
  );
}