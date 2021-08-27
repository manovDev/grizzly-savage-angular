import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[Cart Component] Add Product', props<{ product: any }>());
export const editProduct = createAction('[Cart Component] Edit Product', props<{ product: any }>());
export const removeProduct = createAction('[Cart Component] Remove Product', props<{ _id: string }>());
export const increaseCount = createAction('[Cart Component] Increase Count', props<{ product: any }>());
export const decreaseCount = createAction('[Cart Component] Decrease Count', props<{ product: any }>());
export const removeAllProducts = createAction('[Cart Component] Remove All Product');

