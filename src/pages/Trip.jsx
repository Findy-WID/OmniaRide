import { useState } from 'react';
import useTripStore from '../store/tripStore';
import MapView from '../components/MapView';
import PreferencesModal from '../components/PreferencesModal';
// Added 'Mic' and 'Navigation' for the UI
import { MapPin, SlidersHorizontal, Mic, Navigation, MousePointer2 } from 'lucide-react';

function Trip() {
  const trip = useTripStore((state) => state.trip);
  const startTrip = useTripStore((state) => state.startTrip);

  const [showPrefs, setShowPrefs] = useState(false);
  const [pickUpInput, setPickUpInput] = useState("");
  const [destInput, setDestInput] = useState("");
  
  // States to control dropdown visibility
  const [activeInput, setActiveInput] = useState(null); // 'pickup' or 'destination'

  const isIdle = trip.status === 'idle';

  // --- FIX: Added (e) to parameters ---
  const handlePickUpInput = (e) => setPickUpInput(e.target.value);
  const handleDestInput = (e) => setDestInput(e.target.value);

  // --- VOICE LOGIC ---
  const startListening = (target) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser does not support voice recognition.");

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (target === 'pickup') setPickUpInput(transcript);
      else setDestInput(transcript);
    };
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* 1. THE MAP SECTION */}
      <div className="relative flex-1 h-1/2 md:h-full">
        <MapView />
      </div>

      {/* 2. THE ACTION SIDEBAR */}
      <div className="w-full md:w-[420px] h-1/2 md:h-full bg-white flex flex-col shadow-2xl z-[1010]">
        <div className="p-6 overflow-y-auto flex-1">
          <h2 className='mb-5 font-black text-2xl text-blue-600 tracking-tight italic'>CALL-A-RIDE</h2>
          
          {isIdle && (
            <div className="mb-8">
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-2'>Ride Style - Tell us how you like it.</p>
              <button 
                onClick={() => setShowPrefs(true)}
                className="w-full p-4 flex items-center justify-between border-2 border-dashed border-slate-200 rounded-xl text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all group"
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <SlidersHorizontal size={18} className="group-hover:rotate-90 transition-transform" />
                  <span className="font-semibold text-sm">Preferences</span>
                </div>
                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md font-bold uppercase tracking-tighter cursor-pointer">Adjust</span>
              </button>
            </div>
          )}

          {isIdle ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800">Plan your trip</h2>
              
              <div className="space-y-4 relative">
                {/* Pickup Input Group */}
                <div className="relative">
                  <input 
                    type="text" 
                    onFocus={() => setActiveInput('pickup')}
                    onChange={handlePickUpInput}
                    value={pickUpInput}
                    placeholder='Pickup Location'
                    className='w-full border-2 border-slate-100 bg-slate-50 p-4 pr-12 rounded-xl focus:border-blue-600 focus:bg-white outline-none transition-all'
                  />
                  <button 
                    onClick={() => startListening('pickup')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition"
                  >
                    <Mic size={20} />
                  </button>

                  {/* PICKUP DROPDOWN */}
                  {activeInput === 'pickup' && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl z-[1020] overflow-hidden">
                      <button className="w-full p-3 flex items-center gap-3 hover:bg-blue-50 text-sm text-slate-700 transition border-b border-slate-50">
                        <Navigation size={16} className="text-blue-600" />
                        Use Current Location
                      </button>
                      <button className="w-full p-3 flex items-center gap-3 hover:bg-blue-50 text-sm text-slate-700 transition">
                        <MousePointer2 size={16} className="text-blue-600" />
                        Set location on map
                      </button>
                    </div>
                  )}
                </div>

                {/* Destination Input Group */}
                <div className="relative">
                  <input 
                    type="text" 
                    onFocus={() => setActiveInput('destination')}
                    onChange={handleDestInput}
                    value={destInput}
                    placeholder='Where to?'
                    className='w-full border-2 border-slate-100 bg-slate-50 p-4 pr-12 rounded-xl focus:border-blue-600 focus:bg-white outline-none transition-all'
                  />
                  <button 
                    onClick={() => startListening('dest')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition"
                  >
                    <Mic size={20} />
                  </button>

                  {/* DESTINATION DROPDOWN */}
                  {activeInput === 'destination' && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl z-[1020] overflow-hidden">
                      <button className="w-full p-3 flex items-center gap-3 hover:bg-blue-50 text-sm text-slate-700 transition">
                        <MousePointer2 size={16} className="text-blue-600" />
                        Set location on map
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Outside click closer for dropdowns (overlay) */}
              {activeInput && (
                <div className="fixed inset-0 z-[1015]" onClick={() => setActiveInput(null)} />
              )}
               
              <button 
                onClick={() => startTrip(pickUpInput, destInput)} 
                className="w-full py-4 mt-8 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all transform active:scale-95"
              >
                Confirm Request
              </button>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center py-20">
               <div className="relative flex items-center justify-center mb-6">
                  <span className="absolute h-16 w-16 animate-ping rounded-full bg-blue-400 opacity-20"></span>
                  <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
               </div>
               <h3 className="text-xl font-bold text-gray-800">Searching...</h3>
               <p className="text-sm text-gray-500 mt-2">Connecting you to a verified driver</p>
            </div>
          )}
        </div>
      </div>

      <PreferencesModal isOpen={showPrefs} onClose={() => setShowPrefs(false)} />
    </div>
  );
}

export default Trip;