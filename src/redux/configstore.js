import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  // Add your reducers here
});

const store = createStore(rootReducer);

export default store;
