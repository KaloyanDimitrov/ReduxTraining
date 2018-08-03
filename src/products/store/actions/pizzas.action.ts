import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';


export const LOAD_PIZZAS = '[Products] Load Pizza';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizza Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizza Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
    constructor(){

    };
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]){
        
    };
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any){

    };
}

export type PizzaActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;