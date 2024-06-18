import axios from "axios";
import { create } from "zustand";

export const useAuth = create((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  nama:"",
  login: async (username, password) => {
    try {
      const response = await axios.post("http://192.168.7.11:3000/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { user } = response.data;
        set({ isAuthenticated: true, user, error: null, nama:user.nama});
      } else {
        set({ error: response.data.message });
        console.log("Login gagal:", response.data.message);
      }
    } catch (error) {
      set({ error: "Error saat login" });
      console.error("Error saat login:", "Data Tidak ditemukan");
    }
  },

  logout: () => set({ isAuthenticated: false, user: null, error: null }),
}));
