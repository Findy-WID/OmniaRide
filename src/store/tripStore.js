// src/store/tripStore.js

import { create } from 'zustand'

const useTripStore = create(set => ({
  trip: {
    status: 'idle',
    pickup: null,
    destination: null,
  },

  driver: {
    location: { lat: 6.5200, lng: 3.3700 },
  },

  startTrip: () =>
    set({
      trip: {
        status: 'requested',
        pickup: [6.5244, 3.3792],
        destination: [6.4654, 3.4064],
      },
    }),
}))

export default useTripStore
