import useTripStore from '../store/tripStore';
import MapView from '../components/MapView';

function Trip() {
  const trip = useTripStore((state) => state.trip);
  const startTrip = useTripStore((state) => state.startTrip);

  return (
    <div className="h-screen w-screen bg-slate-50 flex items-center justify-center overflow-hidden">
      <div
        className={`
          w-full h-full max-w-[1600px] max-h-[95vh] lg:max-h-[92vh]
          mx-auto my-auto
          bg-white rounded-none sm:rounded-2xl lg:rounded-3xl
          shadow-2xl lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
          overflow-hidden
          border-0 sm:border-4 lg:border-4 border-blue-600
          flex flex-col
        `}
      >
        {/* Map area - takes almost everything */}
        <div className="relative flex-1 min-h-0">
          <MapView />

          {/* Floating button - idle state */}
          {trip.status === 'idle' && (
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
              <button
                onClick={() => startTrip('Ikeja', 'Lekki')}
                className={`
                  px-10 py-4 sm:px-14 sm:py-5
                  bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                  text-white font-semibold text-lg sm:text-xl
                  rounded-full shadow-2xl
                  transition-all duration-200
                  focus:outline-none focus:ring-4 focus:ring-blue-300
                  whitespace-nowrap
                `}
              >
                Request Ride
              </button>
            </div>
          )}

          {/* Status when trip active */}
          {trip.status !== 'idle' && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1000] bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200">
              <p className="text-slate-800 font-medium">
                Trip status: <strong className="text-blue-700">{trip.status}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trip;