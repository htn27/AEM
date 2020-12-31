import {createStore, combineReducers} from 'redux';
import Login from './src/containers/reducer';

const rootReducer = combineReducers({
  Login: Login,
});

const configStore = () => createStore(rootReducer);
export default configStore;
