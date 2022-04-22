import { createAction } from 'redux-actions';
import * as types from '../types/auth';

export const authUser = createAction(types.AUTH_USER);
export const setUserId = createAction(types.SET_USER_ID);
export const logoutAction = createAction(types.LOGOUT);
