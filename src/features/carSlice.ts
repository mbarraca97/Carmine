import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  id: string;
  location: string;
  type: string;
  status: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
  photos: string[];
}

interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<string>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    updateCar: (state, action: PayloadAction<Car>) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
  },
});

export const { addCar, removeCar, updateCar } = carSlice.actions;
export default carSlice.reducer;
