import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Step1({ onNext }) {
  const [email, setEmail] = useState("");
  const [sliqId, setSliqId] = useState("");

  const handleContinue = () => {
    // Validation: Don't let them move forward if email is empty
    if (!email || !sliqId) return alert("Please fill in all fields");
    
    // Call the parent function and pass this step's data
    onNext({ email, sliqId });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -top-10 right-[-20%] h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-70"/>

      <div className="max-w-md mx-auto">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Step 1</p>

        <h2 className="mt-2 text-2xl font-black text-slate-800">Create an account</h2>
        <p className="text-sm text-slate-500">Enter your Email to get started as a driver.</p>

        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Email Address</label>
            <input 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email" 
              placeholder="name@email.com" 
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 outline-none focus:border-blue-600 transition-all" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Driver ID</label>
            <div className="relative">
              <input 
                value={sliqId} 
                onChange={(e)=>setSliqId(e.target.value)} 
                type="text" 
                placeholder="Username" 
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-10 py-4 outline-none focus:border-blue-600 transition-all" 
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">@</span>
            </div>
          </div>
        </div>

        <button 
          onClick={handleContinue}
          className="mt-8 w-full flex items-center justify-center rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          Continue
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
            Already registered? <Link to="/" className="text-blue-600 font-bold">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}