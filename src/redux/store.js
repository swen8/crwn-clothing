import {createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlerwares = [];

if(process.env.NODE_ENV === 'development') {
    middlerwares.push(logger);
}

export const store =createStore(rootReducer, applyMiddleware(...middlerwares))

export const persistor = persistStore(store);

export default {store, persistor};