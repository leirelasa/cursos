import './Header.css';
import atomImg from "../../assets/react-core-concepts.png";
const headerPosibilities = ["Fundamental", "Crucial", "Core"];
const atomDescr = "Stylized atom";

/* Returns a random number between 0 and max */
function getRandomNum(max) {
	return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
	const length = headerPosibilities.length;
	const description = headerPosibilities[getRandomNum(length - 1)];
	return (
		<header>
			<img src={atomImg} alt={atomDescr} />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app
				you are going to build!
			</p>
		</header>
	);
}