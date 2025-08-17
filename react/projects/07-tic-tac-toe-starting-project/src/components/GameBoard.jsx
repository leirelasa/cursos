import { useState } from "react";
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
	let gameBoard = initialGameBoard;

	// Derives from the state of the App component
	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	//const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// Inmutable way of updating
	// function handleSelectSquare(row, column) {
	// 	setGameBoard((prevGameBoard) => {
	// 		// Working with a new reference, creating a copy of the array
	// 		const updatedGameBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];

	//         // Just change the value if its null
	// 		if (updatedGameBoard[row][column] === null) {
	// 			updatedGameBoard[row][column] = activePlayerSymbol;
	// 			onSelectSquare();
	// 		}

	// 		return updatedGameBoard;
	// 	});
	// }

	// We'll iterate over the main array first and then over every array
    // We can disable the button if it's already been clicked
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowId) => (
				<li key={rowId}>
					<ol>
						{row.map((column, columnId) => (
							<li key={columnId}>
								<button
									onClick={() =>
										onSelectSquare(rowId, columnId)
									}
									disabled={column === null ? false : true}
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
