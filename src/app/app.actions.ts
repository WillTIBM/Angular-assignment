import { createAction, props } from '@ngrx/store';

export const getCoffeeListFromApi = createAction('getCoffeeListFromApi');
export const coffeeSuccess = createAction('coffeeSuccess',props<any>());
export const coffeeFailure = createAction('coffeeFailure');