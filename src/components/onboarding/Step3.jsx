import { useState } from "react";

export default function Step3({ onNext, onBack }) {
  const [method, setMethod] = useState('NIN');
  const [idNumber, setIdNumber] = useState("");

  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl">
      <button onClick={onBack} className="mb-6 text-slate-400 hover:text-slate-600">← Back</button>
      
      <p className="text-xs font-bold text-blue-600 uppercase">Step 3</p>
      <h2 className="text-2xl font-black text-slate-800 mt-2">Identity Verification</h2>
      
      <div className="mt-8 space-y-6">
        {/* RADIO GROUP: Using a container for the selector buttons */}
        <div className="flex gap-4 p-1 bg-slate-50 rounded-2xl border border-slate-100">
          {['NIN', 'BVN'].map(m => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              /* STYLING: Conditional logic - if selected, make it white with shadow */
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                method === m ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-tight">Enter {method} Number</label>
          <input 
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="0000 0000 000"
            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-600 focus:bg-white"
          />
        </div>

        <button 
          onClick={() => onNext({ idMethod: method, idValue: idNumber })}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg"
        >
          Verify Identity
        </button>
      </div>
    </div>
  );
}