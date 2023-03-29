import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import {}

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({ coffeeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
