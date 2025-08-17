import { useState } from "react";
import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function handleSelectSquare() {
		setActivePlayer((currentActive) => (currentActive === "X" ? "O" : "X"));
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
						activePlayerSymbol={activePlayer}
					/>
				</div>
				LOG
			</main>
		</>
	);
}

export default App;
