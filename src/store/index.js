import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

// extencao do chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// combinacao com logger pois o logger funciona para outros navegador
const middlewares = [thunk, logger]

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store