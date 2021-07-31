import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

export default function Todo({ todos, completeTodo, removeTodo, editTodo }) {
	const [edit, setEdit] = useState({ id: null, value: "" });

	const submitEdit = (value) => {
		editTodo(edit.id, value);
		setEdit({ id: null, value: "" });
	};
	if (edit.id) return <TodoForm edit={edit} addTodo={submitEdit} />;

	return todos.map(({ id, content, isComplete }, index) => (
		<div className={isComplete ? "todo-row complete" : "todo-row"} key={index} onClick={() => completeTodo(id)}>
			<div key={id}>{content}</div>
			<div className="icons" onClick={(e) => e.stopPropagation()}>
				<RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(id)} />
				<TiEdit className="edit-icon" onClick={() => setEdit({ id, value: content })} />
			</div>
		</div>
	));
}
