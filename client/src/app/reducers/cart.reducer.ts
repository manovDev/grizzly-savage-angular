import { Action, createReducer, on, State } from '@ngrx/store';
import { addProduct, editProduct, removeProduct, increaseCount, decreaseCount } from '../actions/cart.actions';

const cartStorage = localStorage.getItem('cart');

export const cartInitialState: any = cartStorage ? JSON.parse(cartStorage) : [];

const cartReducer = createReducer(
    cartInitialState,
    on(addProduct, (state, { product }) => {
        return [...state, product]
    }),
    on(editProduct, (state, { product }) => {
        return state.map((x: any) => x._id === product._id ? { ...x, ...product } : x)
    }),
    on(increaseCount, (state, { product }) => state.map((x: any) => x._id === product._id ? { ...x, ...product, count: product.qtty >= x?.count + 1 ? x?.count + 1 : product.qtty } : x)),
    on(decreaseCount, (state, { product }) => state.map((x: any) => x._id === product._id ? { ...x, ...product, count: x?.count - 1 > 1? x?.count - 1 : 1 } : x)),
    on(removeProduct, (state, { _id }) => state.filter((x: any) => x._id !== _id)),
);

export function cart(state: State<Array<object>> | undefined, action: Action) {
    return cartReducer(state, action);
}