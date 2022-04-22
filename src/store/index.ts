import { useDispatch } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer, IAuthReducer } from './reducers/auth';
import { coreReducer, ICoreReducer } from './reducers/core';
import { tokenReducer, ITokenReducer } from './reducers/token';

export interface IRootState {
  core: ICoreReducer;
  auth: IAuthReducer;
  token: ITokenReducer;
}

const rootReducer = combineReducers({ core: coreReducer, auth: authReducer, token: tokenReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
