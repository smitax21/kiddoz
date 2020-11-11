import { createStore, applyMiddleware } from 'redux';
 import logger from 'redux-logger';

 import rootReducer from './root-reducer';

 const middlelwares = [logger];

 const store = createStore(rootReducer, applyMiddleware(...middlelwares));

 export default store;