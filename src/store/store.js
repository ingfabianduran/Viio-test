import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const userStore = create(
  persist((set) => ({
    user: null,
    logIn: (userLogged) => set((state) => ({ user: userLogged })),
    logOut: () => set((state) => ({ user: null })),
  }), {
    name: 'user-storage',
  }
));

export const loadingStore = create((set) => ({
  loading: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),
}));