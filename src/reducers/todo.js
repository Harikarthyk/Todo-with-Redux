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
			const newData = state.data.filter((todo) => todo.id !== action.id);
			return {
				...state,
				data: newData,
			};
		}
		case "EDIT_TODO": {
			return state;
		}
		default:
			return state;
	}
};

export default todos;
