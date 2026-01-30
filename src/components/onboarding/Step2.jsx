import { useState, useRef } from "react";

export default function Step2({ onNext, onBack }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  // We use Refs to tell the browser which input to "focus" on
  const inputs = useRef([]);

  const handleChange = (v, i) => {
    const newCode = [...code];
    newCode[i] = v.replace(/\D/g, '').slice(0, 1); // Only numbers
    setCode(newCode);

    // AUTO-FOCUS LOGIC: If I type a number, move to the next box
    if (v && i < 5) inputs.current[i + 1].focus();
  };

  return (
    /* STYLING: 'relative' allows us to float background blobs behind the content */
    <div className="relative p-8 bg-white rounded-3xl shadow-xl overflow-hidden">
      
      {/* DECORATION: These absolute divs create the soft blue/green glow in the corners */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
      
      {/* HEADER: 'flex' puts the back button and logo on the same line */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <button onClick={onBack} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition">←</button>
        <span className="font-bold text-blue-600 italic">CALL-A-RIDE</span>
      </div>

      <div className="relative z-10">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Step 2</p>
        <h2 className="text-2xl font-black text-slate-800 mt-2">Verify Email</h2>
        <p className="text-sm text-slate-500 mt-1">We sent a 6-digit code to your inbox.</p>

        {/* INPUT GRID: 'flex gap-2' puts the 6 boxes in a row with small space between */}
        <div className="mt-8 flex justify-between gap-2">
          {code.map((c, i) => (
            <input 
              key={i} 
              ref={(el) => (inputs.current[i] = el)}
              value={c} 
              onChange={(e) => handleChange(e.target.value, i)}
              maxLength={1}
              className="w-12 h-14 text-center text-xl font-bold bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-600 focus:bg-white outline-none transition-all"
            />
          ))}
        </div>

        <button 
          onClick={() => onNext({ otp: code.join('') })}
          className="mt-10 w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition"
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );
}