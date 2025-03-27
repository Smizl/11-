import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTrackStore = create(
  persist(
    (set) => ({
      tracks: [
        { id: 1, name: "Song 1", artist: "Artist 1" },
        { id: 2, name: "Song 2", artist: "Artist 2" },
        { id: 3, name: "Song 3", artist: "Artist 1" },
        { id: 4, name: "Song 4", artist: "Artist 3" },
      ],

      addTrack: (track) => set((state) => ({
        tracks: [...state.tracks, track],
      })),

      removeTrack: (id) => set((state) => ({
        tracks: state.tracks.filter((track) => track.id !== id),
      })),

      sortTracks: () => set((state) => ({
        tracks: [...state.tracks].sort((a, b) => a.name.localeCompare(b.name)),
      })),

      filterTracksByArtist: (artist) => set((state) => ({
        tracks: state.tracks.filter((track) => track.artist.toLowerCase().includes(artist.toLowerCase())),
      })),
    }),
    {
      name: "track-storage", 
      getStorage: () => localStorage, 
    }
  )
);

export default useTrackStore;




