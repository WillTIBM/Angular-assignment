
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeItems: any[] | undefined;
  // Pagination parameters.
  page: number = 1;
  count: number = 10;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getCoffees(50).subscribe((coffees) => {
      this.coffeeItems = coffees;
    });
  }
}