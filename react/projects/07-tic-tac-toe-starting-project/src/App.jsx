import { useState } from "react";
import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");
	const [turns, setTurns] = useState([]);

	function handleSelectSquare(rowId, colId) {
		setActivePlayer((currentActive) => (currentActive === "X" ? "O" : "X"));

		setTurns((prevTurns) => {
			// We cannot mix states
			let currPlayer = "X";
			// Array can be empty at the beginning
			// The first element in the array is the latest turn
			currPlayer =
				prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";

			const updatedTurns = [
				{ square: { row: rowId, col: colId }, player: currPlayer },
				...turns,
			];

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
				<Log />
			</main>
		</>
	);
}

export default App;
