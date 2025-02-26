/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the API URL
const API_URL = "http://localhost:8000/users";

// Define Types
interface AuthState {
  token: string | null;
  user: { email: string } | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  user: null,
  loading: false,
  error: null,
};

// Register a new user
export const register = createAsyncThunk(
  "auth/register",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, userData);
      return { token: "fake-jwt-token", user: response.data };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Fetch user by email
      const response = await axios.get(`${API_URL}?email=${credentials.email}`);

      if (response.data.length === 0) {
        console.error("No user found with this email");
        return rejectWithValue("Invalid credentials");
      }

      const user = response.data.find(
        (user: { userEmail: string }) => user.userEmail === credentials.email
      );

      // Check if password matches
      if (user.userPassword !== credentials.password) {
        console.error("Password does not match");
        return rejectWithValue("Invalid credentials");
      }

      return { token: "fake-jwt-token", user };
    } catch (error: any) {
      console.error("Login failed:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (
          state,
          action: PayloadAction<{ token: string; user: { email: string } }>
        ) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          localStorage.setItem("token", action.payload.token);
        }
      )
      .addCase(register.rejected, (state, action) => {
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Registration failed";
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{ token: string; user: { email: string } }>
        ) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          localStorage.setItem("token", action.payload.token);
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.error =
          (action.payload as string) || action.error.message || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
