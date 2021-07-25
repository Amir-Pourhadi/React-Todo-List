import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if (!todo.content || /^\s*$/.test(todo.content)) {
			return;
		}
		setTodos([todo, ...todos]);
	};

	return (
		<div>
			<h1>What's the Plan for Today?</h1>
			<TodoForm onSubmit={addTodo} />
		</div>
	);
}
