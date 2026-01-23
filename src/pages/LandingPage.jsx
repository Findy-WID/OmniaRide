import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl text-blue-600 font-bold">OmniaRide</h1>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
          Launch App
        </button>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A smarter, safer way to move around your city
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Real-time rides with transparent routes, safety timelines, and
            clear driver intent — no guesswork, no surprises.
          </p>

          <div className="mt-8 flex gap-4">
            <button 
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              onClick={() => nav('/trip')}
            >
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100">
              View Demo
            </button>
          </div>
        </div>

        {/* MOCK PREVIEW */}
        <div className="bg-slate-100 rounded-2xl h-[320px] flex items-center justify-center text-gray-400">
          App Preview Placeholder
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10">How it works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-3">📍</div>
              <h4 className="font-semibold mb-2">Nearby Matching</h4>
              <p className="text-sm text-gray-600">
                We connect you with the closest available drivers in real time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-3">🛡️</div>
              <h4 className="font-semibold mb-2">Safety Timeline</h4>
              <p className="text-sm text-gray-600">
                Track every key moment of your trip — from pickup to arrival.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-3">🧠</div>
              <h4 className="font-semibold mb-2">Passenger Intelligence</h4>
              <p className="text-sm text-gray-600">
                Drivers understand your preferences before the ride begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Built for clarity, trust, and control
            </h3>
            <p className="text-gray-600 mb-4">
              Most ride apps feel opaque. We believe both passengers and drivers
              deserve visibility, intent, and mutual respect.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Clear routes and ETAs</li>
              <li>• Driver intent transparency</li>
              <li>• Passenger comfort preferences</li>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-2xl h-[260px] flex items-center justify-center text-gray-400">
            Feature Illustration Placeholder
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to experience smarter rides?
          </h3>
          <p className="text-blue-100 mb-8">
            Join the next generation of transparent ride-hailing.
          </p>
          <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50">
            Launch App
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RideFlow. All rights reserved.
      </footer>
    </div>
  )
}
