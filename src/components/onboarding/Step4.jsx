export default function Step4({ onNext, onBack }) {
  return (
    /* OUTER WRAPPER: Centers content and provides the white card aesthetic */
    <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
      
      {/* HEADER SECTION */}
      <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Step 4</p>
      <h2 className="text-2xl font-black text-slate-800 mt-2">Confirm Information</h2>
      <p className="text-sm text-slate-500 mt-1">
        Please verify that these details match your official documents.
      </p>

      {/* DATA CARD: This gray box groups the info. 'space-y-5' adds consistent vertical gaps */}
      <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-5">
        
        {/* DATA ROW: Using flex-col for small screens, but a vertical stack works best here */}
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Full Name</p>
          <p className="text-sm font-bold text-slate-800">Maryam Oluwabunmi Lawal</p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">NIN Number</p>
          <p className="text-sm font-bold text-slate-800">012345678901</p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Date of Birth</p>
          <p className="text-sm font-bold text-slate-800">1995-05-12</p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified Address</p>
          <p className="text-sm font-bold text-slate-800 leading-snug">
            12 Sample Street, Agege, Lagos State, Nigeria
          </p>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-8 space-y-3">
        <button 
          onClick={() => onNext({})} // Just moving to next step
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95"
        >
          Confirm & Continue
        </button>
        
        <button 
          onClick={onBack}
          className="w-full py-2 text-sm text-slate-400 font-bold hover:text-slate-600 transition"
        >
          Wrong Information? Go Back
        </button>
      </div>
    </div>
  );
}