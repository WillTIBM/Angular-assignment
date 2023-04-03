import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import {}

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header/header.component';
import { CoffeeEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({ coffeeReducer}),
    StoreDevtoolsModule.instrument({ name:"Coffee Lib", maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CoffeeEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
