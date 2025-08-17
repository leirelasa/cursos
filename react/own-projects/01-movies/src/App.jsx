import { useState } from "react";
import Movie from "./components/Movie.jsx";
import { MOVIES } from "./data.js";
/* Component names must start with Upper Case and return a renderable content */
function App() {
	let [favorites, setFavorites] = useState({});

	function toggleFav(title) {
		// With the spread operator we can copy the array
		setFavorites({
			...favorites,
			// We just change the value of the current movie
			[title]: !favorites[title],
		});
	}

	return (
		<div>
			<header>
				<h1>Movies</h1>
			</header>
			<main>
				<section id="movies">
					<h2>Best movies of 2025</h2>
					<ul>
						{MOVIES.map((movie) => (
							<Movie
								key={movie.title}
								{...movie}
								onClick={() => {
									toggleFav(movie.title);
								}}
								isFavorite={favorites[movie.title]}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
