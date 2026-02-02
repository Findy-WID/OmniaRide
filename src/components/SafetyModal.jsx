import { X, AlertTriangle, Share2, ShieldCheck } from 'lucide-react';

export default function SafetyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-[2000] flex items-center justify-center"  // ← higher z + center for desktop
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button top-right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div className="mb-8 pr-12">  {/* pr-12 to avoid overlap with close button */}
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Safety Toolkit</h2>
          <p className="text-sm text-slate-500 mt-1">Quick access to safety features</p>
        </div>
        
        {/* Action grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <button className="flex flex-col items-center p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 hover:bg-red-100 transition-all group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <AlertTriangle size={28} />
            </div>
            <span className="text-sm sm:text-base font-bold text-red-600 uppercase tracking-tight">SOS Emergency</span>
          </button>
          
          <button className="flex flex-col items-center p-5 sm:p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-all group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <Share2 size={28} />
            </div>
            <span className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-tight">Share Trip</span>
          </button>
        </div>

        {/* Footer badge */}
        <div className="mt-8 flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100 text-sm">
          <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
          <p className="text-slate-600 font-medium">
            End-to-end encrypted • Live monitoring active
          </p>
        </div>
      </div>
    </div>
  );
}