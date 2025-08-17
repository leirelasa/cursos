import { useState } from "react";
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// Inmutable way of updating
	function handleSelectSquare(row, column) {
		setGameBoard((prevGameBoard) => {
			// Working with a new reference, creating a copy of the array
			const updatedGameBoard = [
				...prevGameBoard.map((innerArray) => [...innerArray]),
			];

			updatedGameBoard[row][column] = "X";
			return updatedGameBoard;
		});
	}

	// We'll iterate over the main array first and then over every array
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowId) => (
				<li key={rowId}>
					<ol>
						{row.map((column, columnId) => (
							<li key={columnId}>
								<button
									onClick={() =>
										handleSelectSquare(rowId, columnId)
									}
								>
									{column}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
