import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CoffeeService } from './coffee.service';
import {getCoffeeListFromApi} from './app.actions';
import * as actions from './app.actions'
@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private dataService: CoffeeService
  ) { }
  populateList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoffeeListFromApi),
      exhaustMap(action =>
        this.dataService.getCoffees(50).pipe(
          map(response => {
            return actions.coffeeSuccess(response)}),
          catchError((error: any) => of(actions.coffeeFailure())))
      )
    )
  )
}
