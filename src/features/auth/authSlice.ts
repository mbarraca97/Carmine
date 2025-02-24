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
      console.log("Data", userData);
      // Check if email already exists
      const existingUsers = await axios.get(
        `${API_URL}?email=${userData.userEmail}`
      );
      console.log("users", existingUsers);
      // if (existingUsers.data.length > 0) {
      //   return rejectWithValue("Email already in use");
      // }

      const response = await axios.post(API_URL, userData);
      // Returning a fake token and user info after registration
      return { token: "fake-jwt-token", user: response.data };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `${API_URL}?email=${credentials.email}&password=${credentials.password}`
      );
      if (response.data.length > 0) {
        return { token: "fake-jwt-token", user: response.data[0] };
      } else {
        return rejectWithValue("Invalid credentials");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
