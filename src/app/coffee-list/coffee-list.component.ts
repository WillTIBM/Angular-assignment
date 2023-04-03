import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable,Subscription } from 'rxjs';
import { getCoffeeListFromApi } from '../app.actions';
import { getList } from '../app.selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeItems$: Observable<any[]>;
  coffeeList: any[] = [];
  page: number = 1;
  count: number = 10;
  subscription: Subscription = new Subscription();

  constructor(private coffeeService: CoffeeService, private store: Store<{coffeeReducer:{coffeeItems:any[]}}>) {
    this.coffeeItems$ = this.store.pipe(select(this.getList))
  }

  ngOnInit(): void {
    this.coffeeItems$ = this.store.pipe(select(getList));
    this.store.dispatch(getCoffeeListFromApi());
    this.subscription = this.coffeeItems$.subscribe(
      (coffees) => {
        console.log(coffees)
        this.coffeeList = coffees;
      })
  }
  getListState = createFeatureSelector<{coffeeItems:Array<any>}>("coffeeReducer");
  getList = createSelector(this.getListState, (state: {coffeeItems:Array<any>}) => {
    return state.coffeeItems
  })
}