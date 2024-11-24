import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = "http://localhost:8000";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,
  message: "",

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post(`auth/signup`, data);
      set({ authUser: res.data });

      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  login: async (data) => {
    set({ error: null });
    try {
      const res = await axiosInstance.post(`auth/login`, data);
      set({ authUser: res.data });

      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put(`auth/update-profile`, data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance
        .get(`auth/logout`)
        .then(() => console.log("Logged out"));
      set({
        authUser: null,
        // isAuthenticated: false,
        // error: null,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },
  verifyEmail: async (code) => {
    try {
      console.log(code);

      const response = await axiosInstance.post(`auth/verify-email`, { code });
      set({
        user: response.data.user,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });

    try {
      const res = await axiosInstance.get(`auth/check-auth`);
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post(`auth/forgot-password`, {
        email,
      });
      set({ message: res.data.message, isLoading: false });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  resetPassword: async (token, password) => {
    try {
      const response = await axiosInstance.post(
        `auth/reset-password/${token}`,
        {
          password,
        },
      );
      set({ message: response.data.message });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
}));
