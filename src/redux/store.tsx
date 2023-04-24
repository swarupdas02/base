import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appStateReducer from './slices/appState';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  appState: appStateReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

export default store;
