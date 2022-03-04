import { createStore, combineReducers } from 'redux';
import profileReducer from './profile/reducer';
import chatsReducer from './chats/reducer';
import chatReducer from './chat/reducer';

const rootReducer = combineReducers({
  profileReducer,
  chatsReducer,
  chatReducer
})

export const store = createStore(
	rootReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

