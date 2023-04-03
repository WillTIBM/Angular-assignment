import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./app.reducer";

export const getCoffeeState = createFeatureSelector<CoffeeState>("coffeeReducer");

export const getList = createSelector(getCoffeeState, (state: CoffeeState) => {
    return state.coffeeItems
})