import { create } from 'zustand';

    export const useStore = create((set) => ({
      dataFromChild: null, // Initial state for the data
      setDataFromChild: (data) => set({ dataFromChild: data }), // Action to update the data
    }));