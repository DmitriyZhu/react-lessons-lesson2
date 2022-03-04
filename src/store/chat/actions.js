
export const ADD_MESSAGE = 'add_message';

export const add_message = (value) => ({
	type: ADD_MESSAGE,
	payload: value
})

export const CLEAR_MESSAGES = 'clear_messages';

export const clear_messages = (value) => ({
	type: CLEAR_MESSAGES,
	payload: value
})

export const INIT_MESSAGES = 'init_messages';

export const init_messages = (value) => ({
	type: INIT_MESSAGES,
	payload: value
})