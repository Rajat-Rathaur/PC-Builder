import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions'; // Import your actions

const initialState = {
  // Define your initial state variables here
  CPU: null,
  GPU: null,
  MOBO: null,
  Case: null,
  RAM: null,
  Storage: null,
  PSU: null,
  manufacturer:null,
  item:null,
  login:null,
};

const componentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCPU, (state, action) => {
      state.CPU = action.payload;
    })
    .addCase(actions.setGPU, (state, action) => {
      state.GPU = action.payload;
    })
    .addCase(actions.setMOBO, (state, action) => {
      state.MOBO = action.payload;
    })
    .addCase(actions.setCase, (state, action) => {
      state.Case = action.payload;
    })
    .addCase(actions.setRAM, (state, action) => {
      state.RAM = action.payload;
    })
    .addCase(actions.setStorage, (state, action) => {
      state.Storage = action.payload;
    })
    .addCase(actions.setPSU, (state, action) => {
      state.PSU = action.payload;
    })
    .addCase(actions.setManufacturer, (state, action) => {
      state.manufacturer = action.payload;
    })
    .addCase(actions.setItem, (state, action) => {
      state.item = action.payload;
    })
    .addCase(actions.setLogin, (state, action) => {
      state.login = action.payload;
    });
  // Add similar cases for the other state variables
});

export default componentsReducer;
