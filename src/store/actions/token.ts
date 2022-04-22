import { createAction } from 'redux-actions';
import * as types from '../types/token';

export const tokenDataRequest = createAction(types.TOKEN_DATA_REQUEST);
export const tokenDataSuccess = createAction(types.TOKEN_DATA_SUCCESS);
