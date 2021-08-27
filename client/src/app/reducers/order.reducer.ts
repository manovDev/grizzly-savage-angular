import { Action, createReducer, on, State } from '@ngrx/store';
import { addOrderInfo } from '../actions/order.actions';

export const orderInitialState: any = {};

const orderReducer = createReducer(
    orderInitialState,
    on(addOrderInfo, (state, data) => ({ ...state, ...data })),
);

export function order(state: State<object> | undefined, action: Action) {
    return orderReducer(state, action);
}