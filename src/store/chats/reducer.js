
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ADD, add, DELETE, del } from './actions';

const initialState = {
	default: {name: 'default' },
	chat1: {name: 'Chat1' },
	chat2: {name: 'Chat2' },
	chat3: {name: 'Chat3' },
}

const chatsReducer = (state = initialState,action) => {
	let id = action.payload?.uid;
	switch(action.type){
		case ADD:
			return {
				...state,
				[id]: { name: 'Chat'+id }
			}
		case DELETE:
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

export default chatsReducer;