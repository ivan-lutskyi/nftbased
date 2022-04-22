import { LANGUAGES_LIST } from '../../constants/languages';
import * as types from '../types/core';

const initialState = {
  language: LANGUAGES_LIST.EN,
  device: null,
  isLoading: false,
};

export interface ICoreReducer {
  language: typeof LANGUAGES_LIST.EN;
  device: 'MOBILE' | 'DESKTOP' | null;
  isLoading: boolean;
}

export function coreReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.CHANGE_LANGUGAGE:
      return { ...state, language: action.payload };

    case types.SET_DEVICE_TYPE:
      return { ...state, device: action.payload };

    case types.SET_IS_LOADING:
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
}
