import { useState, useEffect } from 'react';
import useTripStore from '../store/tripStore';
import MapView from '../components/MapView';
import SafetyModal from '../components/SafetyModal';
// Mic and 'Navigation' for the UI
// import { MapPin, SlidersHorizontal, Mic, Navigation, MousePointer2 } from 'lucide-react';

function Tracking() {
  const trip = useTripStore((state) => state.trip);
  const startTrip = useTripStore((state) => state.startTrip);

  // const [showPrefs, setShowPrefs] = useState(false);
  // const [pickUpInput, setPickUpInput] = useState("");
  // const [destInput, setDestInput] = useState("");
  
  // States to control dropdown visibility
  // const [activeInput, setActiveInput] = useState(null); // 'pickup' or 'destination'

  // const isIdle = trip.status === 'idle';

  // const handlePickUpInput = (e) => setPickUpInput(e.target.value);
  // const handleDestInput = (e) => setDestInput(e.target.value);

  // // --- VOICE LOGIC ---
  // const startListening = (target) => {
  //   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  //   if (!SpeechRecognition) return alert("Browser does not support voice recognition.");

  //   const recognition = new SpeechRecognition();
  //   recognition.start();

  //   recognition.onresult = (event) => {
  //     const transcript = event.results[0][0].transcript;
  //     if (target === 'pickup') setPickUpInput(transcript);
  //     else setDestInput(transcript);
  //   };
  // };

  // Hardcoded state for demo
  const [isDeviated, setIsDeviated] = useState(false);
  const [progress, setProgress] = useState(65); // 65% of trip

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* 1. THE MAP SECTION */}
      <div className="relative flex-1 h-1/2 md:h-full">
        <MapView />
      </div>

      {/* 2. THE ACTION SIDEBAR */}
       <div className="w-full md:w-[400px] h-full bg-white shadow-2xl flex flex-col z-20 overflow-y-auto">
      
        {/* HEADER & HEARTBEAT: Flexbox to keep them on the same line */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h1 className="text-xl text-blue-600 font-bold italic">CALL-A-RIDE</h1>
          
          {/* SAFETY HEARTBEAT: The 'animate-ping' creates the pulsing effect */}
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700 uppercase">Live Tracking</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          
          {/* PROGRESS CARD: Holds percentage and milestone bar */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Estimated Arrival</p>
                <h2 className="text-2xl font-black text-slate-800">12:45 PM</h2>
              </div>
              <p className="text-blue-600 font-bold">{progress}% Complete</p>
            </div>

            {/* THE MILESTONE BAR */}
            <div className="relative w-full h-1.5 bg-slate-200 rounded-full mt-2">
              {/* The actual progress line */}
              <div 
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
              {/* Milestones: Little dots at 0%, 50%, and 100% */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase">
              <span>Start</span>
              <span>Midway</span>
              <span>Dest.</span>
            </div>
          </div>

          {/* DRIVER & VEHICLE INFO */}
          <div className="flex items-center gap-4 p-2">
            {/* Driver Image Container */}
            <div className="w-14 h-14 rounded-2xl bg-blue-100 overflow-hidden border-2 border-white shadow-md">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Driver" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800">Seyi Makinde</h3>
              <p className="text-xs text-slate-500 font-medium">Toyota Camry • <span className="text-slate-800 font-bold">LND-123-AB</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-slate-800">4.9 ★</p>
            </div>
          </div>

          {/* CURRENT LOCATION CARD (The Innovation) */}
          <div className={`p-4 rounded-2xl border-2 transition-all ${isDeviated ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-100'}`}>
            <div className="flex justify-between items-start">
              <div>
                  <p className={`text-[10px] font-bold uppercase ${isDeviated ? 'text-amber-600' : 'text-blue-500'}`}>
                    {isDeviated ? '⚠️ Route Deviation' : 'Current Location'}
                  </p>
                  <h4 className="text-sm font-bold text-slate-800 mt-1">Herbert Macaulay Way, Yaba</h4>
              </div>
              {/* Simple button to toggle deviation for the demo */}
              <button onClick={() => setIsDeviated(!isDeviated)} className="text-[9px] underline text-slate-400">Toggle Alert</button>
            </div>
            {isDeviated && (
              <p className="text-[11px] text-amber-700 mt-2 bg-white/50 p-2 rounded-lg leading-tight">
                Driver has taken a detour. This is often done to avoid heavy traffic on the main route.
              </p>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-4 space-y-3">
            <a 
              href="tel:+2349153543877"
              className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
            >
              <span>📞</span> Call Passenger
            </a>
            
            <button 
              className="w-full py-4 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition"
              onClick={() => setIsModalOpen(true)}
            >
              🛡️ Safety Toolkit
            </button>
          </div>

        </div>

        {/* FOOTER: Showing the trip ID for reference */}
        <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Trip ID: CR-990-221-X</p>
        </div>
      </div>

      {/* 3. Render the modal component here */}
      <SafetyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default Tracking;