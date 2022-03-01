import { exampleAction, EXAMPLE_ACTION } from './actions';

const initialState = {
	showName: false,
	name: 'John Ceena'
}

const profileReducer = (state = initialState,action) => {
	switch(action.type){
		case EXAMPLE_ACTION:
			return {
				...state,
				showName: !state.showName
			}
		default:
			return state;

	}
}

export default profileReducer;