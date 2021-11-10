import { createStore } from 'redux';
import { contacts } from '../components/static_data';
import rootReducer from '../reducers';

const store = createStore(rootReducer, { contacts });

export default store;
