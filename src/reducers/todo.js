const initialState = {
	data: [],
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				...state,
				data: [
					...state.data,
					{
						text: action.text,
						id: action.id,
					},
				],
			};
		}
		case "DELETE_TODO": {
			return state;
		}
		case "EDIT_TODO": {
			return state;
		}
		default:
			return state;
	}
};

export default todos;
