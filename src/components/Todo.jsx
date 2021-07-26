import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function Todo({ todos, completeTodo }) {
	const [edit, setEdit] = useState({ id: null, value: "" });

	return todos.map((todo, index) => (
		<div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.content}
			</div>
			<div className="icons">
				<RiCloseCircleLine />
				<TiEdit />
			</div>
		</div>
	));
}
