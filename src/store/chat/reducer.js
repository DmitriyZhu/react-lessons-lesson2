
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ADD_MESSAGE, add_message, CLEAR_MESSAGES, clear_messages, INIT_MESSAGES, init_messages } from './actions';

const initialState = {
	default: [{ message: 'Enter your message please in default', author: 'bot' }] ,
	chat1: [{ message: 'Enter your message please in chat1', author: 'bot' }],
	chat2: [{ message: 'Enter your message please in chat2', author: 'bot' }],
	chat3: [{ message: 'Enter your message please in chat3', author: 'bot' }],
}

const chatReducer = (state = initialState,action) => {
	let id = action.payload?.id;
	let message = action.payload?.message;
	let author = action.payload?.author;
	switch(action.type){
		case INIT_MESSAGES:
			console.log('state',state);
			return {
				...state,
				[id]: []
			}
		case ADD_MESSAGE:
			if(!state[id]){ state[id] = { 'messages': [] } }
			return {
				...state,
				[id]: [...state[id],{message: message, author: author}]
			}
		case CLEAR_MESSAGES:
			if (id === 'default') {
	            toast('Unable to delete default chat!')
	            return state;
	        }
	        return Object.keys(state)
			    .filter(key => key !== id)
			    .reduce((result, current) => {
			      result[current] = state[current];
			      return result;
			  }, {});
		default:
			return state;
	}
}

export default chatReducer;