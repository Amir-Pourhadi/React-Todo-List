import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.content || /^\s*$/.test(todo.content)) {
			return;
		}
		setTodos([todo, ...todos]);
	};

	const completeTodo = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>What's the Plan for Today?</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} />
		</div>
	);
}
