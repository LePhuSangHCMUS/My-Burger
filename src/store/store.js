import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
//redux-thunk
import thunk from 'redux-thunk'
import BurgerReducer from './reducer/BurgerReducer'
import AuthReducer from './reducer/AuthReducer'


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware Dispatching]', action);
            console.log('[Middleware Old state]', store.getState());
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result; 
            //Neu thay doi action o day thi ket qua se khac hehehe
            // setTimeout(() => {
            //     const result = next(action);
            //     console.log('[Middleware] next state', store.getState());
            //     return result; 
            // }, 2000);



        }
    }
}
//Noi cac reducer quan ly state lai vao thanh mot de store quan ly reducer
const rootReducer = combineReducers({
    BurgerReducer: BurgerReducer,
    AuthReducer:AuthReducer
})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger,thunk)
  ));
store.subscribe(() => {
    console.log('SUBSCRIBER SOTRE',store.getState());
})
export default store;