import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<h1>What's the Plan for Today?</h1>
			<TodoForm />
		</div>
	);
}
