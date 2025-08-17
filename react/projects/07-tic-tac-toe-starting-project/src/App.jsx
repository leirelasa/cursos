import { useState } from "react";
import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function getCurrentPlayer(turns) {
	let currPlayer = "X";
	// Array can be empty at the beginning
	// The first element in the array is the latest turn
	currPlayer = turns.length > 0 && turns[0].player === "X" ? "O" : "X";

	return currPlayer;
}

function App() {
	const [turns, setTurns] = useState([]);
	const activePlayer = getCurrentPlayer(turns);

	function handleSelectSquare(rowId, colId) {
		setTurns((prevTurns) => {
			const currPlayer = getCurrentPlayer(prevTurns);
			const updatedTurns = [
				{ square: { row: rowId, col: colId }, player: currPlayer },
				...prevTurns,
			];

			console.log(updatedTurns);

			return updatedTurns;
		});
	}

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players" className="highlight-player">
						<Player
							initialName="Player 1"
							symbol="X"
							isActive={activePlayer === "X" ? true : false}
						/>
						<Player
							initialName="Player 2"
							symbol="O"
							isActive={activePlayer === "O" ? true : false}
						/>
					</ol>
					<GameBoard
						onSelectSquare={handleSelectSquare}
						turns={turns}
					/>
				</div>
				<Log turns={turns} />
			</main>
		</>
	);
}

export default App;
