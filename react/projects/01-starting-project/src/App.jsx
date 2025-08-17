import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

/* Component names must start with Upper Case and return a renderable content */
function App() {
	// As we need to wrap the content in one element, we can use Fragment or empty element
	return (
		<>
			<Header />
			<main>
				<CoreConcepts/>
				<Examples/>
			</main>
		</>
	);
}

export default App;
