import {createStore} from "redux";
import rootReducer from './SearchReducer';

const store = createStore(rootReducer);
export default store;