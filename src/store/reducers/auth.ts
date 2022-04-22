import { registerDto } from '../../interfaces/auth';
import * as types from '../types/auth';

const initialState = {
  user: null,
  userId: null,
};

export interface IAuthReducer {
  user: null | registerDto;
  userId: null | string;
}

export function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };

    case types.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case types.LOGOUT:
      return {
        ...state,
        userId: null,
        user: null,
      };

    default:
      return state;
  }
}
