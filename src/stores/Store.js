import {createStrore} from 'redux';
import rootReducer from '../reducers/RootReducer';

let store = createStore(rootReducer);

export default store;