import { createStore, combineReducers, applyMiddleware} from 'redux'
// to use asency function 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import {userReducer,TaskListReducer} from './redux/UserReducer'


const reducer = combineReducers({
    user: userReducer,
    taskList: TaskListReducer
})


const middleware = [thunk] // thunk alow us to use asecny recuaste

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))


export default store;