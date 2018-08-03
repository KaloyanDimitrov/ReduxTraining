import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPizza from '../reducers/pizzas.reducer';
import { ProductsState } from '../reducers';



export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getPizzas = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzaObjects = createSelector(getPizzas, fromPizza.getPizzasEntities);