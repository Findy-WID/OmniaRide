// src/store/tripStore.js

import { create } from 'zustand';

const useTripStore = create((set) => ({
  trip: {
    status: 'idle', // idle → requested → enroute → completed
    pickup: null,   // { lat, lng, address } or string
    dropoff: null,
    preferences: {
      communication: 'any', // "any" | "chatty" | "moderate" | "quiet"
      music: 'any',         // "any" | "off" | "low" | "moderate" | "high"
      ac: 'any',            // "any" | "on" | "off"
      note: '',
    },
    eta: null,
  },

  // Global passenger defaults (optional — can be used to prefill)
  passenger: {
    defaultPreferences: {
      communication: 'any',
      music: 'low',
      ac: 'on',
      note: '',
    },
  },

  driver: {
    intent: 'on shift', // "on shift" | "short trips only" | "going home"
  },

  startTrip: (pickup, dropoff) => set((state) => ({
    trip: {
      ...state.trip,
      status: 'requested',
      pickup,
      dropoff,
      // preferences are already set by user before calling startTrip
    },
  })),

  updateTripStatus: (status) => set((state) => ({
    trip: {
      ...state.trip,
      status,
    },
  })),

  setTripEta: (eta) => set((state) => ({
    trip: {
      ...state.trip,
      eta,
    },
  })),

  updateTripPreferences: (prefs) => set((state) => ({
    trip: {
      ...state.trip,
      preferences: {
        ...state.trip.preferences,
        ...prefs,
      },
    },
  })),

  resetTrip: () => set(() => ({
    trip: {
      status: 'idle',
      pickup: null,
      dropoff: null,
      preferences: {
        communication: 'any',
        music: 'any',
        ac: 'any',
        note: '',
      },
      eta: null,
    },
  })),

  endTrip: () => set((state) => ({
    trip: {
      ...state.trip,
      status: 'completed',
    },
  })),

  setDriverMode: (intent) => set(() => ({
    driver: { intent },
  })),
}));

export default useTripStore;