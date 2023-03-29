import { createReducer, on } from '@ngrx/store';
import { getCoffeeListFromApi } from './app.actions';
export const initialState = {coffeeList:[]};
//Creates a reducer function to handle state transitions.
//Reducer creators reduce the explicitness of reducer functions with switch statements.
export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeListFromApi, (state) => {console.log('Hi from the reducer');return state})
);
