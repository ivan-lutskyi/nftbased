import * as types from '../types/token';

const initialState = {
  tokenData: [],
};

export type TokenDataType =
  | []
  | {
      x: Date;
      y: [number, number, number, number];
    }[];

export interface ITokenReducer {
  tokenData: TokenDataType;
}

export function tokenReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.TOKEN_DATA_SUCCESS:
      return {
        ...state,
        tokenData: action.payload,
      };

    default:
      return state;
  }
}
