import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { reducers } from '../products/store/reducers';
// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// bootstrap
import { AppComponent } from './containers/app/app.component';
import { effects } from '../products/store';
import { PizzasService } from '../products/services';
import { HttpClientModule} from '@angular/common/http'

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot( reducers , { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [PizzasService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
