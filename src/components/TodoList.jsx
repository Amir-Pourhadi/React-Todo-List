import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	/**
	 * To add a todo if its not empty string
	 * @param {object} todo a todo object: {id, content, isComplete}
	 * @returns nothing
	 */
	const addTodo = (todo) => {
		const { content } = todo;
		if (!content || /^\s*$/.test(content)) {
			return;
		}
		setTodos([todo, ...todos]);
	};

	/**
	 * To edit a todo matched with todo id
	 * @param {number} todoId
	 * @param {object} newTodo
	 * @returns nothing if newTodo is empty string
	 */
	const editTodo = (todoId, newTodo) => {
		if (!newTodo.content || /^\s*$/.test(newTodo.content)) {
			return;
		}
		setTodos((prev) => prev.map((todo) => (todo.id === todoId ? newTodo : todo)));
	};

	/**
	 * To delete the matched todo with id
	 * @param {number} id of a todo
	 */
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	/**
	 * To toggle isComplete of matched todo with id
	 * @param {number} id of a todo
	 */
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
			<TodoForm addTodo={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo} />
		</div>
	);
}
