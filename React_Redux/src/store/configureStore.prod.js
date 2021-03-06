import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) { //initiaState for server side rendering
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}