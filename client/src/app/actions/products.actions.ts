import { createAction, props } from '@ngrx/store';

export const setProducts = createAction('[Products Component] Set Products', props<{ products: Array<object> }>());


