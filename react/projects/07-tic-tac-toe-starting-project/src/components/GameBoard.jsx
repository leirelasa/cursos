const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard() {
    // We'll iterate over the main array first and then over every array
	return (
		<ol id="game-board">
			{initialGameBoard.map((row, rowId) => (
				<li key={rowId}>
					<ol>
						{row.map((column, columnId) => (
							<li key={columnId}><button>{column}</button></li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
