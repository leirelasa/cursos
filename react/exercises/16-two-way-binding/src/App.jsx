import { useState } from "react";

import Review from "./components/Review";

// don't change the Component name "App"
function App() {
	const [feedback, setFeedback] = useState("");
	const [student, setStudent] = useState("");

	function handleFeedbackChange(event) {
		setFeedback(event.target.value);
	}

	function handleStudentChange(event) {
		setStudent(event.target.value);
	}

	return (
		<>
			<section id="feedback">
				<h2>Please share some feedback</h2>
				<p>
					<label>Your feedback</label>
					<textarea onChange={handleFeedbackChange} value={feedback} />
				</p>
				<p>
					<label>Your Name</label>
					<input type="text" onChange={handleStudentChange} value={student} />
				</p>
			</section>
			<section id="draft">
				<h2>Your feedback</h2>

				<Review feedback={feedback} student={student} />

				<p>
					<button>Save</button>
				</p>
			</section>
		</>
	);
}

export default App;
