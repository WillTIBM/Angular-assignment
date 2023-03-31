import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
//import { Action } from 'rxjs/internal/scheduler/Action';
import { coffeeSuccess, getCoffeeListFromApi } from './app.actions';


export const initialState = {coffeeItems:[],isLoading:false,isLoadingSuccess:false,isLoadingFailure:false};
//Creates a reducer function to handle state transitions.
//Reducer creators reduce the explicitness of reducer functions with switch statements.
export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeListFromApi, (state) => ({...state,isLoading:true})),
  on(coffeeSuccess, (state,response) => {return({...state,coffeeItems:response,isLoading:false,IsLoadingSuccess:true})})
);
export const populateList = (state:CoffeeState) => {return {coffeeItems:state.coffeeItems,isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess}};
//export function reducer(state:CoffeeState,action:Action):any{return coffeeReducer(state,action)}
export interface CoffeeState{
  coffeeItems: Array<CoffeeItems>;
  isLoading:boolean;
  isLoadingSuccess:boolean;
  isLoadingFailure:boolean;
}
export interface CoffeeItems{
  blend_name:string,
  origin:string,
  roast:string,
  notes:string
}