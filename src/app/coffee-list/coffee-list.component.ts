
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeItems$: Observable<any[]>;
  coffeeList: any[] = [];
  // Pagination parameters.
  page: number = 1;
  count: number = 10;

  constructor(private coffeeService: CoffeeService, private store: Store<{coffeeReducer:{coffeeItems:any[]}}>) {
    this.coffeeItems$ = this.store.pipe(select(this.getList))
  }

  ngOnInit(): void {
    this.coffeeService.getCoffees(50).subscribe((coffees) => {
      // this.coffeeItems = coffees;
      
    }); 
    this.coffeeItems$.subscribe((coffees)=>{
      this.coffeeList = coffees;
      console.log(coffees)
    })
  }
  getListState = createFeatureSelector<{coffeeItems:Array<any>}>("coffeeReducer");
  getList = createSelector(this.getListState, (state: {coffeeItems:Array<any>}) => {
    return state.coffeeItems
  })
}