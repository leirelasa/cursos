import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
function App() {
	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players">
						<Player initialName="Player 1" symbol="X"/>
						<Player initialName="Player 2" symbol="O"/>
					</ol>
					GAMEBOARD
				</div>
				LOG
			</main>
		</>
	);
}

export default App;
