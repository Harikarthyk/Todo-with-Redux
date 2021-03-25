const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";

export const addTodo = (text) => ({
	type: ADD_TODO,
	text,
	id: Math.random() + " - " + Date.now(),
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id,
});

export const editTodo = (id, text, isDone) => ({
	type: EDIT_TODO,
	id,
	text,
});
