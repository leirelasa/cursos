import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{CORE_CONCEPTS.map((conceptItem) => (
					// Key is a prop which must be unique and identifies each element
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</section>
	);
}
