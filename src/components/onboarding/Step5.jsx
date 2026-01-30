import { useState } from "react";

export default function Step5({ onBack }) {
  const [pw, setPw] = useState("");
  
  // LOGIC: Check password strength in real-time
  const criteria = [
    { label: '8+ Characters', ok: pw.length >= 8 },
    { label: 'Includes Number', ok: /\d/.test(pw) },
  ];

  const handleFinish = () => {
    alert("Application Submitted! Redirecting to home...");
    window.location.href = "/";
  };

  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl">
      <p className="text-xs font-bold text-blue-600 uppercase">Final Step</p>
      <h2 className="text-2xl font-black text-slate-800 mt-2">Secure Your Account</h2>

      <div className="mt-8">
        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">Create Password</label>
        <input 
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl mb-4"
        />

        {/* LIST: Loops through criteria to show green checkmarks */}
        <div className="space-y-2">
          {criteria.map(c => (
            <div key={c.label} className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${c.ok ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>✓</div>
              <span className={c.ok ? 'text-slate-800' : 'text-slate-400'}>{c.label}</span>
            </div>
          ))}
        </div>

        <button 
          disabled={!criteria.every(c => c.ok)}
          onClick={handleFinish}
          /* STYLING: 'disabled:opacity-50' makes the button look unclickable if logic isn't met */
          className="mt-10 w-full py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Driver Application
        </button>
      </div>
    </div>
  );
}