import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
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
sagaMiddleware.run(watcherSaga);

export default store;
