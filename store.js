import {createStore, combineReducers} from 'redux';
import LoginReducer from './src/containers/reducer';
import StudentReducer from './src/containers/student/reducer';
const rootReducer = combineReducers({
  Login: LoginReducer,
  Student: StudentReducer,
});

const configStore = () => createStore(rootReducer);
export default configStore;
