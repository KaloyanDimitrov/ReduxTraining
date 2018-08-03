import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as fromService from '../../services';
import * as fromPizzas from '../../store/actions'
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class PizzasEffect {
    constructor(private actions$: Actions, private pizzaService: fromService.PizzasService){
    }


    @Effect()
    loadPizzas$ = this.actions$.ofType(fromPizzas.LOAD_PIZZAS).pipe(
        switchMap(() => {
            return this.pizzaService.getPizzas()
                .pipe(map(pizzas => new fromPizzas.LoadPizzasSuccess(pizzas)),
                    catchError(error => of(new fromPizzas.LoadPizzasFail(error)))  
        )}
    ))
}