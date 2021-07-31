import { useEffect, useRef, useState } from "react";

export default function TodoForm({ addTodo, edit, inputPlaceholder, submitValue }) {
	// To replace the input value with prev todo value when editing
	const [input, setInput] = useState(edit ? edit.value : "");

	// To focus on the input box when opened
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	// To have specific className when editing a todo
	const isEdit = (edit || "") && "edit";

	/**
	 * To handle input change
	 * @param {event} e
	 */
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	/**
	 * To handle submit button and empty input when submitted
	 * @param {event} e
	 */
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
					className={`todo-input ${isEdit}`}
					type="text"
					placeholder={inputPlaceholder}
					value={input}
					onChange={handleChange}
					ref={inputRef}
				/>
				<input className={`todo-button ${isEdit}`} type="submit" value={submitValue} />
			</form>
		</div>
	);
}
