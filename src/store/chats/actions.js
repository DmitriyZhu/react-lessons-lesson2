
export const ADD = 'add';
export const DELETE = 'del';

export const add = (value) => ({
	type: ADD,
	payload: value
})

export const del = (value) => ({
	type: DELETE,
	payload: value
})
