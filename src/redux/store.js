import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
 import logger from 'redux-logger';

 import rootReducer from './root-reducer';

 const middlelwares = [logger];

 export const store = createStore(rootReducer, applyMiddleware(...middlelwares));

 export const persistor = persistStore(store);