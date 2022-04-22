import { createAction } from 'redux-actions';
import * as types from '../types/core';

export const changeLanguage = createAction(types.CHANGE_LANGUGAGE);
export const setDeviceType = createAction(types.SET_DEVICE_TYPE);
export const setIsLoading = createAction(types.SET_IS_LOADING);
