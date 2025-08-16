import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

/* Component names must start with Upper Case and return a renderable content */
function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{/* Using the spread operator(...) which allows us to pass all properties of an object as props */}
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						{/* Using explicit props */}
						<CoreConcept
							title={CORE_CONCEPTS[3].title}
							description={CORE_CONCEPTS[3].description}
							image={CORE_CONCEPTS[3].image}
						/>
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton>Components</TabButton>
						<TabButton>JSX</TabButton>
						<TabButton>Props</TabButton>
						<TabButton>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
