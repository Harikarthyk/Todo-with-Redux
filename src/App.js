import React, {useState} from "react";
import "./App.css";
import {connect} from "react-redux";
import {addTodo, deleteTodo} from "./actions";

function App(props) {
	const [text, setText] = useState("");
	const deleteOption = () => {};
	return (
		<div className='App'>
			<div className='App__heading'>Todo with redux</div>
			<form className='App__form'>
				<label className='form__heading'>
					Enter todo
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						className='form__input'
						type='text'
						name='todo'
						placeholder='Enter the todo'
					/>
				</label>
				<input
					className='form__button'
					onClick={(e) => {
						e.preventDefault();
						props.dispatch(addTodo(text));
						setText("");
					}}
					type='submit'
					value='Add Todo'
				/>
			</form>
			<div className='form__todos__wrapper'>
				<div className='form__todos'>
					{props.todos.map((todo, index) => {
						return (
							<div className='form__todo'>
								<div
									// onMouseOver={deleteOption()}

									key={index + "-" + todo.id}
								>
									<div className='todo__text'>
										{index + 1} ) {"  "}
										{todo.text}
									</div>
								</div>
								<div
									onClick={() => props.dispatch(deleteTodo(todo.id))}
									className='todo__delete'
								>
									Delete
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	todos: state.todo.data,
});

export default connect(mapStateToProps)(App);
