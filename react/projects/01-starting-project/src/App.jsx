// Handling UI rendering -> React Hooks which are regular functions that can be used in components
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

/* Component names must start with Upper Case and return a renderable content */
function App() {
	// Use state must be called only at top level
	// Default value, then to update the UI we need to set the tabContent state
	let [selectedTopic, setSelectedTopic] = useState();

	function handleClickAction(selectedButton) {
		// Selected button Components, JSX, Props, State
		console.log("You clicked on " + selectedButton + " button.");
		// We can update the value with the setter
		setSelectedTopic(selectedButton);
	}

	let tabContent = <p>Please, select a topic.</p>;
	if (selectedTopic != undefined) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							// Key is a prop which must be unique and identifies each element
							<CoreConcept key= {conceptItem.title} {...conceptItem} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{/* Using the TabButton component, passing the onClickAction prop with an arrow function 
						because we want to pass the specific tab name to the handler but not execute it immediately */}
						<TabButton
							isSelected={selectedTopic === "components"}
							onClickAction={() =>
								handleClickAction("components")
							}
						>
							{EXAMPLES.components.title}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onClickAction={() => handleClickAction("jsx")}
						>
							{EXAMPLES.jsx.title}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onClickAction={() => handleClickAction("props")}
						>
							{EXAMPLES.props.title}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onClickAction={() => handleClickAction("state")}
						>
							{EXAMPLES.state.title}
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
