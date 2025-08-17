import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{CORE_CONCEPTS.map((conceptItem) => (
					// Key is a prop which must be unique and identifies each element
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</Section>
	);
}
