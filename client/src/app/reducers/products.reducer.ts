import { Action, createReducer, on, State } from '@ngrx/store';
import { setProducts } from '../actions/products.actions';

export const productsInitialState: any = [];

const productsReducer = createReducer(
    productsInitialState,
    on(setProducts, (state, products) => ({ products })),
);

export function products(state: State<object> | undefined, action: Action) {
    return productsReducer(state, action);
}