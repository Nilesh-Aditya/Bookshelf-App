import { combineReducers } from 'redux'
import authReducer from './reducers/login'


const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer