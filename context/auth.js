import axios from "axios";
import { Alert } from "react-native";
import { create } from "zustand";

export const useAuth = create((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  nama:"",
  login: async (username, password) => {
    try {
      const response = await axios.post("http://192.168.43.223:3000/login", {
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
      Alert.alert("Data tidak ","Ditemukan", [{text:"ok"}])
    }
  },

  logout: () => set({ isAuthenticated: false, user: null, error: null }),
}));
