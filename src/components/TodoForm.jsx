import { useState } from "react";

export default function TodoForm({ addTodo }) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({
			id: Math.floor(Math.random() * 10000),
			content: input,
			isComplete: false
		});
		setInput("");
	};

	return (
		<div>
			<form className="todo-form" onSubmit={handleSubmit}>
				<input
					className="todo-input"
					type="text"
					name="text"
					placeholder="Add a new todo"
					value={input}
					onChange={handleChange}
				/>
				<button className="todo-button" type="submit">
					Add todo
				</button>
			</form>
		</div>
	);
}
