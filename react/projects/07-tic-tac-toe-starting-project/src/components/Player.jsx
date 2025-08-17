import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
	const [isEditing, setisEditing] = useState(false);
	const [name, setName] = useState(initialName);

	const input = (
		<input
			required
			type="text"
			className="player-name"
			value={name}
			onChange={handleChange}
		/>
	);

	const span = <span className="player-name">{name}</span>;

	let nameContainer = isEditing ? input : span;
	let buttonCaption = isEditing ? "Save" : "Edit";

	function handleEditClick() {
		//console.log(`Button Edit of player ${name} clicked.`);
		// Best practice to pass a function, not directly !isEditing because does not evalute at the moment, schedules an update of the state
		setisEditing((editing) => !editing);
	}

	function handleChange(event) {
		//console.log(event);
		setName(event.target.value);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{nameContainer}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{buttonCaption}</button>
		</li>
	);
}
