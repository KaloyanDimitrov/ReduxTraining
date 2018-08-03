import { Pizza } from '../../models/pizza.model';
import * as fromPizza from '../actions';

export interface PizzaState {
    pizzas: Pizza[],
    loading: boolean,
    loaded: boolean
}

export const initialState:PizzaState = {
    pizzas: [],
    loading: false,
    loaded: false
}

export function reducer(state:PizzaState=initialState, action:fromPizza.PizzaActions): PizzaState{
    switch(action.type){
        case fromPizza.LOAD_PIZZAS: {
            return {
                ...state,
                loading:true,
                loaded:false
            }
        }
        case fromPizza.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading:false,
                loaded:false
            }
        }
        case fromPizza.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            console.log(pizzas);
            return {
                ...state,
                pizzas,
                loaded: true,
                loading: false
            }
        }
    }
    return state;
}

export const getPizzasLoading = (state:PizzaState) => state.loading;
export const getPizzasLoaded = (state:PizzaState) => state.loaded;
export const getPizzasEntities = (state:PizzaState) => state.pizzas;