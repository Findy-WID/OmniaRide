// src/components/Preferences

import { useState } from 'react';
import useTripStore from '../store/tripStore';
import { X, Check } from 'lucide-react';

function PreferencesModal({ isOpen, onClose }) {
  const { trip, updateTripPreferences } = useTripStore();

  const [prefs, setPrefs] = useState(trip.preferences);

  const noteSuggestions = [
    "Frequent night rider",
    "Prefer back seat please",
    "No side talks, thank you",
  ];

  if (!isOpen) return null;

  const saveAndClose = () => {
    updateTripPreferences(prefs);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-[2000]">
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-t-3xl md:rounded-2xl max-h-[88vh] overflow-y-auto shadow-2xl">
        <div className="p-6 pb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Ride Preferences</h2>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
              <X size={28} />
            </button>
          </div>

          {/* Communication */}
          <div className="mb-7">
            <label className="block font-semibold text-lg mb-3">Conversation level</label>
            <div className="grid grid-cols-4 gap-2.5">
              {['any', 'chatty', 'moderate', 'quiet'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPrefs(prev => ({ ...prev, communication: option }))}
                  className={`py-3 px-2 text-sm font-medium rounded-xl transition-colors ${
                    prefs.communication === option
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Music */}
          <div className="mb-7">
            <label className="block font-semibold text-lg mb-3">Music volume</label>
            <div className="grid grid-cols-5 gap-2.5">
              {['any', 'off', 'low', 'moderate', 'high'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPrefs(prev => ({ ...prev, music: option }))}
                  className={`py-3 px-2 text-sm font-medium rounded-xl transition-colors ${
                    prefs.music === option
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {option === 'any' ? 'Any' : option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* AC */}
          <div className="mb-7">
            <label className="block font-semibold text-lg mb-3">Air Conditioning</label>
            <div className="grid grid-cols-3 gap-3">
              {['any', 'on', 'off'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPrefs(prev => ({ ...prev, ac: option }))}
                  className={`py-4 text-base font-medium rounded-xl transition-colors ${
                    prefs.ac === option
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {option === 'any' ? 'Any' : option.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block font-semibold text-lg mb-3">Note for driver</label>
            <textarea
              value={prefs.note}
              onChange={e => setPrefs(prev => ({ ...prev, note: e.target.value }))}
              placeholder="e.g. heavy luggage, need baby seat, allergic to perfume..."
              className="w-full h-28 p-4 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none text-base"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {noteSuggestions.map((text) => (
                <button
                  key={text}
                  type="button"
                  onClick={() => setPrefs(prev => ({ ...prev, note: text }))}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={saveAndClose}
            className="w-full mt-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl flex items-center justify-center gap-2 shadow-md"
          >
            <Check size={20} />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreferencesModal;